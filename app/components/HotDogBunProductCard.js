import WishListButton from "./WishListButton";

export default function HotDogBunsProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/hotdog-bun.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Hot Dog Buns</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            Soft, pillowy buns with a slightly sweet flavor. Made from flour,
            yeast, and butter, hot dog buns are baked to a golden brown,
            offering a light, airy texture. Perfectly sized to hold a hot dog,
            they provide a tender, slightly chewy bite.
          </p>

          {/* View Details button */}
          <button className="mt-2 text-sm text-left text-custom-red font-semibold hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-black font-bold text-xl">$1.00</p>
        </div>
      </div>
    </div>
  );
}
