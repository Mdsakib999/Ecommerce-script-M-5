import { ShoppingBag, Sparkles } from "lucide-react";

export default function Loader() {
  return (
    <div className="min-h-screen fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Animated background elements */} 
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-transparent via-blue-100 to-transparent opacity-30 animate-pulse-slow"></div>
      </div>

      <div className="flex flex-col items-center space-y-6 p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl border border-blue-100">
        {/* Animated container with floating effect */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute inset-0 bg-blue-400 rounded-full blur-lg opacity-20 animate-pulse"></div>
          
          {/* Main icon container */}
          <div className="relative bg-gradient-to-br from-blue-500 to-purple-600 p-4 rounded-2xl shadow-lg transform rotate-0 hover:rotate-180 transition-all duration-1000 animate-bounce-slow">
            <ShoppingBag className="w-8 h-8 text-white" />
          </div>
          
          {/* Orbiting elements */}
          <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping"></div>
          <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-700"></div>
        </div>

        {/* Loading text with gradient */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            ElectraBay Limited
          </h2>
          <p className="text-gray-600 text-sm font-medium flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse" />
            Curating your shopping experience...
            <Sparkles className="w-4 h-4 text-yellow-500 animate-pulse delay-300" />
          </p>
        </div>
      </div>
    </div>
  );
}