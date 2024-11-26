import BreadProductCard from "../components/BreadProductCard";
import BriocheBunProductCard from "../components/BriocheBunProductCard";
import ChelseaBunProductCard from "../components/ChelseaBunProductCard";
import CiabattaProductCard from "../components/CiabattaProductCard";
import CinnamonBunsProductCard from "../components/CinnamonBunsProductCard";
import CreamPuffProductCard from "../components/CreamPuffProductCard";
import CroissantProductCard from "../components/CroissantsProductCard";
import DinnerRollProductCard from "../components/DinnerRollsProductCard";
import EclairsProductCard from "../components/EclairsProductCard";
import HamburgerBunProductCard from "../components/HamburgerBunProductCard";
import HotCrossBunProductCard from "../components/HotCrossBunProductCard";
import HotDogBunsProductCard from "../components/HotDogBunProductCard";
import MilleFeuileProductCard from "../components/MilleFeuileProductCard";
import MultigrainProductCard from "../components/MultigrainProductCard";
import RyeBreadProductCard from "../components/RyeBreadProductCard";
import SourdoughBreadProductCard from "../components/SourdoughBreadProductCard";
import StickyBunProductCard from "../components/StickyBunProductCard";
import WholeWheatProductCard from "../components/WholeWheatProductCard";
import ZeppoleProductCard from "../components/ZeppoleProductCard";

export default function Card() {
  return (
    <div className="p-4">
      {/* // Header section */}
      <h1 className="text-5xl font-bold text-center mb-6">
        Delicious Bakery Products
      </h1>

      {/* // Short description for Product section */}
      <div className="px-96">
        <p className="text-md text-center mb-6 font-semibold">
          Welcome to Our Bakery! Discover the joy of freshly baked bread,
          pastries, and buns, made with love and the finest ingredients. From
          everyday essentials to special treats, every bite is crafted to
          delight. Experience the taste of quality in every creation.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center py-16">Breads</h2>
      </div>

      {/* // Bread 3x3 Grid Section  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* // Bread */}
        <BreadProductCard />
        <CiabattaProductCard />
        <MultigrainProductCard />
        <RyeBreadProductCard />
        <SourdoughBreadProductCard />
        <WholeWheatProductCard />
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center py-16">Pastries</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* // pastries 3x3 Grid Section */}
        <CroissantProductCard />
        <ZeppoleProductCard />
        <CreamPuffProductCard />
        <EclairsProductCard />
        <CinnamonBunsProductCard />
        <MilleFeuileProductCard />
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center py-16">Buns</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {/* // Buns 3x3 Grid Section */}
        <DinnerRollProductCard />
        <HamburgerBunProductCard />
        <HotDogBunsProductCard />
        <BriocheBunProductCard />
        <CinnamonBunsProductCard />
        <StickyBunProductCard />
        <ChelseaBunProductCard />
        <HotCrossBunProductCard />
      </div>
    </div>
  );
}
