import React, { useState } from "react";
import SubcategoryModal from "./SubcategoryModal";

const SubcategoriesList = ({ subcategories, isVisible }) => {
  const [selectedSubcategory, setSelectedSubcategory] = useState(null);

  const handleSubcategoryClick = (subcategory) => {
    setSelectedSubcategory(subcategory);
  };

  const handleCloseModal = () => {
    setSelectedSubcategory(null);
  };

  return (
    <>
      <div
        className={`
          transition-all duration-300 ease-in-out
          absolute w-full left-0 
          ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"}
        `}
        style={{
          height: isVisible ? "auto" : "0",
          position: "absolute",
          visibility: isVisible ? "visible" : "hidden",
        }}
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 bg-gray-50">
          {subcategories &&
            subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                onClick={() => handleSubcategoryClick(subcategory)}
                className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md 
                       transition-all duration-200 cursor-pointer hover:-translate-y-1"
              >
                <p className="text-[#020632] text-sm font-medium">
                  {subcategory.name}
                </p>
              </div>
            ))}
        </div>
      </div>

      {/* Modal */}
      {selectedSubcategory && (
        <SubcategoryModal
          subcategory={selectedSubcategory}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default SubcategoriesList;
