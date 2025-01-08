import React, { useState } from "react";
import { Check, Copy, ArrowLeft } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import carlogo5 from "./Photos/logo5.png";

const Header = ({ onLogoClick, onNavigate, isHomePage }) => {
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
        await navigator.clipboard.writeText("093902203");
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
    <header className="fixed top-0 left-0 right-0 bg-[#020632] shadow-lg z-50">
      <div className="max-w-[1920px] mx-auto pr-4 sm:pr-6 lg:pr-8">
        <div className="flex items-center justify-between h-16 relative">
          <div className="flex-1 flex items-center">
            <div className="ml-32">
              <div
                className="flex-shrink-0 cursor-pointer transform transition-transform duration-200 hover:scale-110"
                onClick={onLogoClick}
              >
                <img src={carlogo5} alt="Car Logo" className="h-12 w-auto" />
              </div>
            </div>

            {!isHomePage && (
              <div className="absolute left-2">
                <button
                  onClick={onLogoClick}
                  className="flex items-center text-white/80 hover:text-white transition-all duration-200 hover:scale-105"
                >
                  <ArrowLeft className="w-5 h-5 mr-1" />
                  <span>На головну</span>
                </button>
              </div>
            )}
          </div>

          <nav className="hidden md:flex space-x-8">
            <a
              href="/delivery"
              onClick={(e) => handleNavClick(e, "delivery")}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Доставка
            </a>
            <a
              href="/payment"
              onClick={(e) => handleNavClick(e, "payment")}
              className="text-white hover:text-gray-200 transition-colors duration-200"
            >
              Оплата
            </a>
            <div className="relative group">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(e, "contacts");
                }}
                className="text-white hover:text-gray-200 transition-colors duration-200"
              >
                Контакти
              </a>
              <div className="absolute top-full right-0 mt-1 bg-white rounded-lg shadow-lg overflow-hidden transform scale-0 group-hover:scale-100 transition-transform origin-top duration-200">
                <div
                  className="flex items-center justify-between px-4 py-2 text-sm text-[#020632] hover:bg-gray-100 whitespace-nowrap group cursor-pointer"
                  onClick={() => handleCopy("email")}
                >
                  <span>partsmgt@gmail.com</span>
                  <div className="ml-2">
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
                          <Copy className="w-4 h-4 text-gray-400 group-hover:text-[#020632]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
                <div
                  className="flex items-center justify-between px-4 py-2 text-sm text-[#020632] hover:bg-gray-100 whitespace-nowrap group cursor-pointer"
                  onClick={() => handleCopy("phone")}
                >
                  <span>093902203</span>
                  <div className="ml-2">
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
                          <Copy className="w-4 h-4 text-gray-400 group-hover:text-[#020632]" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
            <a
              href="/about"
              onClick={(e) => handleNavClick(e, "about")}
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
