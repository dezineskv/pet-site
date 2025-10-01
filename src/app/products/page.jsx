"use client";
import React, { useState, useEffect } from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";
import Products from "../components/Featured";
import Image from "next/image";
import SingleProduct from "../components/SingleProduct";
import Link from "next/link";
import data from "../../db/items.json";

function AllProducts() {
  // filter data by category with default state set to all
  const [filter, setFilter] = useState("all");
  // filter data
  const [filteredData, setFilteredData] = useState(data.items);
  // function to set the filter to each category depending on the data value
  const handleFilteredData = () => {
    if (filter === "dog") {
      setFilteredData(data.items.filter((item) => item.category === "dog"));
    } else if (filter === "cat") {
      setFilteredData(data.items.filter((item) => item.category === "cat"));
    } else if (filter === "other") {
      setFilteredData(data.items.filter((item) => item.category === "other"));
    } else {
      setFilteredData(data.items);
    }
  };
  // call the function each time the setFilter activates the filtered values
  useEffect(handleFilteredData, [filter]);
  // set the style of the active button when that filter activates
  const isActive = (category) => {
    return category === filter
      ? "bg-[#422ad5] text-white"
      : "bg-background text-gray-300";
  };

  return (
    <>
      <Nav />
      <div className="w-full" />
      <h1 className="mb-5 text-5xl text-center font-bold pt-10 pb-2">
        Products
      </h1>
      {/* buttons to click by category */}
      <div className="flex sm:flex-col flex-row  sm:w-[80%] sm:justify-center flex-wrap  md:max-w-2xl mx-auto pb-4">
        <div className="inline-flex sm:justify-center md:flex-row flex-wrap gap-2 items-center p-8 md:pr-6 rounded-lg md:w-2xl">
          <button
            className={`${isActive(
              "all"
            )} text-sm py-2 px-4 w-[90px] rounded-lg border-1 border-gray-300 hover:bg-gray-700`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`${isActive(
              "dog"
            )} text-sm py-2 px-4 w-[90px] rounded-lg border-1 border-gray-300 hover:bg-gray-700`}
            onClick={() => setFilter("dog")}
          >
            Dogs
          </button>
          <button
            className={`${isActive(
              "cat"
            )} text-sm py-2 px-4 w-[90px] rounded-lg border-1 border-gray-300 hover:bg-gray-700`}
            onClick={() => setFilter("cat")}
          >
            Cats
          </button>
          <button
            className={`${isActive(
              "other"
            )} text-sm py-2 px-4 w-[90px] rounded-lg border-1 border-gray-300 hover:bg-gray-700`}
            onClick={() => setFilter("other")}
          >
            Other
          </button>
        </div>
      </div>
      {/* map through all projects here */}
      <div className="flex sm:flex-col mx-auto md:flex-row flex-wrap sm:justify-center sm:px-6 md:max-w-5xl space-y-4 gap-4">
        {filteredData.map((item) => (
          <div
            key={item.id}
            className="card card-side bg-base-100 shadow-sm w-[300px] mx-auto max-h-[409px]"
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
                <div className="card-actions justify-start font-bold text-lg">
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
        ))}
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;
