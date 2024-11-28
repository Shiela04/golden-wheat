import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-[#d2b49c] text-black">
      <div className="grid grid-cols-1 gap-8 px-4 py-10 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="mb-4 text-lg font-bold">Connect With Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <a href="https://x.com/">
                {" "}
                <i className="text-xl text-black transition-colors fab fa-x-twitter hover:text-gray-200"></i>
              </a>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <a href="https://facebook.com/">
                <i className="text-xl text-blue-600 transition-colors fab fa-facebook hover:text-blue-200"></i>
              </a>
              <a href="#" className="hover:underline">
                About
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

        <div className="space-y-6">
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🌱</span>
              <span>100% Organic</span>
            </h3>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🧵</span>
              <span>Handmade</span>
            </h3>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>👥</span>
              <span>About Us</span>
            </h3>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div>
            <h3 className="flex items-center space-x-2 text-lg font-medium">
              <span>🍞</span>
              <span>Our Products</span>
            </h3>
            <p className="mt-2 text-sm">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-[#a67358] text-center py-4">
        <p className="text-sm text-white">Wheat Bakery © 2024</p>
      </div>
    </footer>
  );
}
