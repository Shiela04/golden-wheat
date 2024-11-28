/* eslint-disable @next/next/no-img-element */
import WishListButton from "./WishListButton";

export default function RyeBreadCard() {
  return (
    <div className="max-w-sm mx-auto overflow-hidden border border-black rounded-lg shadow-lg bg-card-background">
      {/* {card image} */}
      <img
        className="object-cover w-full h-48"
        src="/images/rye-bread.jpg"
        alt="rye bread"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row items-center justify-between">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">Rye Bread</h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 mt-4 rounded-lg bg-card-beige">
          <p className="mt-2 text-base text-black">
            Dense, flavorful bread with a dark crust, made with rye flour, often
            combined with wheat flour for added structure and texture, offering
            a robust taste.
          </p>

          {/* Read More button */}
          <button className="mt-2 text-sm font-semibold text-left text-custom-red hover:text-blue-800 focus:outline-none">
            Read More...
          </button>
        </div>
      </div>
    </div>
  );
}
