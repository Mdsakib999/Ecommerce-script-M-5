import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
export default function Button({ content, to, type = "primary" }) {
  return (
    <Link to={to}>
      {type === "primary" ? (
        <button className="bg-primary text-white px-8 py-2 rounded-lg font-semibold text-lg cursor-pointer transform hover:bg-secondary transition-all duration-300 shadow-lg hover:shadow-xl">
          {content}
        </button>
      ) : type === "secondary" ? (
        <button className="border w-40 md:w-44 py-2 px-2 text-center rounded-full cursor-pointer text-sm md:text-lg font-semibold hover:bg-secondary-light hover:text-white transition">
          {content}
        </button>
      ) : (
        <button className="flex relative flex-col items-center group justify-center cursor-pointer text-md md:text-lg text-white font-semibold">
          {/* <span className="bg-primary rounded-full p-1"><ArrowRight size="24" color="white" /></span> */}
          <span className="text-md md:text-lg text-primary font-semibold">{content}</span>
          <hr className="bg-primary absolute top-6 w-full opacity-100 group-hover:opacity-0 h-[2px]" />
        </button>
      )}
    </Link>
  );
}
