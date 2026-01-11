import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { Link } from "react-router";
import logo from "../../assets/footerLogo.png";
import Newsletter from "../Home/Newsletter";

export default function Footer() {
  return (
    <>
      <Newsletter />
      <footer className="bg-[#11073d] text-white px-6 py-10 ">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-6 gap-8 md:gap-8 lg:gap-0 text-left px-2">
          {/* Logo & Description */}
          <div className="space-y-4 pt-1 col-span-1 md:col-span-2 px-1">
            <Link to="/" className="mb-2">
              <img className="w-48" src={logo} alt="Shopverse logo" />
            </Link>

            <p className="text-sm mt-4">
              <span className="text-lg font-semibold">
                Shopverse Industries Ltd.
              </span>
              <br />
              <span className="opacity-60">
                Providing reliable tech since 1992
              </span>
            </p>
          </div>

          {/* Services */}
          <div className="md:pl-10">
            <h6 className="font-semibold mb-4 text-lg">Services</h6>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#" className="hover:underline">
                  Branding
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Marketing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Advertisement
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="md:pl-10">
            <h6 className="font-semibold mb-4 text-lg">Company</h6>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <Link to="/about" className="cursor-pointer hover:underline">
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/track-order"
                  className="cursor-pointer hover:underline"
                >
                  Track Order
                </Link>
              </li>
              <li>
                <Link to="/faq" className="cursor-pointer hover:underline">
                  Faq
                </Link>
              </li>
              <li>
                <Link to="/contact" className="cursor-pointer hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h6 className="font-semibold mb-4 text-lg">Legal</h6>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#" className="hover:underline">
                  Terms of use
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Privacy policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cookie policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Marketing policy
                </a>
              </li>
            </ul>
          </div>

          {/* Social → span 2 cols */}
          <div className="">
            <form className="space-y-3">
              <div className="flex space-x-3 pt-2">
                <a
                  href="#"
                  className="border-2 border-gray-600 hover:border-blue-500 bg-gray-900 text-gray-200 hover:bg-blue-500 hover:text-white duration-300 rounded-full p-2"
                >
                  <Facebook size={22} />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-600 hover:border-red-500 bg-gray-900 text-gray-200 hover:bg-red-500 hover:text-white duration-300 rounded-full p-2"
                >
                  <Youtube size={22} />
                </a>
                <a
                  href="#"
                  className="border-2 border-gray-600 hover:border-blue-400 bg-gray-900 text-gray-200 hover:bg-blue-400 hover:text-white duration-300 rounded-full p-2"
                >
                  <Twitter size={22} />
                </a>{" "}
                <a
                  href="#"
                  className="border-2 border-gray-600 hover:border-rose-500 bg-gray-900 text-gray-200 hover:bg-rose-500 hover:text-white duration-300 rounded-full p-2"
                >
                  <Instagram size={22} />
                </a>
              </div>
            </form>
          </div>
        </div>

        <div className="pt-10">
          <hr className="border-gray-700" />
          <p className="text-center text-sm opacity-60 pt-4">
            Shopverse © 2025 Demo Store. All Rights Reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
