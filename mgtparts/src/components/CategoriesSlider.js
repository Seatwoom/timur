import React, { useState, useRef } from "react";
import CategoryTab from "./CategoryTab";

const CategoriesSlider = ({ categories, activeCategory, onCategoryClick }) => {
  const [translateX, setTranslateX] = useState(0);
  const sliderRef = useRef(null);
  const containerRef = useRef(null);

  const canScrollLeft = translateX < 0;
  const canScrollRight =
    translateX >
    -(categories.length * 200 - containerRef.current?.offsetWidth || 0);

  const handleNext = () => {
    if (containerRef.current && sliderRef.current) {
      const containerWidth = containerRef.current.offsetWidth;
      const newTranslateX = Math.max(
        -(categories.length * 200 - containerWidth),
        translateX - 200
      );
      setTranslateX(newTranslateX);
    }
  };

  const handlePrev = () => {
    const newTranslateX = Math.min(0, translateX + 200);
    setTranslateX(newTranslateX);
  };

  return (
    <div className="relative flex items-center">
      <button
        onClick={handlePrev}
        className={`absolute left-0 z-10 p-2 rounded-full bg-white shadow-md 
                   transition-all duration-200 transform -translate-x-1/2
                   ${
                     !canScrollLeft
                       ? "opacity-50 cursor-not-allowed"
                       : "hover:bg-gray-50"
                   }`}
        disabled={!canScrollLeft}
      >
        <svg
          className="w-6 h-6 text-[#020632]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <div
        ref={containerRef}
        className="overflow-hidden mx-12 border-b border-gray-200"
      >
        <div
          ref={sliderRef}
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(${translateX}px)` }}
        >
          {categories.map((category) => (
            <CategoryTab
              key={category.id}
              category={category}
              isActive={activeCategory === category.id}
              onClick={() => onCategoryClick(category.id)}
            />
          ))}
        </div>
      </div>

      <button
        onClick={handleNext}
        className={`absolute right-0 z-10 p-2 rounded-full bg-white shadow-md 
                   transition-all duration-200 transform translate-x-1/2
                   ${
                     !canScrollRight
                       ? "opacity-50 cursor-not-allowed"
                       : "hover:bg-gray-50"
                   }`}
        disabled={!canScrollRight}
      >
        <svg
          className="w-6 h-6 text-[#020632]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  );
};

export default CategoriesSlider;
