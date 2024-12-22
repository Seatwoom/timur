import React from "react";

const CategorySection = ({ displayCategories }) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-4xl font-bold text-[#020632] mb-8">Категорії</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {displayCategories.map((product) => (
          <div
            key={product.id}
            className="group relative rounded-xl overflow-hidden bg-white transition-all duration-300 hover:shadow-xl cursor-pointer hover:-translate-y-1"
          >
            <div className="aspect-square relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              <h3 className="text-[#020632] text-lg font-semibold">
                {product.name}
              </h3>
              <p className="text-sm text-[#020632]/70 mt-1">
                {product.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 flex justify-center">
        <button className="px-8 py-3 bg-[#020632] text-white rounded-full font-medium hover:bg-[#020632]/90 transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5">
          Більше
        </button>
      </div>
    </div>
  );
};

export default CategorySection;
