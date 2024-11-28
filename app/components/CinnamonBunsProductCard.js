import WishListButton from "./WishListButton";

export default function CinnamonBunsProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/cinnamon-buns.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Cinnamon rolls</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            A warm, sweet pastry with a soft, pillowy texture. Made from yeast
            dough, cinnamon buns are rolled with a cinnamon-sugar filling and
            baked until golden. Often topped with a creamy glaze, they are a
            comforting, aromatic treat perfect for breakfast or dessert.
          </p>

          {/* Read More button */}
          <button className="mt-2 text-sm text-left text-custom-red font-semibold hover:text-blue-800 focus:outline-none">
            View Details...
          </button>
          <p className="text-black font-bold text-xl">$2.00</p>
        </div>
      </div>
    </div>
  );
}
