"use client";

import { useEffect, useState } from "react";
import BreadProductCard from "../components/BreadProductCard";
import WishListButton from "../components/WishListButton";

export default function Wishlist() {
  const products = [
    {
      id: 1,
      title: "Sourdough",
      description:
        "Tangy, chewy bread with a crisp crust, made through natural fermentation using wild yeast and lactic acid bacteria, offering a unique and flavorful taste.",
      imageUrl: "images/sourdough-bread.jpg",
    },
    {
      id: 2,
      title: "Whole Wheat",
      description:
        "Hearty bread with a nutty flavor, made from whole wheat flour, preserving the bran, germ, and endosperm for natural nutrients and fiber.",
      imageUrl: "images/whole-wheat-bread.jpg",
    },
    {
      id: 3,
      title: "Baguette",
      description:
        "Classic French bread with a crisp crust. Made with simple ingredients—flour, water, yeast, and salt—the dough undergoes a lengthy fermentation process.",
      imageUrl: "images/baguette.jpg",
    },
    {
      id: 4,
      title: "Ciabatta",
      description:
        "Italian bread with a light, airy texture. The name ciabatta means slipper in Italian, referring to its shape resembling a worn-out slipper.",
      imageUrl: "images/ciabatta.jpg",
    },
    {
      id: 5,
      title: "Rye Bread",
      description:
        "Dense, flavorful bread with a dark crust, made with rye flour, often combined with wheat flour for added structure and texture, offeringa robust taste.",
      imageUrl: "images/rye-bread.jpg",
    },
    {
      id: 6,
      title: "Multigrain Bread",
      description:
        "Hearty bread made with a variety of grains, giving it a rich, nutty flavor and texture. Multigrain bread can vary in its composition, offering additional nutrients.",
      imageUrl: "images/multigrain.jpg",
    },
  ];

  //   store wishlist
  const [wishlist, setWishlist] = useState([]);

  // load wishlist from local storage
  useEffect(() => {
    const savedWishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(savedWishlist);
  }, []);

  // add product to wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      // check for duplicates
      if (!prevWishlist.some((item) => item.id === product.id)) {
        const updatedWishlist = [...prevWishlist, product];
        // save to local storage
        localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
        return updatedWishlist;
      }
      return prevWishlist;
    });
  };

  return (
    <div className="bg-black">
      <h1 className="p-8 text-lg text-center font-bold md:text-xl md:font-extrabold">
        WishList
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {products.map((product) => (
          <BreadProductCard
            key={product.id}
            product={product}
            onAddToWishlist={addToWishlist}
          />
        ))}
      </div>

      <div>
        <h1 className="p-8 text-lg text-center font-bold md:text-xl md:font-extrabold">
          WishList
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {wishlist.map((product) => (
            <div key={product.id}>
              <img
                className="object-cover w-full h-48"
                src={product.imageUrl}
                alt={product.title}
              />

              {/* contents */}
              <div className="p-4 my-1">
                <div className="flex flex-row items-center justify-between">
                  {/* title */}
                  <h2 className="text-2xl font-semibold text-white">
                    {product.title}
                  </h2>

                  {/* heart button */}
                  <WishListButton />
                </div>

                {/* description */}
                <div className="flex flex-col justify-start p-2 mt-4 rounded-lg bg-card-beige">
                  <p className="mt-2 text-base text-black">
                    {product.description}
                  </p>

                  {/* View Details button */}
                  <button className="mt-2 text-sm font-semibold text-left text-custom-red hover:text-blue-800 focus:outline-none">
                    View Details...
                  </button>
                  <p className="text-xl font-bold text-black">$3.00</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
