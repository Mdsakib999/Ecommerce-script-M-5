import { Crosshair, Headphones, Target } from "lucide-react";
import banner from "../assets/about-banner.jpg";
import banner3 from "../assets/about-banner3.jpg";
import banner4 from "../assets/about-banner4.jpg";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import Countup from "../components/shared/Countup";
export default function About() {
  return (
    <div className="">
      <div
        className="relative mb-12 py-16 max-h-96 bg-no-repeat bg-cover bg-center flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${banner})` }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="z-10 flex items-center flex-col gap-4 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl text-white capitalize">
            About Us
          </h1>
          <p className="tracking-widest">WE CAN DO MORE FOR YOU</p>
        </div>
      </div>
      <div className="my-24">
        <h3 className="text-center text-primary font-semibold text-md">
          SINCE 1982 OUR STORY
        </h3>
        <p className="text-center font-semibold text-lg sm:w-1/2 mx-auto px-4 text-gray-500 opacity-80 mt-2">
          In early 1982, founder and creative director had the idea to design a
          creative collection where comfort, fashion, and distinction are key.
          was born a brand that believes fashion should go hand in hand with
          comfort.
        </p>
      </div>
      <hr className="max-w-7xl mx-auto text-gray-300 my-24" />
      <div className="px-8 md:px-4 flex flex-col items-center md:flex-row gap-4 max-w-7xl mx-auto text-center my-16">
        <div className="w-full md:w-1/2 flex items-center mx-16">
          <img className="rounded-lg" src={banner3} alt="" />
        </div>
        <div className="w-full md:w-1/2 text-left flex flex-col justify-center gap-4">
          <h2 className="text-3xl font-semibold">Story About Us</h2>
          <p className="opacity-60">
            At ElectraBay Limited, we are committed to making online shopping simple,
            enjoyable, and trustworthy. Our mission is to deliver high-quality
            products directly to your doorstep while providing exceptional
            customer service. Every item is carefully selected for quality,
            value, and style. We aim to build a community where customers feel
            supported, valued, and inspired. Your satisfaction drives everything
            we do, making every interaction seamless and memorable.
          </p>
          <h6 className="text-primary -mb-4 text-md font-semibold">
            HARVEY JONES
          </h6>
          <p className="text-gray-400 text-sm font-semibold">Ceo & founder</p>
        </div>
      </div>
      <div
        className="grid relative gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-4 my-24 py-18 w-full bg-fixed bg-center bg-cover bg-no-repeat mx-auto"
        style={{ backgroundImage: `url(${banner4})` }}
      >
        <div className="absolute z-0 inset-0 bg-black opacity-50"></div>
        <div className="flex z-10 text-white flex-col gap-1 py-10 items-center justify-center text-center">
          <h1 className="text-4xl">
            <Countup>800</Countup>+
          </h1>
          <p className="text-md">Product Types</p>
        </div>
        <div className="flex  z-10 text-white  flex-col gap-1 py-10 items-center justify-center text-center">
          <h1 className="text-4xl">
            <Countup>12</Countup>+
          </h1>
          <p className="text-md">Years Of Experience</p>
        </div>
        <div className="flex z-10  text-white  flex-col gap-1 py-10 items-center justify-center text-center">
          <h1 className="text-4xl">
            {" "}
            <Countup>2500</Countup>+{" "}
          </h1>
          <p className="text-md">Trust Customers</p>
        </div>
        <div className="flex z-10  text-white  flex-col gap-1 py-10 items-center justify-center text-center">
          <h1 className="text-4xl">
            {" "}
            <Countup>15</Countup>+{" "}
          </h1>
          <p className="text-md">Stores Nationwide</p>
        </div>
      </div>

      <div className="bg-secondary-light text-center my-24 py-24">
        <div className="max-w-7xl mx-auto gap-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-white p-8 rounded-full">
              <Target size="32" color="#FB2E86" />
            </div>
            <h6 className="font-semibold mt-4">OUR MISSION</h6>
            <p className="w-70 text-gray-500">
              The most extraordinary people in the world today don’t have a
              career. They have a mission.
            </p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-white p-8 rounded-full">
              <Crosshair size="32" color="#FB2E86" />
            </div>
            <h6 className="font-semibold mt-4">OUR VISION</h6>
            <p className="w-70 text-gray-500">
      Create the highest vision possible for your life, because you become what you believe.
            </p>
          </div>
          <div className="flex gap-4 flex-col items-center">
            <div className="bg-white p-8 rounded-full">
              <Headphones size="32" color="#FB2E86" />
            </div>
            <h6 className="font-semibold mt-4">OUR SUPPORT</h6>
            <p className="w-70 text-gray-500">
              Create the highest vision possible for your life, because you become what you believe.
            </p>
          </div>
        </div>
      </div>

      <div className="">
        <h3 className="text-center text-primary font-semibold text-md">
          Highly Skilled
        </h3>
        <h2 className="text-3xl mt-2 text-center font-semibold">
          Meet our teams
        </h2>
        <div className="grid text-center gap-24 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-7xl mx-auto mt-12 mb-36">
          <div className="h-90">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={person1}
              alt=""
            />
            <h6 className="mt-4 text-black text-md font-semibold">
              HARVEY JONES
            </h6>
            <p className="text-base text-gray-500 font-semibold">
              Ceo & founder
            </p>
          </div>
          <div className="h-90">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={person2}
              alt=""
            />
            <h6 className="mt-4 text-black text-md font-semibold">
              HARLIE PUTH
            </h6>
            <p className="text-base text-gray-500 font-semibold">
              Designer & model
            </p>
          </div>
          <div className="h-90">
            <img
              className="h-full w-full object-cover rounded-lg"
              src={person3}
              alt=""
            />
            <h6 className="mt-4 text-black text-md font-semibold">
              mory Orlando
            </h6>
            <p className="text-base text-gray-500 font-semibold">Marketing</p>
          </div>
          <div className="h-90">
            <img className="h-full w-full rounded-lg" src={person4} alt="" />
            <h6 className="mt-4 text-black text-md font-semibold">
              Tristin Chineze
            </h6>
            <p className="text-base text-gray-500 font-semibold">
              Distribution
            </p>
          </div>
        </div>
        <hr className="mx-auto text-gray-300 my-24" />
      </div>
    </div>
  );
}
