import React, { useState } from "react";
import Header from "./components/Header";
import Homepage from "./pages/HomePage";
import PassengerCarsPage from "./pages/PassengerCarsPage";
import { categories } from "./data/categories";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryClick = (id) => {
    if (id === "el-1") {
      setCurrentPage("passenger-cars");
    } else {
      setActiveCategory(id);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  return (
    <div className="min-h-screen bg-white">
      <Header onLogoClick={handleBackToHome} />
      {currentPage === "home" ? (
        <Homepage
          categories={categories}
          activeCategory={activeCategory}
          onCategoryClick={handleCategoryClick}
        />
      ) : currentPage === "passenger-cars" ? (
        <PassengerCarsPage categories={categories} onBack={handleBackToHome} />
      ) : null}
    </div>
  );
};

export default App;
