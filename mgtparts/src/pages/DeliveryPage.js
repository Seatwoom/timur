import React from "react";
import { motion } from "framer-motion";
import { Truck, Package, Gift } from "lucide-react";

const DeliveryPage = ( onBack) => {
  const deliveryInfo = [
    {
      icon: Truck,
      title: "Доставка по всій Україні",
      description:
        "Ми здійснюємо доставку по всій Україні через відділення «Нової Пошти». Ви можете обрати найближче відділення для зручного отримання вашого замовлення.",
    },
    {
      icon: Package,
      title: "Додаткові варіанти",
      description:
        "Крім того, доступні інші варіанти доставки, які можна попередньо узгодити з нашим менеджером під час оформлення замовлення.",
    },
    {
      icon: Gift,
      title: "Безкоштовна перша доставка",
      description:
        "При першому замовленні доставка для вас абсолютно безкоштовна!",
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
        <h1 className="text-4xl font-bold text-[#020632] mb-8">Доставка</h1>

        <motion.div variants={containerVariants} className="space-y-6">
          {deliveryInfo.map((info, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 mt-1">
                  <info.icon
                    className="w-8 h-8 text-[#020632]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#020632] mb-3">
                    {info.title}
                  </h3>
                  <p className="text-[#020632]/70 leading-relaxed">
                    {info.description}
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

export default DeliveryPage;
