import AlmondCroissantProductCard from "../components/AlmondCroissantProductCard";
import BreadProductCard from "../components/BreadProductCard";
import BriocheBunProductCard from "../components/BriocheBunProductCard";
import ChelseaBunProductCard from "../components/ChelseaBunProductCard";
import CiabattaProductCard from "../components/CiabattaProductCard";
import CinnamonBunsProductCard from "../components/CinnamonBunsProductCard";
import CroissantProductCard from "../components/CroissantsProductCard";
import DanishPastryProductCard from "../components/DanishPastryProductCard";
import DinnerRollProductCard from "../components/DinnerRollsProductCard";
import HamburgerBunProductCard from "../components/HamburgerBunProductCard";
import HotCrossBunProductCard from "../components/HotCrossBunProductCard";
import HotDogBunsProductCard from "../components/HotDogBunProductCard";
import MultigrainProductCard from "../components/MultigrainProductCard";
import PainAuChocolatProductCard from "../components/PainAuChocolatProductCard";
import RyeBreadProductCard from "../components/RyeBreadProductCard";
import SourdoughBreadProductCard from "../components/SourdoughBreadProductCard";
import StickyBunProductCard from "../components/StickyBunProductCard";
import WholeWheatProductCard from "../components/WholeWheatProductCard";

export default function Card() {
  return (
    <div className="p-4">
      {/* // Header section */}
      <h1 className="text-2xl lg:text-4xl font-bold text-center mb-6">
        Delicious Bakery Products
      </h1>

      {/* // Short description for Product section */}
      <div className="p-10 flex justify-center">
        <p className="text-md text-center lg:max-w-4xl mb-6 font-semibold">
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
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
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

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
        {/* // pastries 3x3 Grid Section */}
        <CroissantProductCard />
        <PainAuChocolatProductCard />
        <AlmondCroissantProductCard />
        <DanishPastryProductCard />
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center py-16">Buns</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 p-4">
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
