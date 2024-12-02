"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function IndividualProductPage({ params }) {
  const [product, setProduct] = useState(null);
  // const [error, setError] = useState(false);
  const [id, setId] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  async function unwrapParams() {
    const { id: unwrappedId } = await params;

    setId(unwrappedId);
  }

  useEffect(() => {
    // Unwrapping the `params` Promise
    unwrapParams();
  }, [params]);

  async function fetchData() {
    try {
      const response = await fetch(`http://localhost:4000/products/${id}`);
      const data = await response.json();
      setProduct(data);
    } catch (error) {
      console.error("Failed to fetch product data:", error);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    if (!id) return;
    fetchData();
  }, [id]);

  if (isLoading) {
    return <p className="text-lg text-center text-red-500">Loading...</p>;
  }
  if (!product) {
    return (
      <p className="text-lg text-center text-yellow-500">Product not found</p>
    );
  }

  // add product to wishlist
  const handleAddToWishlist = (product) => {
    let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    if (!wishlist.some((item) => item.id === product.id)) {
      wishlist.push(product);
      localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex flex-col items-center ">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="w-64 h-64 mx-auto mt-6 mb-4 rounded-md"
        />
        <h1 className="text-2xl text-center">{product.name}</h1>
        <p className="text-lg text-center">{product.description}</p>
        <p className="mb-3 text-lg font-bold text-center">
          Price: ${product.price}
        </p>
        <button
          onClick={() => handleAddToWishlist}
          className="p-2 bg-custom-red rounded-2xl font-bold hover:bg-white hover:text-black"
        >
          Add to Wishlist
        </button>
      </div>
      {/* link to wishlist page */}

      <Link
        href={`/wishlist`}
        className="my-4 p-2 font-semibold hover:bg-white hover:text-black hover:rounded-2xl"
      >
        Go to Wishlist
      </Link>
    </div>
  );
}
