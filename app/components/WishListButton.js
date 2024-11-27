/* eslint-disable @next/next/no-img-element */
export default function WishListButton() {
  return (
    <button
      type="button"
      className="relative rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:scale-110"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View Wishlist</span>
      <img
        className="size-8 rounded-full"
        src="images/wishlist.png"
        alt="white heart"
      />
    </button>
  );
}
