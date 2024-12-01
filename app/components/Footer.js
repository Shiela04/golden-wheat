import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-[#d2b49c] text-black">
      <div className="grid grid-cols-1 gap-8 px-4 py-10 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-2">
        <div className="flex flex-col items-center lg:w-1/3">
          <h2 className="mb-4 text-lg font-bold">Connect With Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <a href="https://x.com/">
                {" "}
                <i className="text-xl text-black transition-colors fab fa-x-twitter hover:text-gray-200"></i>
              </a>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://facebook.com/">
                <i className="text-xl text-blue-600 transition-colors fab fa-facebook hover:text-blue-200"></i>
              </a>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://instagram.com/">
                <i className="text-xl text-pink-600 transition-colors fab fa-instagram hover:text-pink-200"></i>
              </a>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://youtube.com/">
                <i className="text-xl text-red-600 transition-colors fab fa-youtube hover:text-red-200"></i>
              </a>
              <a href="#" className="hover:underline">
                YouTube
              </a>
            </li>
          </ul>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 lg:w-2/3 lg:gap-20 justify-between items-center">
          <div className="flex flex-col h-full">
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🌱</span>
              <span>100% Organic</span>
            </h3>
            <p className="mt-2 text-sm">
              At The Golden Wheat Bakery, we’re committed to using 100% organic
              ingredients in all our baked goods, ensuring quality,
              sustainability, and a healthier option for our customers.
            </p>
          </div>
          <div className="flex flex-col h-full">
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🧵</span>
              <span>Handmade</span>
            </h3>
            <p className="mt-2 text-sm">
              At The Golden Wheat Bakery, we take pride in handcrafting every
              product with care, ensuring that each bite is a testament to our
              dedication to quality and flavor.
            </p>
          </div>

          <div className="flex flex-col h-full">
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>👥</span>
              <span>About Us</span>
            </h3>
            <p className="mt-2 text-sm">
              The Golden Wheat Bakery is dedicated to crafting delicious,
              handmade baked goods with love and care, using only the finest
              organic ingredients.
            </p>
          </div>
          <div className="flex flex-col h-full">
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🍞</span>
              <span>Our Products</span>
            </h3>
            <p className="mt-2 text-sm">
              Our products are made with the finest 100% organic ingredients,
              ensuring quality and flavor in every bite.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-custom-nav-brown text-center py-4">
        <p className="text-sm text-white">Wheat Bakery © 2024</p>
      </div>
    </footer>
  );
}
