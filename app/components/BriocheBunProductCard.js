import WishListButton from "./WishListButton";

export default function BriocheBunProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/brioche-bun.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Brioche Bun</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            A rich, buttery bun with a soft, slightly sweet flavor. Made from
            flour, yeast, butter, eggs, and sugar, brioche buns are baked to a
            golden, tender finish. Their light, airy texture and subtle
            sweetness make them the perfect complement to burgers or sandwiches.
          </p>

          {/* View Details button */}
          <button className="mt-2 text-sm text-left text-custom-red font-semibold hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-black font-bold text-xl">$1.50</p>
        </div>
      </div>
    </div>
  );
}
