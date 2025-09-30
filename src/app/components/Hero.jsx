import React from "react";

function Hero() {
  return (
    <div className="w-full hero-img relative">
      <div className="hero-overlay"></div>
      <div className="absolute top-20 left-20 sm:left-10 sm:max-w-[200px]  md:max-w-md text-white">
        <h1 className="mb-5 text-5xl font-bold">
          Welcome to <span className="text-primary">pet</span>
        </h1>
        <p className="mb-5">
          The best products for your beloved pets, delivered with care and love.
        </p>
        <button className="btn btn-primary rounded-lg">Shop Now</button>
      </div>
    </div>
  );
}

export default Hero;
