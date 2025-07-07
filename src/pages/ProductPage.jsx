import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import {
  StarIcon,
  HeartIcon,
  ShareIcon,
  ShoppingCartIcon,
  TruckIcon,
  ShieldCheckIcon,
  ClockIcon,
  CheckCircleIcon,
  MinusIcon,
  PlusIcon,
  EyeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline';
import { StarIcon as StarIconSolid, HeartIcon as HeartIconSolid } from '@heroicons/react/24/solid';

const ProductPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [isFavorite, setIsFavorite] = useState(false);
  const [selectedTab, setSelectedTab] = useState('description');
  const [selectedVariant, setSelectedVariant] = useState(0);

  // Dados mockados do produto (normalmente viria de uma API)
  const product = {
    id: 1,
    name: "Creatina Monohidratada Premium 300g",
    brand: "Growth Supplements",
    price: 89.90,
    originalPrice: 120.00,
    discount: 25,
    rating: 4.8,
    reviews: 234,
    inStock: true,
    stockQuantity: 50,
    sku: "GS-CREAT-300",
    images: [
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600",
      "/api/placeholder/600/600"
    ],
    variants: [
      { name: "300g", price: 89.90, originalPrice: 120.00 },
      { name: "500g", price: 139.90, originalPrice: 180.00 },
      { name: "1kg", price: 249.90, originalPrice: 320.00 }
    ],
    description: `
      A Creatina Monohidratada Premium da Growth Supplements é o suplemento ideal para quem busca 
      máxima performance nos treinos. Formulada com creatina pura de alta qualidade, este produto 
      oferece benefícios comprovados para o aumento da força, potência e ganho de massa muscular.
      
      Nossa creatina passa por rigorosos testes de qualidade e pureza, garantindo que você receba 
      apenas o melhor em cada porção. Ideal para atletas e praticantes de atividades físicas que 
      buscam resultados superiores.
    `,
    benefits: [
      "Aumento da força e potência muscular",
      "Melhora do desempenho nos treinos",
      "Acelera a recuperação entre as séries",
      "Contribui para o ganho de massa muscular",
      "Reduz a fadiga durante exercícios intensos",
      "Produto testado e aprovado em laboratório"
    ],
    howToUse: `
      Tome 1 scoop (3g) de creatina com 200ml de água ou suco, preferencialmente após o treino.
      Para melhores resultados, use diariamente por pelo menos 4 semanas consecutivas.
      Pode ser combinada com outros suplementos como whey protein e BCAA.
    `,
    ingredients: "Creatina Monohidratada (100%). NÃO CONTÉM GLÚTEN.",
    nutritionalInfo: {
      servingSize: "3g (1 scoop)",
      servingsPerContainer: "100",
      values: [
        { nutrient: "Creatina Monohidratada", amount: "3g", daily: "*" },
        { nutrient: "Valor Energético", amount: "0 kcal", daily: "0%" },
        { nutrient: "Carboidratos", amount: "0g", daily: "0%" },
        { nutrient: "Proteínas", amount: "0g", daily: "0%" },
        { nutrient: "Gorduras Totais", amount: "0g", daily: "0%" }
      ]
    },
    specifications: {
      "Peso Líquido": "300g",
      "Sabor": "Sem sabor",
      "Marca": "Growth Supplements",
      "Origem": "Brasil",
      "Validade": "24 meses",
      "Registro ANVISA": "123.456.789-0"
    },
    tags: ["Mais Vendido", "Premium", "Testado em Lab"],
    shippingInfo: {
      freeShipping: true,
      estimatedDelivery: "2-5 dias úteis",
      regions: ["Fortaleza", "Região Metropolitana", "Interior do Ceará"]
    }
  };

  const relatedProducts = [
    {
      id: 2,
      name: "BCAA 2:1:1 120 caps",
      brand: "Growth Supplements",
      price: 89.90,
      originalPrice: 115.00,
      image: "/api/placeholder/300/300",
      rating: 4.7,
      discount: 22
    },
    {
      id: 3,
      name: "Whey Protein 900g",
      brand: "Growth Supplements",
      price: 189.90,
      originalPrice: 240.00,
      image: "/api/placeholder/300/300",
      rating: 4.9,
      discount: 21
    },
    {
      id: 4,
      name: "Glutamina 300g",
      brand: "Growth Supplements",
      price: 68.90,
      originalPrice: 85.00,
      image: "/api/placeholder/300/300",
      rating: 4.6,
      discount: 19
    },
    {
      id: 5,
      name: "Pré-Treino 250g",
      brand: "Growth Supplements",
      price: 135.90,
      originalPrice: 170.00,
      image: "/api/placeholder/300/300",
      rating: 4.8,
      discount: 20
    }
  ];

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, i) => (
      <StarIconSolid
        key={i}
        className={`w-5 h-5 ${
          i < Math.floor(rating) ? 'text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  const addToCart = () => {
    // Lógica para adicionar ao carrinho
    console.log(`Adicionando ${quantity} unidades do produto ${product.id} ao carrinho`);
  };

  const buyNow = () => {
    // Lógica para compra direta
    console.log(`Comprando ${quantity} unidades do produto ${product.id}`);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-200">
        <div className="container-custom py-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <button
              onClick={() => navigate(-1)}
              className="flex items-center space-x-1 hover:text-blue-600 transition-colors"
            >
              <ArrowLeftIcon className="w-4 h-4" />
              <span>Voltar</span>
            </button>
            <span>/</span>
            <span>Suplementos</span>
            <span>/</span>
            <span>Creatina</span>
            <span>/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="container-custom py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Galeria de Imagens */}
          <div className="space-y-4">
            {/* Imagem Principal */}
            <div className="relative aspect-square bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <img
                src={product.images[selectedImage]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              
              {/* Badge de Desconto */}
              {product.discount > 0 && (
                <div className="absolute top-4 left-4 bg-gradient-to-r from-red-500 to-red-600 text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                  -{product.discount}%
                </div>
              )}

              {/* Botões de Navegação */}
              <button
                onClick={() => setSelectedImage(selectedImage > 0 ? selectedImage - 1 : product.images.length - 1)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronLeftIcon className="w-6 h-6 text-gray-700" />
              </button>
              <button
                onClick={() => setSelectedImage(selectedImage < product.images.length - 1 ? selectedImage + 1 : 0)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-2 shadow-lg transition-all"
              >
                <ChevronRightIcon className="w-6 h-6 text-gray-700" />
              </button>

              {/* Botões de Ação */}
              <div className="absolute top-4 right-4 flex flex-col space-y-2">
                <button
                  onClick={() => setIsFavorite(!isFavorite)}
                  className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all"
                >
                  {isFavorite ? (
                    <HeartIconSolid className="w-6 h-6 text-red-500" />
                  ) : (
                    <HeartIcon className="w-6 h-6 text-gray-700" />
                  )}
                </button>
                <button className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all">
                  <ShareIcon className="w-6 h-6 text-gray-700" />
                </button>
                <button className="p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transition-all">
                  <EyeIcon className="w-6 h-6 text-gray-700" />
                </button>
              </div>
            </div>

            {/* Thumbnails */}
            <div className="flex space-x-3 overflow-x-auto pb-2">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImage(index)}
                  className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                    selectedImage === index
                      ? 'border-blue-500 shadow-lg'
                      : 'border-gray-200 hover:border-gray-300'
                  }`}
                >
                  <img
                    src={image}
                    alt={`${product.name} ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Informações do Produto */}
          <div className="space-y-6">
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {product.tags.map((tag, index) => (
                <span
                  key={index}
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${
                    tag === 'Mais Vendido' ? 'bg-green-100 text-green-700' :
                    tag === 'Premium' ? 'bg-purple-100 text-purple-700' :
                    'bg-blue-100 text-blue-700'
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Marca e Nome */}
            <div>
              <div className="text-sm font-medium text-gray-500 uppercase tracking-wide mb-2">
                {product.brand}
              </div>
              <h1 className="text-3xl lg:text-4xl font-black text-gray-900 leading-tight">
                {product.name}
              </h1>
              <div className="text-sm text-gray-500 mt-2">
                SKU: {product.sku}
              </div>
            </div>

            {/* Avaliações */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                {renderStars(product.rating)}
              </div>
              <span className="text-lg font-semibold text-gray-900">
                {product.rating}
              </span>
              <span className="text-gray-600">
                ({product.reviews} avaliações)
              </span>
              <button className="text-blue-600 hover:text-blue-700 font-medium">
                Ver todas as avaliações
              </button>
            </div>

            {/* Preços */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 border border-blue-100">
              <div className="flex items-center space-x-4 mb-4">
                <span className="text-4xl font-black text-gray-900">
                  R$ {product.variants[selectedVariant].price.toFixed(2)}
                </span>
                {product.variants[selectedVariant].originalPrice > product.variants[selectedVariant].price && (
                  <span className="text-2xl text-gray-500 line-through">
                    R$ {product.variants[selectedVariant].originalPrice.toFixed(2)}
                  </span>
                )}
              </div>
              <div className="text-green-600 font-semibold text-lg">
                Economia de R$ {(product.variants[selectedVariant].originalPrice - product.variants[selectedVariant].price).toFixed(2)}
              </div>
              <div className="text-sm text-gray-600 mt-2">
                Em até 12x de R$ {(product.variants[selectedVariant].price / 12).toFixed(2)} sem juros
              </div>
            </div>

            {/* Variantes */}
            <div>
              <h3 className="font-semibold text-lg mb-3">Escolha o tamanho:</h3>
              <div className="grid grid-cols-3 gap-3">
                {product.variants.map((variant, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedVariant(index)}
                    className={`p-4 rounded-xl border-2 transition-all text-center ${
                      selectedVariant === index
                        ? 'border-blue-500 bg-blue-50 text-blue-700'
                        : 'border-gray-200 hover:border-gray-300 bg-white'
                    }`}
                  >
                    <div className="font-semibold">{variant.name}</div>
                    <div className="text-sm text-gray-600">
                      R$ {variant.price.toFixed(2)}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Quantidade e Status */}
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-semibold text-lg mb-3">Quantidade:</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                  >
                    <MinusIcon className="w-5 h-5" />
                  </button>
                  <span className="text-xl font-semibold px-4 py-2 bg-gray-50 rounded-lg min-w-[60px] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(Math.min(product.stockQuantity, quantity + 1))}
                    className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50"
                  >
                    <PlusIcon className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="text-right">
                <div className={`flex items-center space-x-2 ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                  <CheckCircleIcon className="w-5 h-5" />
                  <span className="font-semibold">
                    {product.inStock ? `${product.stockQuantity} em estoque` : 'Fora de estoque'}
                  </span>
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  Últimas unidades!
                </div>
              </div>
            </div>

            {/* Botões de Ação */}
            <div className="space-y-4">
              <button
                onClick={buyNow}
                disabled={!product.inStock}
                className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-200 transform hover:scale-105 disabled:hover:scale-100 shadow-lg"
              >
                🚀 COMPRAR AGORA
              </button>
              
              <button
                onClick={addToCart}
                disabled={!product.inStock}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-bold py-4 px-6 rounded-xl text-lg transition-all duration-200 flex items-center justify-center space-x-3 shadow-lg"
              >
                <ShoppingCartIcon className="w-6 h-6" />
                <span>ADICIONAR AO CARRINHO</span>
              </button>
            </div>

            {/* Informações de Entrega */}
            <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
              <h3 className="font-semibold text-lg">Informações de Entrega</h3>
              
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <TruckIcon className="w-6 h-6 text-green-600" />
                  <div>
                    <div className="font-semibold text-green-600">Frete Grátis</div>
                    <div className="text-sm text-gray-600">Para compras acima de R$ 199</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <ClockIcon className="w-6 h-6 text-blue-600" />
                  <div>
                    <div className="font-semibold">Entrega Rápida</div>
                    <div className="text-sm text-gray-600">{product.shippingInfo.estimatedDelivery}</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3">
                  <ShieldCheckIcon className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-semibold">Compra Segura</div>
                    <div className="text-sm text-gray-600">Proteção total do seu pedido</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Abas de Informações */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-16">
          {/* Navegação das Abas */}
          <div className="border-b border-gray-200">
            <div className="flex space-x-0">
              {[
                { id: 'description', label: 'Descrição' },
                { id: 'benefits', label: 'Benefícios' },
                { id: 'howToUse', label: 'Como Usar' },
                { id: 'nutrition', label: 'Informações Nutricionais' },
                { id: 'specifications', label: 'Especificações' },
                { id: 'reviews', label: 'Avaliações' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`px-6 py-4 font-semibold transition-all ${
                    selectedTab === tab.id
                      ? 'text-blue-600 border-b-2 border-blue-600 bg-blue-50'
                      : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Conteúdo das Abas */}
          <div className="p-8">
            {selectedTab === 'description' && (
              <div className="prose max-w-none">
                <h3 className="text-2xl font-bold mb-4">Descrição do Produto</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.description}
                </p>
              </div>
            )}

            {selectedTab === 'benefits' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Principais Benefícios</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircleIcon className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'howToUse' && (
              <div>
                <h3 className="text-2xl font-bold mb-4">Como Usar</h3>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {product.howToUse}
                </p>
                <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <h4 className="font-semibold text-yellow-800 mb-2">⚠️ Importante:</h4>
                  <p className="text-yellow-700 text-sm">
                    Consulte um profissional de saúde antes de iniciar o uso de qualquer suplemento.
                    Mantenha fora do alcance de crianças.
                  </p>
                </div>
              </div>
            )}

            {selectedTab === 'nutrition' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Informações Nutricionais</h3>
                <div className="bg-gray-50 rounded-lg p-6">
                  <div className="mb-4">
                    <div className="font-semibold">Porção: {product.nutritionalInfo.servingSize}</div>
                    <div className="text-gray-600">Porções por embalagem: {product.nutritionalInfo.servingsPerContainer}</div>
                  </div>
                  
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse">
                      <thead>
                        <tr className="border-b-2 border-gray-300">
                          <th className="text-left py-2">Nutriente</th>
                          <th className="text-right py-2">Quantidade por porção</th>
                          <th className="text-right py-2">% VD*</th>
                        </tr>
                      </thead>
                      <tbody>
                        {product.nutritionalInfo.values.map((item, index) => (
                          <tr key={index} className="border-b border-gray-200">
                            <td className="py-2">{item.nutrient}</td>
                            <td className="text-right py-2">{item.amount}</td>
                            <td className="text-right py-2">{item.daily}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                  
                  <div className="mt-4 text-sm text-gray-600">
                    * % Valores Diários com base em uma dieta de 2.000 kcal ou 8.400 kJ. 
                    Seus valores diários podem ser maiores ou menores dependendo de suas necessidades energéticas.
                  </div>
                </div>
                
                <div className="mt-6">
                  <h4 className="font-semibold mb-2">Ingredientes:</h4>
                  <p className="text-gray-700">{product.ingredients}</p>
                </div>
              </div>
            )}

            {selectedTab === 'specifications' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Especificações Técnicas</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between items-center py-3 border-b border-gray-100">
                      <span className="font-semibold text-gray-700">{key}:</span>
                      <span className="text-gray-900">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedTab === 'reviews' && (
              <div>
                <h3 className="text-2xl font-bold mb-6">Avaliações dos Clientes</h3>
                <div className="space-y-6">
                  {/* Resumo das avaliações */}
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center space-x-6">
                      <div className="text-center">
                        <div className="text-4xl font-bold text-gray-900">{product.rating}</div>
                        <div className="flex items-center justify-center space-x-1 mt-1">
                          {renderStars(product.rating)}
                        </div>
                        <div className="text-sm text-gray-600 mt-1">{product.reviews} avaliações</div>
                      </div>
                      
                      <div className="flex-1 space-y-2">
                        {[5, 4, 3, 2, 1].map((stars) => (
                          <div key={stars} className="flex items-center space-x-2">
                            <span className="text-sm w-8">{stars}★</span>
                            <div className="flex-1 bg-gray-200 rounded-full h-2">
                              <div 
                                className="bg-yellow-400 h-2 rounded-full" 
                                style={{ width: `${Math.random() * 80 + 10}%` }}
                              ></div>
                            </div>
                            <span className="text-sm text-gray-600 w-12">
                              {Math.floor(Math.random() * 50 + 10)}%
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Avaliações individuais */}
                  <div className="space-y-4">
                    {[1, 2, 3].map((review) => (
                      <div key={review} className="border border-gray-200 rounded-lg p-6">
                        <div className="flex items-start justify-between mb-3">
                          <div>
                            <div className="font-semibold">João Silva</div>
                            <div className="flex items-center space-x-1">
                              {renderStars(5)}
                            </div>
                          </div>
                          <div className="text-sm text-gray-500">
                            2 dias atrás
                          </div>
                        </div>
                        <p className="text-gray-700">
                          Excelente produto! Notei diferença na força e resistência após algumas semanas de uso. 
                          A qualidade é muito boa e o preço é justo. Recomendo!
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Produtos Relacionados */}
        <div>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Produtos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((relatedProduct) => (
              <div key={relatedProduct.id} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100 hover:border-blue-200">
                {/* Badge de desconto */}
                {relatedProduct.discount > 0 && (
                  <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-500 to-red-600 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
                    -{relatedProduct.discount}%
                  </div>
                )}

                {/* Imagem */}
                <div className="relative h-48 bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center">
                  <img
                    src={relatedProduct.image}
                    alt={relatedProduct.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>

                {/* Conteúdo */}
                <div className="p-4">
                  <div className="mb-2">
                    <span className="text-xs font-medium text-gray-500 uppercase tracking-wide">
                      {relatedProduct.brand}
                    </span>
                  </div>
                  
                  <h3 className="font-bold text-gray-900 mb-2 line-clamp-2">
                    {relatedProduct.name}
                  </h3>

                  {/* Avaliação */}
                  <div className="flex items-center space-x-1 mb-3">
                    {renderStars(relatedProduct.rating)}
                    <span className="text-sm text-gray-600 ml-1">
                      {relatedProduct.rating}
                    </span>
                  </div>

                  {/* Preço */}
                  <div className="flex items-center space-x-2 mb-4">
                    <span className="text-xl font-bold text-gray-900">
                      R$ {relatedProduct.price.toFixed(2)}
                    </span>
                    {relatedProduct.originalPrice > relatedProduct.price && (
                      <span className="text-sm text-gray-500 line-through">
                        R$ {relatedProduct.originalPrice.toFixed(2)}
                      </span>
                    )}
                  </div>

                  {/* Botão */}
                  <button className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-bold rounded-lg transition-all duration-200 transform hover:scale-105">
                    Ver Produto
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
