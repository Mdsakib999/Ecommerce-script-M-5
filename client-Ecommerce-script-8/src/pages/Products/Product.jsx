// components/Product.jsx
import { ShoppingCart } from "lucide-react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import { addToCart } from "../../redux/app/features/cart/cartSlice";

export default function Product({ product }) {
  const cartItems = useSelector((state) => state.cart.items);
  const existingItem = cartItems.find((item) => item._id === product._id);

  // existingItem?.cartQuantity is how many user added already
  const hasReachedStock =
    existingItem && existingItem.cartQuantity >= product.quantity;
  const isInCart = !!existingItem;

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    if (hasReachedStock) {
      toast.error("Out of stock — you’ve added all available items");
      return;
    }

    dispatch(addToCart(product));

    if (!isInCart) {
      toast.success(<h1 className="text-center font-serif">Added to cart</h1>);
    } else {
      toast(<h3 className="text-center font-serif">Quantity increased</h3>, {
        icon: "🛒",
        position: "top-center",
      });
    }
  };

  return (
    <div className="max-w-64 mx-auto">
      <Link key={product?._id} to={`/product/${product?._id}`}>
        <div className="w-full group mx-auto bg-white border border-gray-300 rounded-lg  overflow-hidden relative">
          {product?.discountPrice && (
            <div className="absolute top-1 opacity-100 sm:opacity-0 sm:group-hover:opacity-100 transition-all duration-300 left-0 bg-[#3cb371] text-white text-xs font-bold px-3 py-1 m-2 rounded-full">
              SALE
            </div>
          )}
          {/* Add to Cart Button */}
          <div className="pt-2">
            <button
              onClick={(e) => {
                e.preventDefault(),
                  e.stopPropagation(),
                  handleAddToCart(product);
              }}
              disabled={hasReachedStock}
              className={`absolute right-4 flex items-center justify-center opacity-100 sm:opacity-0 sm:group-hover:opacity-100 cursor-pointer rounded-lg px-3 py-2 font-semibold border-1 border-gray-200 text-sm space-x-2 transition-all duration-300 ${
                hasReachedStock
                  ? "bg-gray-400 text-white cursor-not-allowed"
                  : isInCart
                  ? "bg-emerald-400 text-white hover:bg-emerald-500"
                  : "shadow-lg hover:bg-primary hover:text-white"
              }`}
            >
              <ShoppingCart
                size={24}
                className="group-hover:scale-110 transition-transform"
              />
              <span>
                {hasReachedStock ? "Out of Stock" : isInCart ? "✓" : ""}
              </span>
            </button>
          </div>
          <div className="p-4 flex flex-col items-center">
            <div className="w-40 h-40 mb-4">
              <img
                src={product?.images[0]}
                alt={product?.name}
                className="w-full h-full rounded-lg object-cover"
              />
            </div>
          </div>
        </div>
      </Link>
      {/* Product Info */}
      <div className="py-6 pt-4">
        <div className="space-y-3">
          {/* Category */}
          <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide inline-block">
            {product?.category}
          </p>

          {/* Product Name */}
          <Link to={`/product/${product?._id}`}>
            <h2 className="text-lg font-bold text-gray-900 leading-tight line-clamp-2">
              {product?.name.slice(0, 25)}
            </h2>
          </Link>

          {/* Price Section */}
          <div className="flex items-center space-x-2">
            {product?.discountPrice ? (
              <>
                <p className="text-lg font-bold text-primary">
                  ${product?.discountPrice}
                </p>
                <p className="text-md text-gray-400 line-through font-medium">
                  ${product?.price}
                </p>
              </>
            ) : (
              <p className="text-lg font-black text-gray-700">
                ${product?.price}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
