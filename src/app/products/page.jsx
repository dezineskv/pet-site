import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "../components/Featured";
import pets from "../../db/pets.json";
import Image from "next/image";
import SingleProduct from "../components/SingleProduct";
import Link from "next/link";

function AllProducts() {
  return (
    <>
      <Nav />
      <div className="w-full" />
      <h1 className="mb-5 text-5xl text-center font-bold pt-10 pb-2">
        Products
      </h1>
      <div className="md:max-w-5xl flex sm:flex-col md:flex-row flex-wrap justify-center gap-4 space-y-4 mx-auto pb-10">
        {pets.map((pet) => (
          <div
            key={pet.id}
            className="card card-side bg-base-100 shadow-sm w-[300px] mx-2 max-h-[409px]"
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
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
