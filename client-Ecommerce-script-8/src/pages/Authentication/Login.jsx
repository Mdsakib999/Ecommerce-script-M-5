import { Eye, EyeOff } from "lucide-react";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router";
import googleLogo from "../../assets/googleLogo.png";
import loginImage from "../../assets/login.jpg";
import logo from "../../assets/logo.png";
import { useLoginMutation } from "../../redux/app/services/auth/authApi";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleGoogleLogin = () => {
    setIsGoogleLoading(true);
    window.open(`${import.meta.env.VITE_SERVER_URL}/auth/google`, "_self");
  };

  const [login, { isLoading }] = useLoginMutation();

  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const error = params.get("error");

    if (error) {
      toast.error(<h1 className="font-serif">{error}</h1>, {
        position: "top-center",
      });

      const newUrl = window.location.origin + window.location.pathname;
      window.history.replaceState({}, document.title, newUrl);
    }
  }, []);

  const onSubmit = async (data) => {
    try {
      const res = await login(data).unwrap();

      if (res?.success) {
        toast.success(<p className="font-serif">Logged in successfully</p>, {
          position: "top-center",
        });
        navigate("/");
      }
    } catch (err) {
      const errorMessage =
        err?.data?.message || err?.message || "Something went wrong";

      if (errorMessage === "Password does not match") {
        toast.error(<h1 className="font-serif">Invalid credentials</h1>, {
          position: "top-center",
        });
      } else if (errorMessage === "User is not verified") {
        toast.error(
          <h1 className="font-serif">Your account is not verified</h1>,
          {
            position: "top-center",
          }
        );
      } else if (
        errorMessage === "You have authenticated through Google login!"
      ) {
        toast.error(
          <h1 className="font-serif">You are authenticated through Google!</h1>,
          {
            position: "top-center",
          }
        );
      } else {
        toast.error(<h1 className="font-serif">{errorMessage}</h1>, {
          position: "top-center",
        });
      }
    }
  };

  return (
    <div className="flex max-w-7xl mx-auto min-h-screen">
      {/* Left side - Image */}
      <div className="hidden md:flex w-1/2 items-center justify-center relative">
        <img
          src={loginImage}
          alt="Shop illustration"
          className="object-cover max-h-screen"
        />
      </div>

      {/* Right side - Form */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-white p-10">
        <div className="w-full max-w-md">
          {/* Logo */}
          <Link to="/" className="flex flex-col bg-secondary my-4 rounded-lg">
            <img className="w-40 mx-auto" src={logo} alt="UniMart logo" />
          </Link>

          {/* Welcome Text */}
          <h1 className="text-3xl font-semibold text-slate-900 mb-3">
            Hey, Welcome Back!
          </h1>
          <p className="text-slate-600 mb-8">
            Log in to your UniMart account and start shopping
          </p>

          {/* Form */}
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email */}
            <div>
              <label className="block mb-2 font-medium text-slate-700">
                Email
              </label>
              <input
                type="email"
                {...register("email", { required: "Email is required" })}
                className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-2 font-medium text-slate-700">
                Password
              </label>
              <input
                type={showPassword ? "text" : "password"}
                {...register("password", { required: "Password is required" })}
                className="w-full border border-slate-300 rounded-xl p-4 focus:ring-2 focus:ring-slate-500 focus:border-slate-500 outline-none transition-all pr-12"
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute top-12 right-4 text-slate-400 hover:text-slate-600 transition-colors"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && (
                <p className="text-red-500 text-sm mt-2">
                  {errors.password.message}
                </p>
              )}
            </div>

            <button
              disabled={isLoading || isGoogleLoading}
              type="submit"
              className={`cursor-pointer w-full bg-black text-white py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors shadow-lg hover:shadow-xl ${
                isLoading
                  ? "bg-slate-500 cursor-not-allowed text-slate-950 border-slate-200"
                  : "text-slate-700 hover:bg-slate-50 border-slate-300 shadow-sm hover:shadow-md"
              }`}
            >
              {isLoading ? "signing in..." : "Sign In"}
            </button>

            <button
              onClick={handleGoogleLogin}
              type="button"
              disabled={isGoogleLoading || isLoading}
              className={`cursor-pointer flex items-center justify-center w-full gap-3 px-4 py-4 rounded-xl font-medium transition-colors duration-200 border ${
                isGoogleLoading
                  ? "bg-slate-100 cursor-not-allowed text-slate-400 border-slate-200"
                  : "bg-white text-slate-700 hover:bg-slate-50 border-slate-300 shadow-sm hover:shadow-md"
              }`}
            >
              <img src={googleLogo} alt="google" className="w-5 h-5" />
              <span>
                {isGoogleLoading ? "Signing up..." : "Continue with Google"}
              </span>
            </button>
          </form>

          <p className="text-center text-slate-600 mt-8">
            Don't have an account?{" "}
            <Link
              to="/register"
              className="text-slate-900 font-medium hover:underline transition-all"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
