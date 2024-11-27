import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-[#d2b49c] text-black">
      <div className="grid grid-cols-1 gap-8 px-4 py-10 mx-auto max-w-7xl md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h2 className="mb-4 text-lg font-bold">Connect With Us</h2>
          <ul className="space-y-4">
            <li className="flex items-center space-x-2">
              <i className="text-xl fab fa-x-twitter"></i>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <i className="text-xl fab fa-facebook"></i>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <i className="text-xl fab fa-instagram"></i>
              <a href="#" className="hover:underline">
                Instagram
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <i className="text-xl fab fa-youtube"></i>
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
