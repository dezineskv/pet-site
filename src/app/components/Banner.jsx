import React from "react";

function Banner() {
  return (
    <div
      className="w-full min-h-[400px] md:w-6xl flex items-center justify-center mb-10"
      style={{
        backgroundImage:
          "url(https://i.pinimg.com/736x/a1/04/d3/a104d36955c78f0e7e857ce85965c0df.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover", opacity:".8"
      }}
    >
      <div className="text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold text-black">Pet Shelter Program</h1>
          <p className="mb-5 text-black font-bold text-2xl">
            Volunteer in your local shelter and help find loving homes for pets
            in need.
          </p>
          <button className="btn btn-primary rounded-lg">Get Started</button>
        </div>
      </div>
    </div>
  );
}

export default Banner;
