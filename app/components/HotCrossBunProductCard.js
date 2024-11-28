import WishListButton from "./WishListButton";

export default function HotCrossBunProductCard() {
  return (
    <div className="max-w-sm mx-auto overflow-hidden border border-black rounded-lg shadow-lg bg-card-background">
      {/* {card image} */}
      <img
        className="object-cover w-full h-48"
        src="/images/hot-cross-bun.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row items-center justify-between">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Hot Cross Bun</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 mt-4 rounded-lg bg-card-beige">
          <p className="mt-2 text-base text-black">
            A spiced, sweet bun with a soft, fluffy texture. Made from yeasted
            dough, hot cross buns are studded with currants or raisins and
            topped with a simple icing cross. Traditionally enjoyed during
            Easter, they offer a fragrant blend of cinnamon and nutmeg, making
            them a comforting seasonal treat.
          </p>

          {/* View Details button */}
          <button className="mt-2 text-sm font-semibold text-left text-custom-red hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-xl font-bold text-black">$1.75</p>
        </div>
      </div>
    </div>
  );
}
