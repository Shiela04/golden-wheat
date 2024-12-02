"use client";

import { useState, useEffect } from "react";

import Link from "next/link";
import GroupCards from "../components/GroupCards";

export default function Card() {
  const [products, setProducts] = useState([]); // Initialize as an empty array

  return (
    <div>
      {/* Header Section */}
      <h1 className="mb-6 text-5xl font-bold text-center">
        Delicious Bakery Products
      </h1>

      {/* Description */}
      <div className="px-96">
        <p className="mb-6 font-semibold text-center text-md">
          Welcome to Our Bakery! Discover the joy of freshly baked bread,
          pastries, and buns, made with love and the finest ingredients. From
          everyday essentials to special treats, every bite is crafted to
          delight. Experience the taste of quality in every creation.
        </p>
      </div>

      {/* Bread Section */}
      <div>
        <h2 className="text-4xl font-bold text-center py-14">
          Products Available
        </h2>
        <div>
          <GroupCards />
        </div>
      </div>

      {/* Pastry Section */}
      {/* <div>
        <h2 className="py-16 text-4xl font-bold text-center">Pastries</h2>
        <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
          {pastries.length > 0 ? (
            pastries.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="cursor-pointer">
                  <Cards data={product} />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-white">Loading products...</p>
          )}
        </div>
      </div> */}

      {/* Bun Section */}
      {/* <div>
        <h2 className="py-16 text-4xl font-bold text-center">Buns</h2>
        <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
          {buns.length > 0 ? (
            buns.map((product) => (
              <Link href={`/products/${product._id}`} key={product._id}>
                <div className="cursor-pointer">
                  <Cards data={product} />
                </div>
              </Link>
            ))
          ) : (
            <p className="text-center text-white">Loading products...</p>
          )}
        </div>
      </div> */}
    </div>
  );
}
