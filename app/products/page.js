"use client";

// import { useRouter } from "next/router";
import Cards from "../components/Cards";
import { useState, useEffect } from "react";

import Link from "next/link";

export default function Card() {
  // const router = useRouter();
  // const handleNavigate = () => {
  //   router.push("/products/[id]", { id: product._id });
  // };
  // const [products, setProducts] = useState([]); // Initialize as an empty array
  const products = [
    {
      _id: "674b7e964fd5d8e98da19a15",
      name: "Sourdough",
      category: "Pastry",
      description: "Tangy, chewy bread with a crisp crust",
      ingredients: "Flour, Water, Sourdough starter, Salt",
      imageUrl:
        "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/sourdough-bread.jpg",
      price: 5,
      inventory: 20,
      createdAt: "2024-11-30T21:07:34.129Z",
      updatedAt: "2024-11-30T21:07:34.129Z",
      __v: 0,
    },
    {
      _id: "674b7e964fd5d8e98da19a18",
      name: "Whole Wheat",
      category: "Bread",
      description: "Hearty bread with a nutty flavor",
      ingredients: "Whole wheat flour, Water, Honey, Yeast, Salt",
      imageUrl:
        "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/whole-wheat-bread.jpg",
      price: 4.5,
      inventory: 48,
      createdAt: "2024-11-30T21:07:34.832Z",
      updatedAt: "2024-11-30T21:07:34.832Z",
      __v: 0,
    },
    {
      _id: "674b7e964fd5d8e98da19a1a",
      name: "Baguette",
      category: "Bread",
      description: "Classic French bread with a crisp crust",
      ingredients: "Flour, Water, Yeast, Salt",
      imageUrl:
        "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/baguette.jpg",
      price: 3,
      inventory: 20,
      createdAt: "2024-11-30T21:07:34.875Z",
      updatedAt: "2024-11-30T21:07:34.875Z",
      __v: 0,
    },
    {
      _id: "674b7e964fd5d8e98da19a1c",
      name: "Ciabatta",
      category: "Bread",
      description: "Italian bread with a light, airy texture",
      ingredients: "Flour, Water, Yeast, Olive oil, Salt",
      imageUrl:
        "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/ciabatta.jpg",
      price: 4,
      inventory: 36,
      createdAt: "2024-11-30T21:07:34.922Z",
      updatedAt: "2024-11-30T21:07:34.922Z",
      __v: 0,
    },
    {
      _id: "674b7e964fd5d8e98da19a1e",
      name: "Rye Bread",
      category: "Bread",
      description: "Dense, flavorful bread with a dark crust",
      ingredients:
        "Rye flour, Bread flour, Water, Molasses, Caraway seeds, Yeast, Salt",
      imageUrl:
        "https://the-golden-wheat-bakery.s3.us-east-1.amazonaws.com/wheat-bakery-images/rye-bread.jpg",
      price: 5.5,
      inventory: 20,
      createdAt: "2024-11-30T21:07:34.964Z",
      updatedAt: "2024-11-30T21:07:34.964Z",
      __v: 0,
    },
  ];

  const [isSuccess, setIsSuccess] = useState(false); // For success state (optional)

  // const fetchProducts = async () => {
  //   try {
  //     const endpoint = "http://localhost:4000/products/";
  //     const response = await fetch(endpoint);

  //     if (!response.ok) {
  //       throw new Error("Failed to fetch products");
  //     }

  //     const responseData = await response.json(); // This will be the array
  //     setProducts(responseData); // Assign the array directly to state
  //     console.log("Fetched Products:", products); // Confirm the data structure
  //   } catch (error) {
  //     console.error("Error fetching products:", error);
  //     setProducts([]); // Set fallback empty array in case of error
  //   }
  // };

  // useEffect(() => {
  //   fetchProducts(); // Fetch products when the component mounts
  //   console.log("123", products);
  // }, []);

  const breads = products.filter((product) => product.category === "Bread");
  const pastries = products.filter((product) => product.category === "Pastry");
  const buns = products.filter((product) => product.category === "Bun");

  return (
    <div className="p-4">
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
        <h2 className="text-4xl font-bold text-center py-14">Breads</h2>
        <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
          {breads.length > 0 ? (
            breads.map((product) => (
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
      </div>

      {/* Pastry Section */}
      <div>
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
      </div>

      {/* Bun Section */}
      <div>
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
      </div>
    </div>
  );
}
