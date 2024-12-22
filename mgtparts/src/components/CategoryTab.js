import React from "react";

const CategoryTab = ({ category, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`
      px-4 py-1.5 cursor-pointer transition-all duration-200 
      font-medium text-sm flex-shrink-0 text-center
      ${
        isActive
          ? "text-[#020632] border-b-2 border-[#020632]"
          : "text-gray-500 hover:text-[#020632] border-b-2 border-transparent"
      }
    `}
    style={{ width: "200px" }}
  >
    {category.name}
  </div>
);

export default CategoryTab;
