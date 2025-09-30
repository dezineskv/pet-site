import React from "react";

function Hero() {
  return (
    <div className="w-full hero-img relative">
      <div className="hero-overlay"></div>
      <div className="flex flex-col justify-start items-start sm:ml-10 sm:pl-10 md:ml-50 mt-[-500px] md:mb-auto md:max-w-md text-white">
        <h1 className="mb-5 ml-6 text-5xl font-bold">
          Welcome to <span className="text-primary">pet</span>
        </h1>
        <p className="mb-5 ml-6 sm:text-2xl">
          The best products for your beloved pets, delivered with care and love.
        </p>
        <button className="btn btn-primary rounded-lg sm:text-lg ml-6">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
