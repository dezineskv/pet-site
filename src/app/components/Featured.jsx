import React from "react";
import pets from "../../db/pets.json";
import Image from "next/image";
import SingleProduct from "./SingleProduct";
import Link from "next/link";

function Featured() {
  return (
    <>
      <h1 className="mb-5 text-5xl text-center font-bold pt-10 pb-6">
        Featured Products
      </h1>
      {/* <div className="flex flex-wrap justify-center gap-6 space-y-2 md:max-w-6xl mx-auto px-6">
        {pets.map(
          (pet) =>
            pet.featured && (
              <Link key={pet.id} href={`/products/${pet.id}`}>
                <SingleProduct id={pet.id} />
              </Link>
            )
        )}
      </div> */}
      <div className="w-full">
        <div
          className="md:max-w-5xl flex sm:flex-col md:flex-row flex-wrap justify-center space-y-4 gap-4"
          style={{ maxWidth: "1140px", margin: "0 auto" }}
        >
          {pets.map(
            (pet) =>
              pet.featured && (
                <div
                  key={pet.id}
                  className="card card-side bg-base-100 shadow-sm w-[300px] mx-2 max-h-[409px]"
                  style={{ width: "300px" }}
                >
                  <Link href={`/products/${pet.id}`}>
                    <Image
                      src={pet.image}
                      alt={pet.name}
                      width={300}
                      height={200}
                      className="h-[200px] min-w-[300px] overflow-hidden rounded-t-lg"
                    />
                    <div className="card-body text-foreground">
                      <h2 className="card-title text-foreground">{pet.name}</h2>
                      <p>{pet.description}</p>
                      <div className="card-actions justify-start font-bold text-lg">
                        ${pet.price}
                      </div>
                      <div className="card-actions justify-end">
                        <button className="btn btn-primary rounded-lg">
                          Details
                        </button>
                      </div>
                    </div>
                  </Link>
                </div>
              )
          )}
        </div>
        <div className="text-center mb-12 mt-4">
          <Link href="/products">
            <button className="btn btn-secondary rounded-lg">
              View All Products
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Featured;
