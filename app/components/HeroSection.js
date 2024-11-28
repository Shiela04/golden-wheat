/* eslint-disable @next/next/no-img-element */
export default function HeroSection() {
  return (
    <div className="flex flex-col md:flex-row items-stretch md:h-[50vh] lg:h-[70vh]">
      <div className="items-center justify-center w-full h-full mb-0 md:w-3/5 md:h-full lg:w-2/3">
        <img
          className="object-cover w-full h-full"
          src="/images/whole-wheat-bread.jpg"
          alt="whole wheat"
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full h-full gap-4 p-8 text-center text-black bg-card-beige md:w-2/5 lg:w-1/3">
        <h1 className="py-2 text-2xl font-extrabold sm:text-4xl md:text-4xl lg:text-5xl xlg:text-5xl">
          Delicious Recipes
        </h1>
        <p className="max-w-3xl mx-auto text-lg sm:text-xl md:text-base">
          Indulge in the goodness of freshly baked bread, made with the finest
          whole wheat flour. Our bakery brings you a variety of delicious
          recipes crafted with love and care, offering a perfect balance of
          nutrition and flavor. Discover the rich, nutty flavors of whole wheat
          bread – baked fresh, every day!
        </p>
        <button className="p-3 text-white lg:my-10 lg:text-xl bg-custom-red rounded-3xl hover:font-bold">
          View Our Products
        </button>
      </div>
    </div>
  );
}
