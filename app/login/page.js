/* eslint-disable @next/next/no-img-element */
import WishListButton from "./WishListButton";

export default function MultigrainCard() {
  return (
    <div className="max-w-sm mx-auto overflow-hidden border border-black rounded-lg shadow-lg bg-card-background">
      {/* {card image} */}
      <img
        className="object-cover w-full h-48"
        src="/images/multigrain.jpg"
        alt="multigrain"
      />

      {/* contents */}
      <div className="p-4 my-1">
        <div className="flex flex-row items-center justify-between">
          {/* title */}
          <h2 className="text-2xl font-semibold text-white">
            Multigrain Bread
          </h2>

          {/* heart button */}
          <WishListButton />
        </div>

        {/* description */}
        <div className="flex flex-col justify-start p-2 mt-4 rounded-lg bg-card-beige">
          <p className="mt-2 text-base text-black">
            Hearty bread made with a variety of grains, giving it a rich, nutty
            flavor and texture. Multigrain bread can vary in its composition.
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
