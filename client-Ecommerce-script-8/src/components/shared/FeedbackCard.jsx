import React from 'react';
import { Star, Quote } from 'lucide-react';
import profilePic from "../../assets/profile.png";
export default function FeedbackCard({ 
  name = "David Parker",
  role = "CEO, Tech Company",
  review = "Lorem morbi et amet suscipit. At sed proin quis risus urna a. Magna in odio in urna amet ultrices fermentum.",
  rating = 5,
}) {
  return (
    <>
      <div className="mt-2 rounded-lg mx-auto text-center border-1 border-gray-300 p-8 mb-16 overflow-hidden">
        {/* Quote Icon - Top Left */}
        <div className="quote-icon w-full h-full mb-4 rounded-2xl flex items-center justify-center">
          <Quote color="#FB2E86" size={28} strokeWidth={2.5} />
        </div>
        {/* Review Text */}
        <div className="mb-6">
          <p className="review-text text-gray-600 leading-relaxed text-base italic">
            {review}
          </p>
        </div>
                {/* Profile Section */}
        <div className="flex flex-col items-center gap-5 mb-6 mt-2">
          <div className="profile-ring relative flex-shrink-0">
            <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-700 shadow-lg">
              <img 
                src={profilePic}
                alt={name}
                className="w-full h-full object-cover"
              />
            </div>
          <div className="absolute bottom-0 right-0 z-50">
            <div className="w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          </div>
          
          <div className="flex-1 pt-1">
            <h6 className="text-gray-700 font-semibold text-xl mb-1.5 tracking-tight">
              {name}
            </h6>
            <p className="text-green-400 text-sm font-medium flex items-center gap-1.5">
              {role}
            </p>
          </div>
        </div>
        {/* Rating and Score Section */}
        <div className="flex items-center justify-center">
          <div className="flex gap-1.5">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                fill={i < rating ? "#FCD34D" : "none"}
                stroke={i < rating ? "#FCD34D" : "#4B5563"}
                strokeWidth={i < rating ? 0 : 1.5}
                size={22}
                className={i < rating ? "text-yellow-300 star-animate" : "text-gray-600"}
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}