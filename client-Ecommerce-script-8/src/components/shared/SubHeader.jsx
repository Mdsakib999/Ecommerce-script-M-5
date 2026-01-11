import { MapPin } from "lucide-react";
import { Link } from "react-router";

export default function SubHeader() {
  return (
    <div className="bg-secondary border-b border-gray-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center md:justify-between items-center py-2 text-sm">
          <div className="flex items-center space-x-1 text-white">
            <MapPin className="w-4 h-4" />
            <span className="font-medium">Deliver to</span>
            <span className="text-white font-semibold">Chattogram 4000</span>
          </div>
          <div className="hidden lg:flex items-center space-x-6 text-white">
            <Link to="/about" className="cursor-pointer">
              About
            </Link>
            <Link to="/track-order" className="cursor-pointer">
              Track Order
            </Link>
            <Link to="/faq" className="cursor-pointer">
              Faq
            </Link>
            <Link to="/contact" className="cursor-pointer">
              contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
