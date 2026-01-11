import { Truck,Gift,Shield,CreditCard } from "lucide-react";
const Solution = () => {
  const solution = [
    {
      icon: Truck,
      title: "Free Shipping",
      subtitle: "Delivery within 5 to 7 days,",
    },
    {
      icon: Gift,
      title: "Gift Voucher",
      subtitle: "Surprise coupon voucher,",
    },
    {
      icon: Shield,
      title: "Money Back",
      subtitle: "Refund within 30 days,",
    },
    {
      icon: CreditCard,
      title: "Safe Payment",
      subtitle: "100% secure with us,",
    },
  ];
  return (
    <section className="py-20 bg-white px-4">
      <div className="max-w-7xl border-secondary-light rounded-lg border-2 border-r-0 grid lg:grid-cols-4 mx-auto sm:grid-cols-2 grid-cols-1">
        {solution.map((item,idx) => (
          <div className="px-4 group py-6 border-r-2 rounded-lg border-secondary-light flex flex-col justify-center items-center" key={idx}>
            <span className="group-hover:rotate-y-180 transform transition-all duration-300 group-hover:text-primary"><item.icon size="32"/></span>
            <h3 className="text-md mt-4 text-secondary font-semibold">{item.title}</h3>
            <p className="text-gray-500 text-sm mt-1">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Solution;
