import React from "react";
import { Link } from "react-router-dom";
import logoImage from "../../assets/logol2.jpeg";

const Logo = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-24 h-16",
    md: "w-32 h-20",
    lg: "w-40 h-24",
    xl: "w-48 h-28",
  };

  return (
    <Link to="/" className={`${sizeClasses[size]} ${className} flex items-center hover:opacity-80 transition-opacity duration-200`}>
      <img
        src={logoImage}
        alt="L2 Suplementos"
        className="w-full h-full object-contain rounded-lg"
      />
    </Link>
  );
};

export default Logo;
