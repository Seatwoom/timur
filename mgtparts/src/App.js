import React, { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Homepage from "./pages/HomePage";
import PassengerCarsPage from "./pages/PassengerCarsPage";
import CommercialVehiclesPage from "./pages/CommercialVehiclesPage";
import ToolsPage from "./pages/ToolsPage"; 
import AboutPage from "./pages/AboutPage";
import PaymentPage from "./pages/PaymentPage";
import DeliveryPage from "./pages/DeliveryPage";
import ContactPage from "./pages/ContactPage";
import { categories } from "./data/categories";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");
  const [activeCategory, setActiveCategory] = useState(0);

  const handleCategoryClick = (id) => {
    if (id === "el-1") {
      setCurrentPage("passenger-cars");
    } else if (id === "el-2") {
      setCurrentPage("commercial-vehicles");
    } else if (id === "el-3") {
      setCurrentPage("tools");
    } else {
      setActiveCategory(id);
    }
  };

  const handleBackToHome = () => {
    setCurrentPage("home");
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Homepage
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />
        );
      case "payment":
        return <PaymentPage />;
      case "delivery":
        return <DeliveryPage />;
      case "contacts":
        return <ContactPage />;
      case "passenger-cars":
        return <PassengerCarsPage categories={categories} />;
      case "commercial-vehicles":
        return <CommercialVehiclesPage categories={categories} />;
      case "tools":
        return <ToolsPage categories={categories} />;
      case "about":
        return <AboutPage />;
      default:
        return (
          <Homepage
            categories={categories}
            activeCategory={activeCategory}
            onCategoryClick={handleCategoryClick}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header
        onLogoClick={handleBackToHome}
        onNavigate={handleNavigate}
        isHomePage={currentPage === "home"}
      />
      <main className="flex-grow">{renderPage()}</main>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
