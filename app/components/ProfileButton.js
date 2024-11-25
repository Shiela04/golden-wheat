'use client';

import { useState } from 'react';

export default function ProfileButton() {
  // state to manage profile menu visibility
  const [isProfileMenuVisible, setIsProfileMenuVisible] = useState(false);

  // function to toggle profile menu visibility
  const toggleProfileMenu = () => {
    setIsProfileMenuVisible(!isProfileMenuVisible);
  };

  return (
    <div className="relative">
      <div>
        <button
          id="profile-menu-button"
          onClick={toggleProfileMenu}
          type="button"
          className="relative flex rounded-full hover:scale-110"
          aria-expanded="false"
          aria-haspopup="true"
        >
          <span className="absolute -inset-1.5" />
          <span className="sr-only">Open user menu</span>
          <img
            className="size-12 rounded-full"
            src="images/login.png"
            alt="log in"
          />
        </button>
      </div>
      {/*
            Dropdown menu, show/hide based on menu state.
          */}
      {isProfileMenuVisible && (
        <div
          id="profile-menu"
          className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black/5 focus:outline-none"
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="user-menu-button"
          tabIndex={-1}
        >
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-bold hover:bg-custom-light-brown"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-0"
          >
            Sign Up
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-bold hover:bg-custom-light-brown"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-1"
          >
            Sign In
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:text-black hover:font-bold hover:bg-custom-light-brown"
            role="menuitem"
            tabIndex={-1}
            id="user-menu-item-2"
          >
            Sign out
          </a>
        </div>
      )}
    </div>
  );
}
