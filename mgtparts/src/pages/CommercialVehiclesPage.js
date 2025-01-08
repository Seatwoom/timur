import React, { useState, useEffect, useRef } from "react";
import CategoriesSlider from "../components/CategoriesSlider";
import SubcategoriesList from "../components/SubcategoriesList";

const CommercialVehiclesPage = ({ categories, onBack }) => {
  const [activeCategory, setActiveCategory] = useState(null);
  const subcategoriesContainerRef = useRef(null);

  // Используем те же категории, что и для легковых авто, просто берем их из массива
  const commercialVehicleCategories =
    categories.find((cat) => cat.id === 3)?.items || [];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleCategoryClick = (categoryId) => {
    setActiveCategory(categoryId);
  };

  useEffect(() => {
    if (commercialVehicleCategories.length > 0 && activeCategory === null) {
      setActiveCategory(commercialVehicleCategories[0].id);
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
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="bg-white shadow-sm">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="w-full md:w-2/3">
              <h1 className="text-4xl font-bold text-[#020632] mb-4">
                Вантажні автомобілі/Спецтехніка
              </h1>
              <p className="text-xl text-[#020632]/80">
                Широкий вибір запчастин для вантажних автомобілів та
                спецтехніки.
              </p>
            </div>
            <div className="w-full md:w-1/3 max-w-xs">
              <img
                src="/Photos/section/section2.png"
                alt="Commercial Vehicles"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <CategoriesSlider
          categories={commercialVehicleCategories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />

        <div
          ref={subcategoriesContainerRef}
          className="relative transition-all duration-300 ease-in-out"
        >
          {commercialVehicleCategories.map((category) => (
            <SubcategoriesList
              key={category.id}
              subcategories={category.subcategories}
              isVisible={activeCategory === category.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CommercialVehiclesPage;
