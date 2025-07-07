import React from "react";

// Ícones SVG realistas de suplementos
const SupplementIcons = {
  // Pote de Whey Protein
  WheyProtein: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Pote principal */}
      <rect x="25" y="30" width="50" height="55" rx="5" fill="#e74c3c" stroke="#c0392b" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="27" rx="25" ry="8" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="30" y="40" width="40" height="25" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="50" textAnchor="middle" fontSize="6" fill="#2c3e50" fontWeight="bold">WHEY</text>
      <text x="50" y="58" textAnchor="middle" fontSize="4" fill="#7f8c8d">PROTEIN</text>
      
      {/* Destaque */}
      <rect x="28" y="32" width="4" height="20" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),

  // Pote de Creatina
  Creatine: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Pote principal */}
      <rect x="25" y="30" width="50" height="55" rx="5" fill="#3498db" stroke="#2980b9" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="27" rx="25" ry="8" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="30" y="40" width="40" height="25" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="50" textAnchor="middle" fontSize="5" fill="#2c3e50" fontWeight="bold">CREATINE</text>
      <text x="50" y="58" textAnchor="middle" fontSize="4" fill="#7f8c8d">PURE</text>
      
      {/* Destaque */}
      <rect x="28" y="32" width="4" height="20" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),

  // Frasco de Pré-Treino
  PreWorkout: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Frasco principal */}
      <rect x="25" y="30" width="50" height="55" rx="5" fill="#e67e22" stroke="#d35400" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="27" rx="25" ry="8" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="30" y="40" width="40" height="25" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="47" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">PRE</text>
      <text x="50" y="53" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">WORKOUT</text>
      <text x="50" y="61" textAnchor="middle" fontSize="3" fill="#7f8c8d">ENERGY</text>
      
      {/* Raio de energia */}
      <polygon points="40,35 43,38 40,41 37,38" fill="#f39c12" opacity="0.8"/>
      <polygon points="60,35 63,38 60,41 57,38" fill="#f39c12" opacity="0.8"/>
      
      {/* Destaque */}
      <rect x="28" y="32" width="4" height="20" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),

  // Pote de BCAA
  BCAA: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Pote principal */}
      <rect x="25" y="30" width="50" height="55" rx="5" fill="#9b59b6" stroke="#8e44ad" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="27" rx="25" ry="8" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="30" y="40" width="40" height="25" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="50" textAnchor="middle" fontSize="6" fill="#2c3e50" fontWeight="bold">BCAA</text>
      <text x="50" y="58" textAnchor="middle" fontSize="4" fill="#7f8c8d">AMINO</text>
      
      {/* Destaque */}
      <rect x="28" y="32" width="4" height="20" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),

  // Frasco de Multivitamínico
  Multivitamin: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Frasco principal */}
      <rect x="25" y="30" width="50" height="55" rx="5" fill="#27ae60" stroke="#229954" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="27" rx="25" ry="8" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="30" y="40" width="40" height="25" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="47" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">MULTI</text>
      <text x="50" y="53" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">VITAMIN</text>
      
      {/* Símbolos de vitaminas */}
      <circle cx="35" cy="55" r="2" fill="#f39c12" opacity="0.7"/>
      <circle cx="50" cy="60" r="2" fill="#e74c3c" opacity="0.7"/>
      <circle cx="65" cy="55" r="2" fill="#3498db" opacity="0.7"/>
      
      {/* Destaque */}
      <rect x="28" y="32" width="4" height="20" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),

  // Frasco de Termogênico/Queimador
  FatBurner: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Frasco principal */}
      <rect x="25" y="30" width="50" height="55" rx="5" fill="#e74c3c" stroke="#c0392b" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="27" rx="25" ry="8" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="30" y="40" width="40" height="25" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="47" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">FAT</text>
      <text x="50" y="53" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">BURNER</text>
      
      {/* Chamas */}
      <polygon points="40,35 42,32 44,35 42,38" fill="#f39c12" opacity="0.8"/>
      <polygon points="50,33 52,30 54,33 52,36" fill="#e67e22" opacity="0.8"/>
      <polygon points="60,35 62,32 64,35 62,38" fill="#f39c12" opacity="0.8"/>
      
      {/* Destaque */}
      <rect x="28" y="32" width="4" height="20" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),

  // Pote de Massa Muscular/Hipercalórico
  MassGainer: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Pote principal (maior) */}
      <rect x="20" y="25" width="60" height="60" rx="6" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="25" rx="30" ry="10" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="22" rx="30" ry="10" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="25" y="35" width="50" height="30" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="43" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">MASS</text>
      <text x="50" y="49" textAnchor="middle" fontSize="4" fill="#2c3e50" fontWeight="bold">GAINER</text>
      <text x="50" y="57" textAnchor="middle" fontSize="3" fill="#7f8c8d">WEIGHT</text>
      
      {/* Destaque */}
      <rect x="23" y="27" width="4" height="25" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),

  // Frasco de Óleo de Peixe/Ômega 3
  Omega3: ({ className = "w-12 h-12" }) => (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Frasco principal */}
      <rect x="25" y="30" width="50" height="55" rx="5" fill="#f39c12" stroke="#e67e22" strokeWidth="2"/>
      
      {/* Tampa */}
      <ellipse cx="50" cy="30" rx="25" ry="8" fill="#34495e" stroke="#2c3e50" strokeWidth="2"/>
      <ellipse cx="50" cy="27" rx="25" ry="8" fill="#95a5a6"/>
      
      {/* Rótulo */}
      <rect x="30" y="40" width="40" height="25" rx="3" fill="#ffffff" opacity="0.9"/>
      <text x="50" y="50" textAnchor="middle" fontSize="5" fill="#2c3e50" fontWeight="bold">OMEGA</text>
      <text x="50" y="58" textAnchor="middle" fontSize="6" fill="#2c3e50" fontWeight="bold">3</text>
      
      {/* Símbolo de peixe */}
      <path d="M35 45 Q38 42 42 45 Q38 48 35 45" fill="#3498db" opacity="0.7"/>
      <circle cx="38" cy="45" r="1" fill="#ffffff"/>
      
      {/* Destaque */}
      <rect x="28" y="32" width="4" height="20" fill="#ffffff" opacity="0.3"/>
    </svg>
  ),
};

export default SupplementIcons;
