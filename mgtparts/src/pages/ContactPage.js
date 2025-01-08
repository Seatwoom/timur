import React, { useState } from "react";
import { Mail, Phone, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = (onBack) => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const contactInfo = {
    email: "partsmgt@gmail.com",
    phone: "+38(093)-390-22-03",
  };

  const handleCopy = async (type) => {
    try {
      if (type === "email") {
        await navigator.clipboard.writeText(contactInfo.email);
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        await navigator.clipboard.writeText(contactInfo.phone);
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
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
    <div className="pt-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-4xl font-bold text-[#020632] mb-8">Контакти</h1>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 group">
              <Mail className="w-8 h-8 text-[#020632]" strokeWidth={1.5} />
              <div
                onClick={() => handleCopy("email")}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <div className="text-lg text-[#020632] hover:text-[#020632]/80 transition-colors">
                  {contactInfo.email}
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

            <div className="flex items-center space-x-4 group">
              <Phone className="w-8 h-8 text-[#020632]" strokeWidth={1.5} />
              <div
                onClick={() => handleCopy("phone")}
                className="flex items-center space-x-4 cursor-pointer"
              >
                <div className="text-lg text-[#020632] hover:text-[#020632]/80 transition-colors">
                  {contactInfo.phone}
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
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactPage;
