"use client";

import Cards from "../components/Cards";

import Link from "next/link";

export default function Card() {
  return (
    <div className="p-4">
      {/* // Header section */}
      <h1 className="mb-6 text-5xl font-bold text-center">
        Delicious Bakery Products
      </h1>

      {/* // Short description for Product section */}
      <div className="px-96">
        <p className="mb-6 font-semibold text-center text-md">
          Welcome to Our Bakery! Discover the joy of freshly baked bread,
          pastries, and buns, made with love and the finest ingredients. From
          everyday essentials to special treats, every bite is crafted to
          delight. Experience the taste of quality in every creation.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center py-14">Breads</h2>
      </div>

      {/* // Bread 3x3 Grid Section  */}
      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
        {/* // Bread */}

        <Link href="http://localhost:4000/products/${productId}">
          <Cards />
        </Link>
      </div>

      <div>
        <h2 className="py-16 text-4xl font-bold text-center">Pastries</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
        {/* // pastries 3x3 Grid Section */}
        <Link href="http://localhost:4000/products/${productId}">
          <Cards />
        </Link>
      </div>

      <div>
        <h2 className="py-16 text-4xl font-bold text-center">Buns</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
        {/* // Buns 3x3 Grid Section */}
        <Link href="http://localhost:4000/products/${productId}">
          <Cards />
        </Link>
      </div>
    </div>
  );
}
