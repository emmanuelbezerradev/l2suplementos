import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  HeartIcon,
  ShoppingCartIcon,
  EyeIcon,
  StarIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon as HeartIconSolid } from "@heroicons/react/24/solid";

const ProductCard = ({
  product,
  onQuickView,
  onAddToCart,
  onToggleFavorite,
}) => {
  const navigate = useNavigate();
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(product.isFavorite || false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Usar múltiplas imagens se disponível, senão usar imagem única
  const images = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  const currentImage = images[currentImageIndex];
  const hasMultipleImages = images.length > 1;

  const handleToggleFavorite = () => {
    setIsFavorite(!isFavorite);
    onToggleFavorite && onToggleFavorite(product.id);
  };

  const handleAddToCart = () => {
    onAddToCart && onAddToCart(product);
  };

  const handleQuickView = () => {
    onQuickView && onQuickView(product);
  };

  const handleProductClick = () => {
    navigate(`/produto/${product.id}`);
  };

  const calculateDiscount = () => {
    if (product.originalPrice && product.price) {
      return Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      );
    }
    return 0;
  };

  const discountPercentage = calculateDiscount();

  return (
    <div
      className="card group relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge de desconto */}
      {discountPercentage > 0 && (
        <div className="absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
          -{discountPercentage}%
        </div>
      )}

      {/* Badge de novo produto */}
      {product.isNew && (
        <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-bold z-10">
          NOVO
        </div>
      )}

      {/* Imagem do produto */}
      <div className="relative overflow-hidden cursor-pointer" onClick={handleProductClick}>
        <img
          src={currentImage || "/api/placeholder/280/280"}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Indicadores de Múltiplas Imagens */}
        {hasMultipleImages && (
          <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-1">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  index === currentImageIndex
                    ? 'bg-white scale-125'
                    : 'bg-white/60 hover:bg-white/80'
                }`}
              />
            ))}
          </div>
        )}

        {/* Overlay com ações */}
        <div
          className={`absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center space-x-2 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={handleQuickView}
            className="bg-white text-gray-800 p-2 rounded-full hover:bg-primary-500 hover:text-white transition-colors"
            title="Visualização rápida"
          >
            <EyeIcon className="w-5 h-5" />
          </button>

          <button
            onClick={handleToggleFavorite}
            className="bg-white text-gray-800 p-2 rounded-full hover:bg-red-500 hover:text-white transition-colors"
            title={
              isFavorite ? "Remover dos favoritos" : "Adicionar aos favoritos"
            }
          >
            {isFavorite ? (
              <HeartIconSolid className="w-5 h-5 text-red-500" />
            ) : (
              <HeartIcon className="w-5 h-5" />
            )}
          </button>

          <button
            onClick={handleAddToCart}
            className="bg-primary-500 text-white p-2 rounded-full hover:bg-primary-600 transition-colors"
            title="Adicionar ao carrinho"
          >
            <ShoppingCartIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Informações do produto */}
      <div className="p-4">
        {/* Marca */}
        {product.brand && (
          <p className="text-sm text-gray-500 mb-1">{product.brand}</p>
        )}

        {/* Nome do produto */}
        <h3 
          className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-primary-600 transition-colors cursor-pointer"
          onClick={handleProductClick}
        >
          {product.name}
        </h3>

        {/* Avaliação */}
        <div className="flex items-center mb-2">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <StarIcon
                key={i}
                className={`w-4 h-4 ${
                  i < Math.floor(product.rating || 0)
                    ? "text-yellow-400 fill-current"
                    : "text-gray-300"
                }`}
              />
            ))}
          </div>
          <span className="text-sm text-gray-500 ml-1">
            ({product.reviews || 0})
          </span>
        </div>

        {/* Preços */}
        <div className="mb-3">
          {product.originalPrice && product.originalPrice !== product.price && (
            <p className="text-sm text-gray-400 line-through">
              R$ {product.originalPrice.toFixed(2).replace(".", ",")}
            </p>
          )}
          <p className="text-xl font-bold text-primary-600">
            R$ {product.price.toFixed(2).replace(".", ",")}
          </p>
          {product.installments && (
            <p className="text-sm text-gray-500">
              ou {product.installments}x de R${" "}
              {(product.price / product.installments)
                .toFixed(2)
                .replace(".", ",")}
            </p>
          )}
        </div>

        {/* Botão de adicionar ao carrinho */}
        <button
          onClick={handleAddToCart}
          className="w-full btn-primary text-sm py-2 group-hover:bg-primary-600"
        >
          Adicionar ao Carrinho
        </button>

        {/* Informações extras */}
        {product.freeShipping && (
          <p className="text-green-600 text-xs mt-2 flex items-center">
            <span className="mr-1">🚚</span>
            Frete grátis
          </p>
        )}
      </div>
    </div>
  );
};

// Componente de skeleton para loading
export const ProductCardSkeleton = () => {
  return (
    <div className="card animate-pulse">
      <div className="bg-gray-300 h-64 w-full"></div>
      <div className="p-4">
        <div className="h-4 bg-gray-300 rounded mb-2 w-1/2"></div>
        <div className="h-6 bg-gray-300 rounded mb-2"></div>
        <div className="h-4 bg-gray-300 rounded mb-2 w-3/4"></div>
        <div className="h-6 bg-gray-300 rounded mb-3 w-1/3"></div>
        <div className="h-10 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default ProductCard;
