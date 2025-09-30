import React from "react";
import pets from "../../db/pets.json";
import Image from "next/image";
import Nav from "./Nav";
import Footer from "./Footer";

function SingleProduct({ id, name, price, description, image }) {
  console.log(id, name, price, description, image);
  const pet = pets.find((pet) => pet.id === id);

  if (!pet) {
    return <div>Product not found</div>;
  }

  return (
    <>
      <Nav />
      <div className="text-center my-8">
        <h1 className="text-4xl font-bold mb-10">{pet.name}</h1>
        <div className="mx-auto md:max-w-2xl pb-4">
          <div key={id} className="card card-side bg-base-100 shadow-sm">
            <Image
              src={pet.image}
              alt={pet.name}
              width={300}
              height={200}
              className="h-[200px] overflow-hidden rounded-t-lg"
            />
            <div className="card-body">
              <div className="rating">
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  aria-label="1 star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  aria-label="2 star"
                  defaultChecked
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  aria-label="3 star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  aria-label="4 star"
                />
                <input
                  type="radio"
                  name="rating-1"
                  className="mask mask-star"
                  aria-label="5 star"
                />
              </div>
              <h2 className="card-title">{pet.name}</h2>
              <p className="text-left">{pet.description}</p>
              <div className="card-actions justify-start font-bold text-lg">
                ${pet.price}
              </div>
              <div className="card-actions justify-start">
                <button className="btn btn-primary rounded-lg">Buy Now</button>
              </div>
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 pt-6 my-8">
            <input type="radio" name="my-accordion-2" defaultChecked />
            <div className="collapse-title font-semibold">
              How do I create an account?
            </div>
            <div className="collapse-content text-sm">
              Click the "Sign Up" button in the top right corner and follow the
              registration process.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 my-6">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              I forgot my password. What should I do?
            </div>
            <div className="collapse-content text-sm">
              Click on "Forgot Password" on the login page and follow the
              instructions sent to your email.
            </div>
          </div>
          <div className="collapse collapse-arrow bg-base-100 border border-base-300 my-6">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-semibold">
              How do I update my profile information?
            </div>
            <div className="collapse-content text-sm">
              Go to "My Account" settings and select "Edit Profile" to make
              changes.
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default SingleProduct;
