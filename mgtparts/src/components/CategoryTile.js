import React from "react";

const CategoryTile = ({ category, onClick }) => (
  <div
    onClick={onClick}
    className="group relative rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-1"
  >
    <div className="aspect-square relative">
      <img
        src={category.image}
        alt={category.name}
        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </div>
    <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
      <h3 className="text-[#020632] text-lg font-semibold">{category.name}</h3>
      <p className="text-sm text-[#020632]/70 mt-1">{category.description}</p>
    </div>
  </div>
);

export default CategoryTile;
