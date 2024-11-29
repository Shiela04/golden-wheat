"use client";
// import AlmondCroissantProductCard from "../components/AlmondCroissantProductCard";
// import BreadProductCard from "../components/BreadProductCard";
// import BriocheBunProductCard from "../components/BriocheBunProductCard";
// import ChelseaBunProductCard from "../components/ChelseaBunProductCard";
// import CiabattaProductCard from "../components/CiabattaProductCard";
// import CinnamonBunsProductCard from "../components/CinnamonBunsProductCard";
// import CroissantProductCard from "../components/CroissantsProductCard";
// import DanishPastryProductCard from "../components/DanishPastryProductCard";
// import DinnerRollProductCard from "../components/DinnerRollsProductCard";
// import HamburgerBunProductCard from "../components/HamburgerBunProductCard";
// import HotCrossBunProductCard from "../components/HotCrossBunProductCard";
// import HotDogBunsProductCard from "../components/HotDogBunProductCard";
// import MultigrainProductCard from "../components/MultigrainProductCard";
// import PainAuChocolatProductCard from "../components/PainAuChocolatProductCard";
// import RyeBreadProductCard from "../components/RyeBreadProductCard";
// import SourdoughBreadProductCard from "../components/SourdoughBreadProductCard";
// import StickyBunProductCard from "../components/StickyBunProductCard";
// import WholeWheatProductCard from "../components/WholeWheatProductCard";
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
        {/* <WholeWheatProductCard />
        <BreadProductCard />
        <CiabattaProductCard />
        <RyeBreadProductCard />
        <MultigrainProductCard /> */}
      </div>

      <div>
        <h2 className="py-16 text-4xl font-bold text-center">Pastries</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
        {/* // pastries 3x3 Grid Section */}
        {/* <CroissantProductCard />
        <PainAuChocolatProductCard />
        <AlmondCroissantProductCard />
        <DanishPastryProductCard /> */}
      </div>

      <div>
        <h2 className="py-16 text-4xl font-bold text-center">Buns</h2>
      </div>

      <div className="grid grid-cols-1 gap-10 p-4 sm:grid-cols-2 md:grid-cols-3">
        {/* // Buns 3x3 Grid Section */}
        {/* <DinnerRollProductCard />
        <HamburgerBunProductCard />
        <HotDogBunsProductCard />
        <BriocheBunProductCard />
        <CinnamonBunsProductCard />
        <StickyBunProductCard />
        <ChelseaBunProductCard />
        <HotCrossBunProductCard /> */}
      </div>
    </div>
  );
}
