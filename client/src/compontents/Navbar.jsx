import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link for proper navigation

const Navbar = () => {
  const [menuState, setMenuState] = useState("menu");

  const onToggleMenu = () => {
    setMenuState(menuState === "menu" ? "close" : "menu");
  };

  useEffect(() => {
    const navLinks = document.querySelector('.nav-links');
    const navbar = document.querySelector('nav');
    navLinks.classList.toggle('top-[9%]', menuState === "close");
    
    if (menuState === "close") {
      navbar.classList.add("active");
    } else {
      navbar.classList.remove("active");
    }
  }, [menuState]);

  const screenWidth = window.innerWidth;

  return (
    
      <header className="bg-white">
        <nav className={`flex justify-between items-center w-[92%] mx-auto ${menuState === "close" ? "active" : ""}`}>
          <div>
            <img
              className="w-16 cursor-pointer"
              src="https://cdn-icons-png.flaticon.com/512/5968/5968204.png"
              alt="..."
            />
          </div>
          <div
            className={`nav-links duration-500 md:static absolute bg-white md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5 ${menuState === "close" ? "active" : ""}`}
          >
            <ul className="flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8">
              <li>
                <Link className="hover:text-gray-500" to="/">Home</Link>
              </li>
              <li>
                <Link className="hover:text-gray-500" to="/about">About</Link>
              </li>

              <li>
                <Link className="hover:text-gray-500" to="/contact">Contact</Link>
              </li>


              <li>
                <Link className="hover:text-gray-500" to="/Technical">Technical</Link>
              </li>


              <li>
                <Link className="hover:text-gray-500" to="/portfolio">Portfolio</Link>
              </li>
              
             
              {/* Other navigation links */}
            </ul>
          </div>
          <div className="flex items-center gap-6">
          <button class="bg-[#a6c1ee] text-white px-5 py-2 rounded-full hover:bg-[#87acec]">
            <Link to="/Login">Sign In</Link>

          </button>
            {screenWidth <= 768 && (
              <ion-icon
                onClick={onToggleMenu}
                name={menuState}
                className={`text-3xl cursor-pointer md:hidden ${menuState === "close" ? "active" : ""}`}
              ></ion-icon>
            )}
          </div>
        </nav>
      </header>
  );
}

export default Navbar;


