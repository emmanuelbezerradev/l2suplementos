import React from "react";
import logoImage from "../../assets/logol2.jpeg";

const Logo = ({ className = "", size = "md" }) => {
  const sizeClasses = {
    sm: "w-24 h-16",
    md: "w-32 h-20",
    lg: "w-40 h-24",
    xl: "w-48 h-28",
  };

  return (
    <div className={`${sizeClasses[size]} ${className} flex items-center`}>
      <img
        src={logoImage}
        alt="L2 Suplementos"
        className="w-full h-full object-contain rounded-lg"
      />
    </div>
  );
};

export default Logo;
