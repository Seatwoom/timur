import React, { useState, useEffect, useRef } from "react";
import Footer from "../components/Footer";
import CategoriesSlider from "../components/CategoriesSlider";
import SubcategoriesList from "../components/SubcategoriesList";

const PassengerCarsPage = ({ categories, onBack }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const subcategoriesContainerRef = useRef(null);

  const passengerCarCategories =
    categories.find((cat) => cat.id === 3)?.items || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  useEffect(() => {
    if (passengerCarCategories.length > 0 && activeCategory === null) {
      setActiveCategory(passengerCarCategories[0].id);
    }
  }, []);

  useEffect(() => {
    if (subcategoriesContainerRef.current && activeCategory) {
      const activeContent =
        subcategoriesContainerRef.current.querySelector(".opacity-100");
      if (activeContent) {
        subcategoriesContainerRef.current.style.height = `${activeContent.scrollHeight}px`;
      }
    }
  }, [activeCategory]);

  return (
    <>
      <div className="min-h-screen pt-16 bg-gray-50">
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="w-full md:w-2/3">
                <h1 className="text-4xl font-bold text-[#020632] mb-4">
                  Легкові автомобілі
                </h1>
                <p className="text-xl text-[#020632]/80">
                  Знайдіть необхідні запчастини для вашого автомобіля.
                </p>
              </div>
              <div className="w-full md:w-1/3 max-w-xs">
                <img
                  src="/Photos/section/section1.png"
                  alt="Passenger Cars"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <CategoriesSlider
            categories={passengerCarCategories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />

          <div
            ref={subcategoriesContainerRef}
            className="relative transition-all duration-300 ease-in-out"
          >
            {passengerCarCategories.map((category) => (
              <SubcategoriesList
                key={category.id}
                subcategories={category.subcategories}
                isVisible={activeCategory === category.id}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PassengerCarsPage;
