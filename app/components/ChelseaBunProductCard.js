import WishListButton from "./WishListButton";

export default function ChelseaBunProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/chelsea-bun.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Chelsea Bun</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            A sweet, spiced pastry with a soft, pillowy texture. Made from
            yeasted dough, Chelsea buns are rolled with currants, cinnamon, and
            sugar, then baked to a golden brown. Glazed with syrup, they offer a
            warm, aromatic treat perfect for tea time or a sweet snack.
          </p>

          {/* View Details button */}
          <button className="mt-2 text-sm text-left text-custom-red font-semibold hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-black font-bold text-xl">$2.00</p>
        </div>
      </div>
    </div>
  );
}
