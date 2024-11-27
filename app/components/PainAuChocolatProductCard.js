import WishListButton from "./WishListButton";

export default function PainAuChocolatProductCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/pain-au-chocolat.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">
            Pain Au Chocolat
          </h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            A flaky, buttery pastry with a rich, chocolate-filled center. Made
            from laminated dough, pain au chocolat is baked to a golden, crisp
            perfection. Its light, airy texture and indulgent chocolate filling
            make it a classic French treat, perfect for breakfast or a sweet
            snack.
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
