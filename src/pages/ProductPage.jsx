import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProducts } from '../hooks/useProducts';
import { useCart } from '../contexts/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, loading, refreshProducts } = useProducts();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  // Forçar refresh dos produtos quando a página carrega
  useEffect(() => {
    refreshProducts();
  }, [refreshProducts]);

  // Escutar mudanças no localStorage para recarregar produtos (apenas uma vez)
  useEffect(() => {
    const handleStorageChange = () => {
      refreshProducts();
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [refreshProducts]);

  useEffect(() => {
    if (products.length > 0 && id) {
      const foundProduct = products.find(p => p.id === parseInt(id));
      setProduct(foundProduct);
      setSelectedImage(0); // Reset da imagem selecionada
    }
  }, [products, id]);

  const handleAddToCart = () => {
    if (product) {
      for (let i = 0; i < quantity; i++) {
        addToCart(product);
      }
    }
  };

  const handleBuyNow = () => {
    handleAddToCart();
    navigate('/carrinho');
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <span className="ml-3 text-gray-600">Carregando produto...</span>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col justify-center items-center">
        <h1 className="text-2xl font-bold text-gray-800 mb-4">Produto não encontrado</h1>
        <p className="text-gray-600 mb-6">O produto que você procura não existe ou foi removido.</p>
        <button
          onClick={() => navigate('/')}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Voltar à página inicial
        </button>
      </div>
    );
  }

  // Usar múltiplas imagens se disponível, senão usar imagem única
  const productImages = product.images && product.images.length > 0 
    ? product.images 
    : [product.image];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="text-sm text-gray-600 mb-6">
          <span 
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate('/')}
          >
            Início
          </span>
          <span className="mx-2">/</span>
          <span 
            className="hover:text-blue-600 cursor-pointer"
            onClick={() => navigate(`/${product.category}`)}
          >
            {product.category}
          </span>
          <span className="mx-2">/</span>
          <span className="text-gray-800">{product.name}</span>
        </nav>

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
            {/* Imagens do produto */}
            <div>
              <div className="mb-4">
                <img
                  src={productImages[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 object-contain rounded-lg bg-white border"
                  onError={(e) => {
                    e.target.src = '/src/assets/product-placeholder.jpg';
                  }}
                />
              </div>
              {productImages.length > 1 && (
                <div className="flex space-x-2 overflow-x-auto">
                  {productImages.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 transition-all ${
                        selectedImage === index ? 'border-blue-600 ring-2 ring-blue-200' : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <img
                        src={img}
                        alt={`${product.name} ${index + 1}`}
                        className="w-full h-full object-contain bg-white"
                        onError={(e) => {
                          e.target.src = '/src/assets/product-placeholder.jpg';
                        }}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Informações do produto */}
            <div>
              <div className="mb-4">
                <h1 className="text-3xl font-bold text-gray-800 mb-2">{product.name}</h1>
                <p className="text-lg text-gray-600">Marca: {product.brand}</p>
              </div>

              {/* Avaliações */}
              <div className="flex items-center mb-6">
                <div className="flex text-yellow-400 mr-2">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className={i < Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-300'}>
                      ⭐
                    </span>
                  ))}
                </div>
                <span className="text-gray-600">
                  {product.rating} ({product.reviews} avaliações)
                </span>
              </div>

              {/* Preços */}
              <div className="mb-6">
                {product.originalPrice && (
                  <span className="text-lg text-gray-500 line-through mr-2">
                    R$ {product.originalPrice.toFixed(2)}
                  </span>
                )}
                <span className="text-3xl font-bold text-green-600">
                  R$ {product.price.toFixed(2)}
                </span>
                {product.originalPrice && (
                  <div className="mt-2">
                    <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
                      Economize R$ {(product.originalPrice - product.price).toFixed(2)}
                    </span>
                  </div>
                )}
              </div>

              {/* Descrição */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold mb-2">Descrição</h3>
                <p className="text-gray-700">{product.description}</p>
              </div>

              {/* Quantidade e botões */}
              <div className="mb-6">
                <div className="flex items-center space-x-4 mb-4">
                  <label className="text-gray-700 font-medium">Quantidade:</label>
                  <div className="flex items-center border border-gray-300 rounded">
                    <button
                      onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                      className="px-3 py-1 hover:bg-gray-100 disabled:opacity-50"
                      disabled={quantity <= 1}
                    >
                      -
                    </button>
                    <span className="px-4 py-1 border-x border-gray-300 min-w-[50px] text-center">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity(quantity + 1)}
                      className="px-3 py-1 hover:bg-gray-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex space-x-4">
                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Adicionar ao Carrinho
                  </button>
                  <button
                    onClick={handleBuyNow}
                    className="flex-1 bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-medium"
                  >
                    Comprar Agora
                  </button>
                </div>
              </div>

              {/* Badges */}
              <div className="flex space-x-2">
                {product.isNew && (
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    Novo
                  </span>
                )}
                {product.isFeatured && (
                  <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm">
                    Destaque
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
