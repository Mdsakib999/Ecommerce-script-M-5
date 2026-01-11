import { Clock, Mail, MapPin, Phone } from "lucide-react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import contact from "../assets/contact.jpg";
export default function ContactPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = () => {
    toast.success(
      <h1 className="font-serif text-center">✅ Message sent successfully!</h1>,
      {
        position: "top-center",
      }
    );
    reset();
  };

  return (
    <>
      <div
        className="relative mb-12 py-16 max-h-96 bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${contact})` }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="z-10 flex items-center flex-col gap-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white capitalize">
            Contact Us
          </h1>
          <p className="tracking-widest">We’d love to hear from you</p>
        </div>
      </div>
      <div className="text-center py-12">
        <h2 className="text-3xl font-semibold mb-12">Quick Support</h2>
        <div className="max-w-7xl py-4 mx-auto gap-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-secondary-light p-8 rounded-full">
              <MapPin size="32" color="#FB2E86" />
            </div>
            <p className="w-70 text-gray-700">123 Street, Dhaka, Bangladesh</p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-secondary-light p-8 rounded-full">
              <Phone size="32" color="#FB2E86" />
            </div>
            <p className="w-70 text-gray-700">+880 123 456 789</p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-secondary-light p-8 rounded-full">
              <Mail size="32" color="#FB2E86" />
            </div>
            <p className="w-70 text-gray-700">support@yourstore.com</p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-secondary-light p-8 rounded-full">
              <Clock size="32" color="#FB2E86" />
            </div>
            <p className="w-70 text-gray-700">Sat - Thu: 10AM - 8PM</p>
          </div>
        </div>
      </div>
      <div className="flex bg-secondary-light items-center justify-center p-6">
        <div className="max-w-7xl w-full bg-secondary-light p-2 sm:p-8">
          <div>
            <h2 className="text-3xl text-center font-semibold mb-4">
              Keep in touch with us
            </h2>
          </div>
          <div className="p-0 sm:p-6">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-5 flex flex-col md:flex-row gap-8 justify-between"
            >
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                {/* Name */}
                <div>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 border bg-white border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                        message: "Invalid email address",
                      },
                    })}
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                    placeholder="Enter subject"
                    className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                  />
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>
                <div className="">
                  <p>
                    Have questions? We’d love to hear from you. Our support team
                    is here to help you anytime.
                  </p>
                </div>
              </div>

              {/* Message */}
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                <textarea
                  {...register("message", { required: "Message is required" })}
                  placeholder="Write your message..."
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg  focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition h-54 resize-none"
                ></textarea>
                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-primary text-white py-3 rounded-lg font-medium hover:bg-secondary cursor-pointer transition"
                >
                  Send Message
                </button>
                {errors.message && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
