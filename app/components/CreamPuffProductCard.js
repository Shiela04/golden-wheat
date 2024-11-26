import WishListButton from "./WishListButton";

export default function CreamPuffProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/cream-puffs.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Cream Puffs</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            A delicate pastry filled with sweet, smooth cream. Made from choux
            dough, cream puffs are baked until golden and hollow, then filled
            with whipped cream or custard. They are a classic dessert, light and
            airy, often dusted with powdered sugar or drizzled with chocolate.
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
