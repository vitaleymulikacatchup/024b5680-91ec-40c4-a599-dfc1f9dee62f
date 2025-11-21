import React from 'react';
import { Facebook, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-custom py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-brand-green rounded-full flex items-center justify-center mr-3">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
              <div>
                <h3 className="text-xl font-bold">ВЕЛО ЦЕНТР</h3>
                <p className="text-sm text-gray-400">ЗАПОРІЖЖЯ</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Найкращий прокат велосипедів у Запоріжжі. Якісні велосипеди, професійний сервіс, доступні ціни.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Послуги</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Прокат велосипедів</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Ремонт велосипедів</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Аксесуари</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Інструктаж</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Контакти</h4>
            <ul className="space-y-2 text-gray-400">
              <li>м. Запоріжжя</li>
              <li>вул. Центральна, 123</li>
              <li>+38 (061) 123-45-67</li>
              <li>info@velocentr.zp.ua</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Вело Центр Запоріжжя. Всі права захищені.</p>
          <p className="mt-2 text-sm">
            Підключіться з нами! 
            <a href="#" className="text-brand-green hover:text-brand-green-light ml-1">
              Забронювати зараз
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;