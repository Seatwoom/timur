import React, { useState } from "react";
import { Copy, Check } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Footer = ({ onNavigate }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleNavClick = (e, page) => {
    e.preventDefault();
    onNavigate(page);
  };

  const handleCopy = async (type) => {
    try {
      if (type === "email") {
        await navigator.clipboard.writeText("partsmgt@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        await navigator.clipboard.writeText("380933902203");
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const iconVariants = {
    hidden: { scale: 0 },
    visible: {
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20,
      },
    },
    exit: {
      scale: 0,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <footer className="bg-[#020632] text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Про нас</h3>
            <p className="text-sm">
              MGT Parts (Motor Gear Technology) — компанія, що постачає якісні
              автозапчастини напряму від виробників, забезпечуючи оптимальні
              ціни та широкий вибір.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Контакти</h3>
            <div className="space-y-2">
              <div
                onClick={() => handleCopy("email")}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <p className="text-sm">Email: partsmgt@gmail.com</p>
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {copiedEmail ? (
                      <motion.div
                        key="check"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={iconVariants}
                      >
                        <Check className="w-4 h-4 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={iconVariants}
                      >
                        <Copy className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
              <div
                onClick={() => handleCopy("phone")}
                className="flex items-center space-x-2 group cursor-pointer"
              >
                <p className="text-sm">Телефон: +38(093)-390-22-03</p>
                <div className="relative">
                  <AnimatePresence mode="wait">
                    {copiedPhone ? (
                      <motion.div
                        key="check"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={iconVariants}
                      >
                        <Check className="w-4 h-4 text-green-500" />
                      </motion.div>
                    ) : (
                      <motion.div
                        key="copy"
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        variants={iconVariants}
                      >
                        <Copy className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Як придбати?</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/delivery"
                  onClick={(e) => handleNavClick(e, "delivery")}
                  className="text-sm hover:text-gray-300 cursor-pointer"
                >
                  Доставка
                </a>
              </li>
              <li>
                <a
                  href="/payment"
                  onClick={(e) => handleNavClick(e, "payment")}
                  className="text-sm hover:text-gray-300 cursor-pointer"
                >
                  Оплата
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Слідкуй за нами</h3>
            <div className="flex space-x-4"></div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-sm">&copy; 2025 MGT Parts. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
