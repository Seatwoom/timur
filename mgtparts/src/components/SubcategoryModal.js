import React, { useState } from "react";
import { Mail, Phone, MessageSquare, X, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const SubcategoryModal = ({ subcategory, onClose }) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

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

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-2xl w-full mx-auto relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-[#020632] transition-colors"
          onClick={onClose}
        >
          <X size={20} />
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#020632] mb-4">
            {subcategory.name}
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
      </div>
    </div>
  );
};

export default SubcategoryModal;
