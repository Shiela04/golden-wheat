export default function ShoppingList() {
  return (
    <button
      type="button"
      className="relative rounded-full text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 hover:scale-110"
    >
      <span className="absolute -inset-1.5" />
      <span className="sr-only">View Pre-Ordered List</span>
      <img
        className="size-8 rounded-full"
        src="images/shopping-bag.png"
        alt="log in"
      />
    </button>
  );
}
