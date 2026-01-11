// components/CartSlider.jsx
import {
  ArrowRight,
  Heart,
  Minus,
  Plus,
  ShoppingCart,
  Star,
  Trash2,
  X,
} from "lucide-react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router";
import shoppingBag from "../../../src/assets/shopping-bag.png";
import {
  removeFromCart,
  updateQuantity,
} from "../../redux/app/features/cart/cartSlice";
import confirmToast from "../../utils/confirmToast";

export default function CartSlider({ isOpen, toggleCart }) {
  const location = useLocation();
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isOpen) {
      toggleCart();
    }
    // eslint-disable-next-line
  }, [location.pathname]);

  const handleRemoveFromCart = (productId) => {
    confirmToast({
      message: "Do you really want to remove this product?",
      onConfirm: () => {
        dispatch(removeFromCart(productId));
      },
      onCancel: () => {},
    });
  };

  const handleQuantity = (productId, delta, item) => {
    const current = item.cartQuantity ?? 0;
    const stock = item.quantity ?? 0;

    if (delta > 0 && current >= stock) {
      toast.error("No more stock available");
      return;
    }

    if (delta < 0 && current <= 1) {
      dispatch(removeFromCart(productId));
      return;
    }

    dispatch(updateQuantity({ productId, delta, stockLimit: stock }));
  };

  // Calculate subtotal, savings, shipping, total using cartQuantity
  const subtotal = cartItems.reduce((sum, item) => {
    const effectivePrice = item.discountPrice ?? item.price;
    return sum + effectivePrice * (item.cartQuantity ?? item.quantity ?? 0);
  }, 0);

  const savings = cartItems.reduce((sum, item) => {
    if (item.discountPrice) {
      return sum + (item.price - item.discountPrice) * (item.cartQuantity ?? 0);
    }
    return sum;
  }, 0);

  const shipping = subtotal >= 1500 ? 0 : 100;
  const total = subtotal + shipping;

  return (
    <>
      <div>
        <button onClick={toggleCart}>
          <ShoppingCart className="w-6 h-6 text-white group-hover:text-blue-600 transition-colors duration-200" />
        </button>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-60 z-40 transition-opacity duration-300"
          onClick={toggleCart}
        />
      )}

      {/* Cart Slider */}
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl z-50 transform transition-transform duration-300 ease-out flex flex-col ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50">
          <div className="flex items-center space-x-3">
            <h2 className="text-xl font-bold text-secondary">Shopping Cart</h2>
            {/* <span className="bg-blue-100 text-blue-800 text-sm font-semibold px-2.5 py-1 rounded-full"> */}
            {/* show total items count (sum of cartQuantity) */}
            {/* {cartItems.reduce((s, it) => s + (it.cartQuantity ?? 0), 0)}
            </span> */}
          </div>
          <button
            onClick={toggleCart}
            className="p-2 rounded-full cursor-pointer transition-colors duration-200"
          >
            <X className="w-5 h-5 text-secondary" />
          </button>
        </div>

        {/* Cart Items Scrollable */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <img className="w-32" src={shoppingBag} alt="shopping bag" />
              <h3 className="text-lg font-semibold text-white mb-2">
                Your cart is empty
              </h3>
              <p className="text-gray-500 mb-6">
                No items in your cart. Go on, fill it up with something you
                love!
              </p>
              <Link to="/products">
                <button
                  onClick={toggleCart}
                  className="bg-primary hover:bg-secondary text-white px-6 py-2 rounded-lg transition-colors duration-200"
                >
                  Continue Shopping
                </button>
              </Link>
            </div>
          ) : (
            cartItems.map((item) => (
              <div
                key={item._id}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-lg transition-all duration-200"
              >
                <div className="flex space-x-4">
                  {/* Product Image */}
                  <div className="relative flex-shrink-0">
                    <img
                      src={item.images[2]}
                      alt={item.name}
                      className="w-24 h-full object-cover rounded-lg"
                    />
                    {item.outOfStock && (
                      <div className="absolute inset-0 bg-red-500 bg-opacity-20 rounded-lg flex items-center justify-center">
                        <span className="text-xs text-red-600 font-bold bg-white px-2 py-1 rounded">
                          Out of Stock
                        </span>
                      </div>
                    )}
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0 flex flex-col">
                    {/* Name + Remove */}
                    <div className="flex justify-between items-start">
                      <h3 className="font-semibold text-gray-800 text-sm leading-snug line-clamp-2 pr-2">
                        {item.name.slice(0, 25)}
                      </h3>
                      <button
                        onClick={() => handleRemoveFromCart(item._id)}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors duration-200"
                      >
                        <Trash2 className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>

                    {/* Brand + Rating */}
                    <div className="flex items-center text-xs text-gray-500 mt-1">
                      <span className="mr-2">{item.brand}</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-3 h-3 text-yellow-400 fill-current" />
                        <span>{item.rating}</span>
                      </div>
                    </div>

                    {/* Variants */}
                    <div className="text-xs text-white mt-1">
                      <span>{item.color}</span>
                      {item.storage && <span> • {item.storage}</span>}
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2 mt-2">
                      <span className="font-bold text-gray-900 text-sm">
                        Tk {(item.discountPrice ?? item.price).toFixed(2)}
                      </span>
                      {item.price > (item.discountPrice ?? item.price) && (
                        <span className="text-xs text-gray-500 line-through">
                          Tk {item.price.toFixed(2)}
                        </span>
                      )}
                    </div>

                    {/* Quantity + Wishlist */}
                    <div className="flex items-center justify-between mt-3">
                      {/* Quantity */}
                      <div className="flex items-center border border-gray-300 rounded-lg overflow-hidden">
                        <button
                          onClick={() => handleQuantity(item._id, -1, item)}
                          className="p-1.5 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
                          disabled={(item.cartQuantity ?? 0) <= 1}
                        >
                          <Minus className="w-3 h-3 text-secondary" />
                        </button>
                        <span className="px-3 py-1.5 text-sm font-semibold min-w-[40px] text-center">
                          {item.cartQuantity ?? 0}
                        </span>
                        <button
                          onClick={() => handleQuantity(item._id, 1, item)}
                          disabled={
                            (item.cartQuantity ?? 0) >= (item.quantity ?? 0)
                          }
                          className="p-1.5 hover:bg-gray-200 transition-colors duration-200 disabled:opacity-50"
                        >
                          <Plus className="w-3 h-3 text-secondary" />
                        </button>
                      </div>

                      {/* Wishlist */}
                      <button className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200">
                        <Heart className="w-4 h-4 text-gray-400 hover:text-red-500" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer - Sticky */}
        {cartItems.length > 0 && (
          <div className="border-t border-gray-200 bg-gray-50 p-6 space-y-4 flex-shrink-0">
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-secondary">Subtotal</span>
                <span className="font-semibold">Tk {subtotal.toFixed(2)}</span>
              </div>
              {savings > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>You Save</span>
                  <span className="font-semibold">
                    - Tk {savings.toFixed(2)}
                  </span>
                </div>
              )}
              <div className="flex justify-between">
                <span className="text-secondary">Shipping</span>
                <span
                  className={
                    shipping === 0
                      ? "text-green-600 font-semibold"
                      : "font-semibold"
                  }
                >
                  {shipping === 0 ? "FREE" : `Tk ${shipping.toFixed(2)}`}
                </span>
              </div>
              <hr className="border-gray-300" />
              <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span className="text-blue-600">Tk {total.toFixed(2)}</span>
              </div>
            </div>

            {shipping > 0 && (
              <div className="text-xs text-center text-secondary bg-blue-100 p-2 rounded-lg">
                Add {(1500 - subtotal).toFixed(2)} Tk more for FREE shipping!
              </div>
            )}

            {/* Checkout Button */}
            <Link to="/checkout">
              <button className="w-full bg-primary hover:bg-secondary cursor-pointer text-white py-3 px-4 rounded-xl font-semibold flex items-center justify-center space-x-2 transition-all duration-200 hover:shadow-lg">
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </Link>
            <Link to="/products">
              <button
                onClick={toggleCart}
                className="mt-3 w-full bg-gray-200 hover:bg-gray-300 text-gray-800 py-3 px-4 rounded-xl font-semibold transition-colors duration-200"
              >
                Continue Shopping
              </button>
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
