import React from "react";
import HeroSection from "../components/HeroSection";
import CategoryTile from "../components/CategoryTile";
import FeaturedProducts from "../components/FeaturedProducts";
import Footer from "../components/Footer";
import CategorySection from "../components/CategorySection";

const Homepage = ({ categories, activeCategory, onCategoryClick }) => {
  const elementItems = categories[0].items.slice(0, 3);
  const categoryItems = categories[1].items.slice(0, 6);
  const brandItems = categories[2].items;

  return (
    <>
      <HeroSection />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {elementItems.map((item) => (
            <CategoryTile
              key={item.id}
              category={item}
              onClick={() => onCategoryClick(item.id)}
            />
          ))}
        </div>
      </div>

      <CategorySection displayCategories={categoryItems} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FeaturedProducts products={brandItems} />
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
