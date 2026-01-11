import { Minus, Plus } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import faq from '../assets/faq-2639673_1280.png';
export default function Faq() {
  const faqs = [
    {
      question: "What types of electronic accessories do you sell?",
      answer:
        "We offer a wide range of electronic accessories including headphones, chargers, phone cases, smartwatches, Bluetooth speakers, gaming accessories, and much more. All our products are from trusted brands with warranty support.",
    },
    {
      question: "Do you ship internationally?",
      answer:
        "Yes, we ship our products worldwide. Shipping fees and delivery time may vary depending on your location. You can calculate shipping costs at checkout.",
    },
    {
      question: "How can I track my order?",
      answer:
        "After placing an order, you will receive a tracking number via email. You can use this number on our tracking portal to see real-time updates on your shipment.",
    },
    {
      question: "What is your return and refund policy?",
      answer:
        "We offer a 30-day return policy on all electronic accessories. Products must be unused and in original packaging. Refunds are processed within 5-7 business days after we receive the returned item.",
    },
    {
      question: "Do your products come with a warranty?",
      answer:
        "Yes, most of our electronic accessories come with a 6-month to 1-year warranty depending on the brand. Warranty details are provided with each product description.",
    },
    {
      question: "What is your return and refund policy?",
      answer:
        "We offer a 30-day return policy on all electronic accessories. Products must be unused and in original packaging. Refunds are processed within 5-7 business days after we receive the returned item.",
    },
    {
      question: "Do your products come with a warranty?",
      answer:
        "Yes, most of our electronic accessories come with a 6-month to 1-year warranty depending on the brand. Warranty details are provided with each product description.",
    },
  ];

  const [openIndex, setOpenIndex] = useState(null);
  const [heights, setHeights] = useState([]);

  const contentRefs = useRef([]);

  useEffect(() => {
    setHeights(contentRefs.current.map((ref) => (ref ? ref.scrollHeight : 0)));
  }, []);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="p-4 sm:p-10 my-16 max-w-7xl mx-auto flex flex-col md:flex-row gap-4">
<div className="w-full md:w-2/5 flex flex-col relative items-start">
        <h3 className="text-primary text-md font-semibold">MOST COMMON</h3>
      <h2 className="text-xl mb-10 md:text-2xl font-semibold">
        Popular questions
      </h2>
      <img className="-ml-6 hidden md:block" src={faq} alt="" />
      
</div>
      <div className="pl-4 sm:pl-12 border-l-1 border-gray-400 gap-10">
        
        {/* Right side FAQ */}
        <div className=" space-y-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="overflow-hidden"
            >
              <button
                className="w-full text-left cursor-pointer border-b-1 border-gray-400 flex justify-between items-center  py-3 font-semibold focus:outline-none transition-colors"
                onClick={() => toggleFaq(index)}
              >
                {faq.question}
                {openIndex === index ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className="px-4 overflow-hidden transition-all duration-500 ease-in-out text-gray-700 text-sm"
                style={{
                  maxHeight:
                    openIndex === index ? `${heights[index]}px` : "0px",
                }}
              >
                <div className="py-1">{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
