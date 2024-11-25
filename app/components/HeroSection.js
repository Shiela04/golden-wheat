export default function HeroSection() {
  return (
    <div className="flex flex-col sm:flex-col md:flex-row w-auto lg:flex-row">
      <div className="flex-2">
        <img
          className="w-full h-full object-cover"
          src="images/whole-wheat-bread.jpg"
        />
      </div>
      <div className="flex-1 grow text-black bg-card-beige flex flex-col justify-center items-center p-4 gap-4">
        <h1 className="text-2xl font-extrabold">Delicious Recipes</h1>
        <p className="text-sm p-4">
          Indulge in the goodness of freshly baked bread, made with the finest
          whole wheat flour. Our bakery brings you a variety of delicious
          recipes crafted with love and care, offering a perfect balance of
          nutrition and flavor. Whether you’re craving hearty loaves or
          artisanal treats, each bite promises a wholesome experience you can
          feel good about. Discover the rich, nutty flavors of whole wheat bread
          – baked fresh, every day!
        </p>
        <button className="text-white bg-custom-red rounded-3xl p-3 hover:font-bold">
          View Our Products
        </button>
      </div>
    </div>
  );
}
