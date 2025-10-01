import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

function page() {
  return (
    <>
      <Nav />
      <div className="w-full">
        <h1 className="text-4xl font-bold text-center my-8">Our Services</h1>
        <div className="flex flex-col gap-4">
          <div className="flex flex-row justify-center gap-4 mb-6">
            <div className="card w-96 bg-base-100 card-lg shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Pet Supplies</h2>
                <p>
                 At pet, we offer a wide range of high-quality pet supplies to keep your furry friends happy and healthy. From nutritious food to fun toys, we have everything you need for your pets.
                </p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Shop Now</button>
                </div>
              </div>
            </div>
            <div className="card w-96 bg-base-100 card-lg shadow-sm">
              <div className="card-body">
                <h2 className="card-title">Pet Health</h2>
                <p>
                  Whether it be health supplements, grooming products, or regular check-ups, we are here to support your pet's well-being.
                </p>
                <div className="justify-end card-actions">
                  <button className="btn btn-primary">Learn More</button>
                </div>
              </div>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-center my-6">Locations</h1>

          <div className="carousel md:max-w-5xl mx-auto text-center pb-8">
            <div id="slide1" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1625726411847-8cbb60cc71e6.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide4" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide2" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1609621838510-5ad474b7d25d.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide1" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide3" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1414694762283-acccc27bca85.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide2" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide4" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
              <img
                src="https://img.daisyui.com/images/stock/photo-1665553365602-b2fb8e5d1707.webp"
                className="w-full"
              />
              <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                <a href="#slide3" className="btn btn-circle">
                  ❮
                </a>
                <a href="#slide1" className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default page;
