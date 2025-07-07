import React from 'react';

const EBLogo = ({ className = "w-4 h-4", imageUrl = null }) => {
  // Se uma imagem for fornecida, use ela. Caso contrário, use o logo baseado em texto
  if (imageUrl) {
    return (
      <img 
        src={imageUrl} 
        alt="EB Logo" 
        className={`${className} rounded-full object-cover shadow-lg`}
      />
    );
  }

  // Logo baseado em texto (padrão)
  return (
    <div className={`${className} bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg hover:shadow-xl transition-shadow duration-300`}>
      <span className="text-[10px] font-extrabold">EB</span>
    </div>
  );
};

export default EBLogo;
