import React from "react";
import { motion } from "framer-motion";
import { Truck, CreditCard } from "lucide-react";

const PaymentPage = (onBack) => {
  const paymentMethods = [
    {
      icon: Truck,
      title: "Наложений платіж",
      description:
        "Оплачуйте товар при отриманні у відділенні «Нової Пошти». Після підтвердження замовлення наші фахівці зв'яжуться з вами для уточнення деталей доставки та підтвердження наявності необхідних запчастин.",
    },
    {
      icon: CreditCard,
      title: "Оплата на банківський рахунок",
      description:
        "Ви можете здійснити передоплату за допомогою переказу на банківські реквізити. Після оформлення замовлення наші спеціалісти надішлють вам SMS з номером вашого замовлення та сумою для оплати. Після здійснення переказу обов'язково зв'яжіться з нашими менеджерами для підтвердження отримання платежу.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const heroVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="pt-16 bg-gradient-to-b from-white to-gray-50 min-h-screen">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={heroVariants}
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12"
      >
        <h1 className="text-4xl font-bold text-[#020632] mb-8">Оплата</h1>

        <motion.div variants={containerVariants} className="space-y-6">
          {paymentMethods.map((method, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <method.icon
                    className="w-8 h-8 text-[#020632]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#020632] mb-3">
                    {method.title}
                  </h3>
                  <p className="text-[#020632]/70 leading-relaxed">
                    {method.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default PaymentPage;
