/* eslint-disable @next/next/no-img-element */
import { useState, useEffect } from "react";
import WishListButton from "./WishListButton";

export default function Cards() {
  const [products, setProducts] = useState([]); // Initialize as an empty array
  const [isSuccess, setIsSuccess] = useState(false); // For success state (optional)

  const fetchProducts = async () => {
    try {
      const endpoint = "http://localhost:4000/products/";
      const response = await fetch(endpoint);
      const responseData = await response.json();
      setProducts(responseData.data || []); // Safeguard in case data is undefined
      setIsSuccess(responseData.meta?.status === 200); // Optional success handling
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsSuccess(false);
    }
  };

  useEffect(() => {
    fetchProducts(); // Fetch products when the component mounts
  }, []);

  return (
    <div className="grid grid-cols-1 gap-6 p-4 sm:grid-cols-2 lg:grid-cols-4">
      {products.length > 0 ? (
        products.map((product) => (
          <div
            key={product.id}
            className="max-w-sm mx-auto overflow-hidden border border-black rounded-lg shadow-lg bg-card-background"
          >
            {/* Card Image */}
            <img
              className="object-cover w-full h-48"
              src={product.imageUrl}
              alt={product.name}
            />

            {/* Card Contents */}
            <div className="p-4 my-1">
              <div className="flex flex-row items-center justify-between">
                {/* Title */}
                <h2 className="text-2xl font-semibold text-white">
                  {product.name}
                </h2>

                {/* Wishlist Button */}
                <WishListButton />
              </div>

              {/* Description */}
              <div className="flex flex-col justify-start p-2 mt-4 rounded-lg bg-card-beige">
                <p className="mt-2 text-base text-black">
                  {product.description}
                </p>

                {/* Read More Button */}
                <button className="mt-2 text-sm font-semibold text-left text-custom-red hover:text-blue-800 focus:outline-none">
                  Read More...
                </button>

                {/* Price */}
                <p className="text-xl font-bold text-black">{product.price}</p>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-white">Loading products...</p>
      )}
    </div>
  );
}
