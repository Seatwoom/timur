import React, { useState, useRef, useEffect } from "react";
import BrandModal from "./BrandModel";

const FeaturedProducts = ({ products }) => {
  const [showAll, setShowAll] = useState(false);
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [gridHeight, setGridHeight] = useState("auto");
  const sectionRef = useRef(null);
  const gridRef = useRef(null);
  const titleRef = useRef(null);

  const INITIAL_DISPLAY_COUNT = 20;
  const ITEMS_PER_ROW = 10; // For lg screens
  const safeProducts = products || [];
  const hasMoreToShow = safeProducts.length > INITIAL_DISPLAY_COUNT;

  const handleBrandClick = (brand) => {
    setSelectedBrand(brand);
    setIsModalOpen(true);
  };

  const getRowIndex = (index) => Math.floor(index / ITEMS_PER_ROW);

  useEffect(() => {
    if (gridRef.current) {
      const initialHeight = showAll
        ? gridRef.current.scrollHeight
        : Math.ceil(INITIAL_DISPLAY_COUNT / ITEMS_PER_ROW) *
            (gridRef.current.children[0]?.offsetHeight || 0) +
          16;
      setGridHeight(`${initialHeight}px`);
    }
  }, [showAll, products]);

  const scrollToSection = () => {
    if (titleRef.current) {
      const headerHeight = 64; // Adjust this value to match your header height
      const elementPosition =
        titleRef.current.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const toggleShowAll = () => {
    if (showAll) {
      scrollToSection();
      setTimeout(() => setShowAll(false), 100);
    } else {
      setShowAll(true);
    }
  };

  return (
    <div className="mb-8" ref={sectionRef}>
      <h2 ref={titleRef} className="text-4xl font-bold text-[#020632] mb-4">
        Бренди
      </h2>
      <div
        className="overflow-hidden transition-[height] duration-700 ease-in-out"
        style={{ height: gridHeight }}
      >
        <div
          ref={gridRef}
          className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-4"
        >
          {safeProducts.map((brand, index) => {
            const rowIndex = getRowIndex(index);
            const isExtraItem = index >= INITIAL_DISPLAY_COUNT;

            return (
              <div
                key={brand.id}
                onClick={() => handleBrandClick(brand)}
                className={`group aspect-square relative rounded-lg overflow-hidden bg-white transition-all duration-500 hover:shadow-xl cursor-pointer hover:-translate-y-1
                  ${
                    isExtraItem
                      ? showAll
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-8"
                      : "opacity-100"
                  }`}
                style={{
                  transitionDelay: isExtraItem
                    ? `${
                        (rowIndex -
                          Math.floor(INITIAL_DISPLAY_COUNT / ITEMS_PER_ROW)) *
                        150
                      }ms`
                    : "0ms",
                }}
              >
                <img
                  src={brand.image}
                  alt={brand.name}
                  className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 p-2 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-[#020632] text-sm font-semibold text-center">
                    {brand.name}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="mt-6 flex justify-center">
        {hasMoreToShow && (
          <button
            onClick={toggleShowAll}
            className="px-8 py-3 bg-[#020632] text-white rounded-full font-medium hover:bg-[#020632]/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            {showAll ? "Менше" : "Більше"}
          </button>
        )}
      </div>
      <BrandModal
        brand={selectedBrand}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedBrand(null);
        }}
      />
    </div>
  );
};

export default FeaturedProducts;
