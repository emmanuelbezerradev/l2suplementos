import React from 'react';
import { Link } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiStar } from 'react-icons/fi';

const ProductCard = ({ product }) => {
  const {
    id,
    name,
    price,
    originalPrice,
    image,
    rating,
    reviews,
    brand,
    isNew,
    isBestSeller
  } = product;

  const discountPercentage = originalPrice ? Math.round(((originalPrice - price) / originalPrice) * 100) : 0;

  return (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-1 group overflow-hidden animate-glow">
      {/* Product Image */}
      <div className="relative overflow-hidden">
        <Link to={`/produto/${id}`}>
          <img
            src={image}
            alt={name}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700 filter group-hover:brightness-110"
          />
        </Link>
        
        {/* Efeito de brilho */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-shimmer"></div>
        
        {/* Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          {isNew && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              NOVO
            </span>
          )}
          {isBestSeller && (
            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              BEST SELLER
            </span>
          )}
          {discountPercentage > 0 && (
            <span className="bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold">
              -{discountPercentage}%
            </span>
          )}
        </div>

        {/* Quick Actions */}
        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
          <button className="bg-white p-2 rounded-full shadow-lg hover:bg-red-50 hover:text-red-500 transition-all duration-300 transform hover:scale-110 animate-breathe">
            <FiHeart className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-6">
        {/* Brand */}
        {brand && (
          <p className="text-sm text-gray-500 mb-2">{brand}</p>
        )}

        {/* Product Name */}
        <Link to={`/produto/${id}`}>
          <h3 className="text-lg font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors line-clamp-2">
            {name}
          </h3>
        </Link>

        {/* Rating */}
        {rating && (
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1">
              {[...Array(5)].map((_, i) => (
                <FiStar
                  key={i}
                  className={`w-4 h-4 ${
                    i < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-500">({reviews} avaliações)</span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2 mb-4">
          <span className="text-2xl font-bold text-blue-600">
            R$ {price.toFixed(2).replace('.', ',')}
          </span>
          {originalPrice && originalPrice > price && (
            <span className="text-sm text-gray-500 line-through">
              R$ {originalPrice.toFixed(2).replace('.', ',')}
            </span>
          )}
        </div>

        {/* Add to Cart Button */}
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold py-3 px-6 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 hover:shadow-xl flex items-center justify-center gap-2 group animate-glow">
          <FiShoppingCart className="w-5 h-5 group-hover:animate-bounce" />
          <span className="animate-shimmer">ADICIONAR AO CARRINHO</span>
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
