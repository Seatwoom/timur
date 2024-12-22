const Footer = () => (
  <footer className="bg-[#020632] text-white py-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <h3 className="text-lg font-semibold mb-4">Про нас</h3>
          <p className="text-sm">
            Чудово
          </p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Контакти</h3>
          <p className="text-sm">Email: info@example.com</p>
          <p className="text-sm">Phone: +1 234 567 890</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Як придбати?</h3>
          <ul className="space-y-2">
            <li>
              <a href="/delivery" className="text-sm hover:text-gray-300">
                Доставка
              </a>
            </li>
            <li>
              <a href="/payment" className="text-sm hover:text-gray-300">
                Оплата
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-4">Слідкуй за нами</h3>
          <div className="flex space-x-4">
            {/* Add your social media icons here */}
          </div>
        </div>
      </div>
      <div className="mt-8 pt-8 border-t border-gray-700 text-center">
        <p className="text-sm">&copy; 2024 MGT Parts. All rights reserved.</p>
      </div>
    </div>
  </footer>
);
export default Footer;
