import WishListButton from "./WishListButton";

export default function MilleFeuileProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/mille-feuille.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Mille Feuille</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            A classic French dessert with layers of flaky puff pastry and rich
            pastry cream. Mille-feuille, also known as a Napoleon, is
            traditionally topped with a dusting of powdered sugar or a glaze.
            Light and indulgent, its delicate layers offer a perfect balance of
            crispness and creaminess.
          </p>

          {/* Read More button */}
          <button className="mt-2 text-sm text-left text-custom-red font-semibold hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-yellow-500 font-bold text-xl">$420.69</p>
        </div>
      </div>
    </div>
  );
}
