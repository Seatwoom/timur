import React from "react";
import carlogo4 from "./Photos/carlogo1.png";

const Header = ({ onLogoClick }) => {
  const handleNavClick = (e) => {
    e.preventDefault();
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-[#020632] shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div
            className="flex-shrink-0 cursor-pointer transform transition-transform duration-200 hover:scale-110"
            onClick={onLogoClick}
          >
            <img src={carlogo4} alt="Car Logo" className="h-12 w-auto" />
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="/delivery"
              onClick={handleNavClick}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Доставка
            </a>
            <a
              href="/payment"
              onClick={handleNavClick}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Оплата
            </a>
            <a
              href="/contacts"
              onClick={handleNavClick}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Контакти
            </a>
            <a
              href="/about"
              onClick={handleNavClick}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Про нас
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
