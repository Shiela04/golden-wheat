"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(storedWishlist);
  }, []);

  //   remove product from wishlist
  const handleRemoveFromWishlist = (productId) => {
    const updatedWishlist = wishlist.filter((item) => item.id !== productId);
    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  return (
    <div className="flex flex-col items-center h-[70vh]">
      <h1 className="mt-6 mb-6 font-bold text-center lg:text-5xl md:text-3xl">
        Wishlist
      </h1>
      {wishlist.length === 0 ? (
        <div className="flex flex-col items-center gap-3 mb-32">
          <p>Your wishlist is empty</p>
          <Link
            href={`/products`}
            className="font-semibold p-2 hover:text-black hover:bg-white hover:rounded-3xl"
          >
            Go to Products Page
          </Link>
        </div>
      ) : (
        <div>
          {wishlist.map((product) => (
            <div key={product.id}>
              <image
                src={product.imageUrl}
                alt={product.name}
                className="w-24 h-24"
              />
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>{product.price}</p>
              <button onClick={() => handleRemoveFromWishlist(product.id)}>
                Remove Item
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
