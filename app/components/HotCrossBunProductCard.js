import WishListButton from "./WishListButton";

export default function HotCrossBunProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/hot-cross-bun.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Hot Cross Bun</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            A spiced, sweet bun with a soft, fluffy texture. Made from yeasted
            dough, hot cross buns are studded with currants or raisins and
            topped with a simple icing cross. Traditionally enjoyed during
            Easter, they offer a fragrant blend of cinnamon and nutmeg, making
            them a comforting seasonal treat.
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
