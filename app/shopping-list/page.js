import Link from "next/link";

export default function ShoppingList() {
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-6 mb-6 font-bold text-center lg:text-5xl md:text-3xl">
        Shopping List
      </h1>

      <div className="flex flex-col items-center gap-3 mb-32">
        <p>Your shopping list is empty</p>
        <Link
          href={`/wishlist`}
          className="font-semibold p-2 hover:text-black hover:bg-white hover:rounded-3xl"
        >
          Go to Wishlist
        </Link>
      </div>
    </div>
  );
}
