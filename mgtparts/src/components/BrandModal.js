import React, { useState } from "react";
import { X, Mail, Phone, MessageSquare, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const BrandModal = ({
  brand,
  isOpen,
  onClose,
  showContactModal,
  setShowContactModal,
}) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLearnMore = () => {
    setShowContactModal(true);
  };

  const handleCopy = async (type) => {
    try {
      if (type === "email") {
        await navigator.clipboard.writeText("partsmgt@gmail.com");
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        await navigator.clipboard.writeText("+38(093)-390-22-03");
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

  const categories = brand.categories || [];
  const MAX_PER_COLUMN = 7;
  const numberOfColumns = Math.ceil(categories.length / MAX_PER_COLUMN);
  const columns = Array.from({ length: numberOfColumns }, (_, columnIndex) => {
    const start = columnIndex * MAX_PER_COLUMN;
    return categories.slice(start, start + MAX_PER_COLUMN);
  });

  const getModalWidth = () => {
    if (numberOfColumns === 1) return "max-w-md";
    if (numberOfColumns === 2) return "max-w-2xl";
    return "max-w-4xl";
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackgroundClick}
    >
      <div
        className={`bg-white rounded-lg ${getModalWidth()} w-full mx-4`}
        onClick={(e) => e.stopPropagation()}
      >
        {!showContactModal ? (
          <div className="p-4">
            <div className="flex justify-between items-center mb-3">
              <h3 className="text-2xl font-bold text-[#020632]">
                {brand.name}
              </h3>
              <button
                onClick={onClose}
                className="text-[#020632] hover:text-[#020632]/80"
              >
                <X size={20} />
              </button>
            </div>
            <img
              src={brand.image}
              alt={brand.name}
              className="w-full h-40 object-contain mb-3"
            />
            <p className="text-[#020632] text-sm mb-3">{brand.description}</p>
            <div className="mb-4">
              <h4 className="font-medium text-[#020632] mb-2">
                Категорії продукту:
              </h4>
              <div
                className="grid gap-4"
                style={{
                  gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
                }}
              >
                {columns.map((columnCategories, columnIndex) => (
                  <ul
                    key={columnIndex}
                    className="list-disc list-inside text-[#020632] text-sm"
                  >
                    {columnCategories.map((category, index) => (
                      <li key={index} className="mb-0.5">
                        {category}
                      </li>
                    ))}
                  </ul>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <button
                onClick={handleLearnMore}
                className="w-full bg-[#020632] text-white py-2 px-4 rounded-full font-medium hover:bg-[#020632]/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
              >
                Дізнатись більше
              </button>
            </div>
          </div>
        ) : (
          <div className="p-6">
            <button
              className="absolute right-4 top-4 text-gray-500 hover:text-[#020632] transition-colors"
              onClick={onClose}
            >
              <X size={20} />
            </button>

            <h2 className="text-2xl font-bold text-[#020632] mb-4">
              {brand.name}
            </h2>

            <div className="space-y-4">
              <p className="text-[#020632]/80">
                Наша команда фахівців готова допомогти вам з підбором найкращих
                запчастин для вашого автомобіля. Ми пропонуємо як оригінальні
                деталі від виробника, так і якісні аналоги, що можуть бути
                вигіднішими за ціною. Все залежить від ваших потреб та бюджету.
              </p>

              <p className="text-[#020632]/80">
                Щоб отримати персональну консультацію та дізнатися, який варіант
                найкраще підійде саме для вашого авто, скористайтесь одним із
                способів зв'язку:
              </p>

              <div className="grid gap-4 mt-6">
                <div
                  onClick={() => handleCopy("phone")}
                  className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-[#020632]" />
                    <span className="text-[#020632]">+38(093)-390-22-03</span>
                  </div>
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
                          <Check className="w-5 h-5 text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={iconVariants}
                        >
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-[#020632] transition-colors" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div className="flex gap-2">
                  <a
                    href="https://t.me/maks00044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 p-3 bg-[#020632] text-white rounded-lg hover:bg-[#020632]/90 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Telegram</span>
                  </a>

                  <a
                    href="viber://chat?number=+3800933902203"
                    className="flex-1 flex items-center justify-center space-x-2 p-3 bg-[#020632] text-white rounded-lg hover:bg-[#020632]/90 transition-colors"
                  >
                    <MessageSquare className="w-5 h-5" />
                    <span>Viber</span>
                  </a>
                </div>

                <div
                  onClick={() => handleCopy("email")}
                  className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-[#020632]" />
                    <span className="text-[#020632]">partsmgt@gmail.com</span>
                  </div>
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
                          <Check className="w-5 h-5 text-green-500" />
                        </motion.div>
                      ) : (
                        <motion.div
                          key="copy"
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          variants={iconVariants}
                        >
                          <Copy className="w-5 h-5 text-gray-400 group-hover:text-[#020632] transition-colors" />
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BrandModal;
