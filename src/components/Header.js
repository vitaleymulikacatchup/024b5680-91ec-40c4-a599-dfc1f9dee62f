import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full top-0 z-50">
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </div>
            <div className="ml-3">
              <h1 className="text-xl font-bold text-gray-900">ВЕЛО ЦЕНТР</h1>
              <p className="text-sm text-gray-600">ЗАПОРІЖЖЯ</p>
            </div>
          </div>
          
          <nav className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#home" className="text-gray-900 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                Головна
              </a>
              <a href="#services" className="text-gray-600 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                Послуги
              </a>
              <a href="#pricing" className="text-gray-600 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                Ціни
              </a>
              <a href="#contact" className="text-gray-600 hover:text-brand-green px-3 py-2 text-sm font-medium transition-colors">
                Контакти
              </a>
            </div>
          </nav>

          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:text-gray-900"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
            <a href="#home" className="text-gray-900 hover:text-brand-green block px-3 py-2 text-base font-medium">
              Головна
            </a>
            <a href="#services" className="text-gray-600 hover:text-brand-green block px-3 py-2 text-base font-medium">
              Послуги
            </a>
            <a href="#pricing" className="text-gray-600 hover:text-brand-green block px-3 py-2 text-base font-medium">
              Ціни
            </a>
            <a href="#contact" className="text-gray-600 hover:text-brand-green block px-3 py-2 text-base font-medium">
              Контакти
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;