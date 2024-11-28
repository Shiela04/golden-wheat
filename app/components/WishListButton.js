/* eslint-disable @next/next/no-img-element */
export default function WishListButton() {
  return (
    <button
      type="button"
      className="relative text-gray-400 rounded-full hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:scale-110"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View Wishlist</span>
      <img
        className="rounded-full size-8"
        src="/images/wishlist.png"
        alt="white heart"
      />
    </button>
  );
}
