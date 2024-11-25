import WishListButton from './WishListButton';

export default function BaguetteCard() {
  return (
    <div className="max-w-sm mx-auto bg-card-background border border-black rounded-lg shadow-lg overflow-hidden">
      {/* {card image} */}
      <img
        className="w-full h-48 object-cover"
        src="images/baguette.jpg"
        alt="logo"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row justify-between items-center">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Baguette</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 bg-card-beige rounded-lg mt-4">
          <p className="mt-2 text-black text-base">
            Classic French bread with a crisp crust. Made with simple
            ingredients—flour, water, yeast, and salt—the dough undergoes a
            lengthy fermentation process
          </p>

          {/* Read More button */}
          <button className="mt-2 text-sm text-left text-custom-red font-semibold hover:text-blue-800 focus:outline-none">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
}
