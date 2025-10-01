import React from "react";
import data from "../../db/items.json";
import Image from "next/image";
import SingleProduct from "./SingleProduct";
import Link from "next/link";

function Featured() {
  return (
    <>
      <h1 className="mb-5 sm:text-4xl md:text-5xl text-center font-bold pt-10 pb-6">
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
        <div className="flex sm:flex-col mx-auto md:max-w-5xl md:flex-row flex-wrap sm:justify-center space-y-4 gap-4">
          {data.items.map(
            (item) =>
              item.featured && (
                <div
                  key={item.id}
                  className="card card-side bg-base-100 shadow-sm w-[300px] max-h-[409px] mx-auto"
                  style={{ width: "300px" }}
                >
                  <Link href={`/products/${item.id}`}>
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={300}
                      height={200}
                      className="h-[200px] min-w-[300px] overflow-hidden rounded-t-lg"
                    />
                    <div className="card-body text-foreground">
                      <h2 className="card-title text-foreground">{item.name}</h2>
                      <p>{item.description}</p>
                      <div className="card-actions font-bold text-lg">
                        ${item.price}
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
