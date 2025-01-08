import React from "react";
import { motion } from "framer-motion";
import { Car, Package, Truck, Shield, Clock, Headphones } from "lucide-react";

const AboutPage = (onBack) => {
  const features = [
    {
      title: "Широкий асортимент",
      description:
        "У нас є все: від популярних запчастин до рідкісних комплектуючих. Ми пропонуємо як оригінальні деталі, так і високоякісні аналоги.",
      icon: Package,
    },
    {
      title: "Постачання офіційних деталей з Європи",
      description:
        "Ми співпрацюємо з європейськими заводами та офіційними постачальниками, що гарантує 100% справжність деталей та найкраще співвідношення ціни і якості.",
      icon: Truck,
    },
    {
      title: "Прямі поставки від виробників",
      description: "Це гарантія оптимальних цін без зайвих націнок.",
      icon: Car,
    },
    {
      title: "Надійність",
      description:
        "Кожна запчастина проходить строгий контроль якості. Ми гарантуємо, що всі товари відповідають стандартам і забезпечують довговічність та безпеку вашого автомобіля.",
      icon: Shield,
    },
    {
      title: "Швидка реакція та доставка",
      description:
        "Ми обробляємо замовлення швидко, а доставка здійснюється в найкоротші терміни по всій країні.",
      icon: Clock,
    },
    {
      title: "Експертна підтримка",
      description:
        "Навіть якщо ви не розбираєтесь у технічних деталях, наша команда допоможе підібрати потрібні запчастини для вашого авто.",
      icon: Headphones,
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
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-[#020632] mb-6">
            MGT Parts
            <span className="block text-2xl md:text-3xl mt-2 text-[#020632]/80">
              Motor Gear Technology
            </span>
          </h1>
          <p className="text-xl text-[#020632]/70">
            Ласкаво просимо на наш сайт автозапчастин!
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-8 mb-12"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ scale: 1.03 }}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <feature.icon
                    className="w-8 h-8 text-[#020632]"
                    strokeWidth={1.5}
                  />
                </div>
                <div>
                  <h3 className="font-semibold text-[#020632] text-lg mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#020632]/70">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="bg-[#020632] text-white p-8 rounded-2xl text-center"
        >
          <h2 className="text-2xl font-semibold mb-4">Наша місія</h2>
          <p className="text-white/90">
            Забезпечити вам доступ до якісних запчастин із надійних джерел,
            зберігаючи ваш час і гроші, і роблячи ваше авто безпечним та
            надійним.
          </p>
          <div className="mt-6 font-medium">
            Обираючи нас, ви обираєте якість, професійність та зручність.
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutPage;
