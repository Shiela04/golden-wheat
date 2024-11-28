import WishListButton from "./WishListButton";

export default function ChelseaBunProductCard() {
  return (
    <div className="max-w-sm mx-auto overflow-hidden border border-black rounded-lg shadow-lg bg-card-background">
      {/* {card image} */}
      <img
        className="object-cover w-full h-48"
        src="/images/chelsea-bun.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row items-center justify-between">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Chelsea Bun</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 mt-4 rounded-lg bg-card-beige">
          <p className="mt-2 text-base text-black">
            A sweet, spiced pastry with a soft, pillowy texture. Made from
            yeasted dough, Chelsea buns are rolled with currants, cinnamon, and
            sugar, then baked to a golden brown. Glazed with syrup, they offer a
            warm, aromatic treat perfect for tea time or a sweet snack.
          </p>

          {/* View Details button */}
          <button className="mt-2 text-sm font-semibold text-left text-custom-red hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-xl font-bold text-black">$2.00</p>
        </div>
      </div>
    </div>
  );
}
