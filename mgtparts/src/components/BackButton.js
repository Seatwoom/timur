import React from "react";
import { ArrowLeft } from "lucide-react";

const BackButton = ({ onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center text-[#020632]/80 hover:text-[#020632] transition-colors mb-4 hover:-translate-x-1 transform transition-transform duration-200"
  >
    <ArrowLeft className="w-5 h-5 mr-2" />
    <span>На головну</span>
  </button>
);

export default BackButton;
