import React from "react";
import carlogo3 from "./Photos/carlogo3.jpg";

const HeroSection = () => (
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <h1 className="text-4xl font-bold text-[#020632] mb-4">
          MGT Parts – вибір без зайвих переплат
        </h1>
        <p className="text-lg text-[#020632]">
          Не потрібно бути експертом, щоб отримати якісні запчастини для свого
          авто. Ми допоможемо вам підібрати все необхідне напряму від виробників
          і без посередників, заощадивши ваші гроші та час.
        </p>
      </div>
      <div className="w-full md:w-1/2">
        <img src={carlogo3} alt="Car Logo" className="rounded-lg " />
      </div>
    </div>
  </div>
);

export default HeroSection;
