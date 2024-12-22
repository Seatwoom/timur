import React from "react";
import { X } from "lucide-react";

const BrandModal = ({ brand, isOpen, onClose }) => {
  if (!isOpen) return null;

  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleLearnMore = () => {
    console.log("Learn more about:", brand.name);
  };

  const categories = brand.categories || [];
  const MAX_PER_COLUMN = 7;
  const numberOfColumns = Math.ceil(categories.length / MAX_PER_COLUMN);
  const columns = Array.from({ length: numberOfColumns }, (_, columnIndex) => {
    const start = columnIndex * MAX_PER_COLUMN;
    return categories.slice(start, start + MAX_PER_COLUMN);
  });

  const getModalWidth = () => {
    if (numberOfColumns === 1) return "max-w-md";
    if (numberOfColumns === 2) return "max-w-2xl";
    return "max-w-4xl";
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackgroundClick}
    >
      <div className={`bg-white rounded-lg p-4 ${getModalWidth()} w-full mx-4`}>
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-bold text-[#020632]">{brand.name}</h3>
          <button
            onClick={onClose}
            className="text-[#020632] hover:text-[#020632]/80"
          >
            <X size={20} />
          </button>
        </div>
        <img
          src={brand.image}
          alt={brand.name}
          className="w-full h-40 object-contain mb-3"
        />
        <p className="text-[#020632] text-sm mb-3">{brand.description}</p>
        <div className="mb-4">
          <h4 className="font-medium text-[#020632] mb-2">
            Категорії продукту:
          </h4>
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: `repeat(${numberOfColumns}, minmax(0, 1fr))`,
            }}
          >
            {columns.map((columnCategories, columnIndex) => (
              <ul
                key={columnIndex}
                className="list-disc list-inside text-[#020632] text-sm"
              >
                {columnCategories.map((category, index) => (
                  <li key={index} className="mb-0.5">
                    {category}
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
        <div className="flex justify-center">
          <button
            onClick={handleLearnMore}
            className="w-full bg-[#020632] text-white py-2 px-4 rounded-full font-medium hover:bg-[#020632]/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            Дізнатись більше
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrandModal;
