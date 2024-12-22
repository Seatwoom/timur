import React from "react";

const SubcategoryModal = ({ subcategory, onClose }) => {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl max-w-md w-full mx-auto relative"
        onClick={handleModalClick}
      >
        <button
          className="absolute right-4 top-4 text-gray-500 hover:text-[#020632] transition-colors"
          onClick={onClose}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <div className="p-6">
          <h2 className="text-2xl font-bold text-[#020632] mb-4">
            {subcategory.name}
          </h2>
          <p className="text-[#020632]/80 mb-6">
            Для отримання детальної інформації про{" "}
            {subcategory.name.toLowerCase()}, будь ласка, зв'яжіться з нашими
            спеціалістами.
          </p>

          <div className="mt-6 pt-4 border-t border-gray-200">
            <a
              href="/contacts"
              className="inline-block w-full text-center py-2 px-4 bg-[#020632] text-white rounded-lg 
                       hover:bg-[#020632]/90 transition-colors duration-200"
            >
              Зв'язатися з нами
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubcategoryModal;
