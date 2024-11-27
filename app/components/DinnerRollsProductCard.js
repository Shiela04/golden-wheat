import WishListButton from "./WishListButton";

export default function DinnerRollProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/dinner-rolls.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Dinner Rolls</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            Soft, fluffy rolls with a light, tender crumb. Made from simple
            ingredients—flour, yeast, butter, and milk—dinner rolls are baked to
            a golden brown. Perfectly airy and slightly sweet, they are a
            classic accompaniment to any meal.
          </p>

          {/* View Details button */}
          <button className="mt-2 text-sm text-left text-custom-red font-semibold hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-yellow-500 font-bold text-xl">$420.69</p>
        </div>
      </div>
    </div>
  );
}
