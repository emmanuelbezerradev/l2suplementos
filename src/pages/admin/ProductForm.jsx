import React, { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import MultipleImageUpload from '../../components/common/MultipleImageUpload';
import { useProducts } from '../../hooks/useProducts';
import { showToast } from '../../utils/toastUtils';

const ProductForm = () => {
  const navigate = useNavigate();
  const { id } = useParams(); // Para pegar o ID da URL quando editando
  const { products, refreshProducts } = useProducts();
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    brand: '',
    category: '',
    price: '',
    originalPrice: '',
    description: '',
    images: [],
    isNew: false,
    isFeatured: false
  });

  const categories = [
    { value: 'proteinas', label: 'Proteínas' },
    { value: 'creatina', label: 'Creatina' },
    { value: 'pre-treino', label: 'Pré-treino' },
    { value: 'aminoacidos', label: 'Aminoácidos' },
    { value: 'vitaminas', label: 'Vitaminas' },
    { value: 'queimadores', label: 'Queimadores' },
    { value: 'massa-muscular', label: 'Massa Muscular' }
  ];

  // Verificar se está editando e carregar dados do produto
  useEffect(() => {
    if (id && products.length > 0) {
      const productToEdit = products.find(p => p.id === parseInt(id));
      if (productToEdit) {
        setIsEditing(true);
        
        // Garantir que images sempre seja um array
        let productImages = [];
        if (productToEdit.images && Array.isArray(productToEdit.images)) {
          productImages = [...productToEdit.images];
        } else if (productToEdit.image) {
          productImages = [productToEdit.image];
        }
        
        setFormData({
          name: productToEdit.name || '',
          brand: productToEdit.brand || '',
          category: productToEdit.category || '',
          price: productToEdit.price?.toString() || '',
          originalPrice: productToEdit.originalPrice?.toString() || '',
          description: productToEdit.description || '',
          images: productImages,
          isNew: productToEdit.isNew || false,
          isFeatured: productToEdit.isFeatured || false
        });
      }
    }
  }, [id, products]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Validar se todos os campos obrigatórios estão preenchidos
      if (!formData.name || !formData.brand || !formData.category || !formData.price) {
        showToast.error('Campos obrigatórios', 'Por favor, preencha todos os campos obrigatórios (Nome, Marca, Categoria e Preço)');
        setLoading(false);
        return;
      }

      const savedProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
      
      if (isEditing) {
        // Atualizar produto existente
        const productData = { 
          ...formData, 
          id: parseInt(id),
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          image: formData.images[0] || '', // Primeira imagem como principal
          images: formData.images
        };
        
        // Verificar se o produto já está no adminProducts, senão adicionar
        const existingAdminIndex = savedProducts.findIndex(p => p.id === parseInt(id));
        let updatedAdminProducts;
        
        if (existingAdminIndex >= 0) {
          // Produto já existe no adminProducts, atualizar
          updatedAdminProducts = savedProducts.map(product => 
            product.id === parseInt(id) ? productData : product
          );
        } else {
          // Produto não existe no adminProducts, adicionar
          updatedAdminProducts = [...savedProducts, productData];
        }
        
        localStorage.setItem('adminProducts', JSON.stringify(updatedAdminProducts));
        
        // Também atualizar na lista principal de produtos
        const allProducts = JSON.parse(localStorage.getItem('products') || '[]');
        const existingMainIndex = allProducts.findIndex(p => p.id === parseInt(id));
        let updatedAllProducts;
        
        if (existingMainIndex >= 0) {
          // Produto existe na lista principal, atualizar
          updatedAllProducts = allProducts.map(product => 
            product.id === parseInt(id) ? productData : product
          );
        } else {
          // Produto não existe na lista principal, adicionar
          updatedAllProducts = [...allProducts, productData];
        }
        
        localStorage.setItem('products', JSON.stringify(updatedAllProducts));
        
        showToast.success('Produto Atualizado!', 'O produto foi atualizado com sucesso.');
        
        // Atualizar lista de produtos e navegar
        refreshProducts();
        setTimeout(() => navigate('/admin/produtos'), 1500);
      } else {
        // Criar novo produto
        const newId = Date.now();
        
        const newProduct = { 
          ...formData, 
          id: newId,
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          image: formData.images[0] || '', // Primeira imagem como principal
          images: formData.images
        };
        
        savedProducts.push(newProduct);
        localStorage.setItem('adminProducts', JSON.stringify(savedProducts));
        
        // Também adicionar na lista principal de produtos
        const allProducts = JSON.parse(localStorage.getItem('products') || '[]');
        allProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(allProducts));
        
        showToast.success('Produto Criado!', 'O produto foi criado com sucesso.');
        
        // Atualizar lista de produtos e navegar
        refreshProducts();
        setTimeout(() => navigate('/admin/produtos'), 1500);
      }
      
      // Navegar de volta para lista de produtos
      navigate('/admin/produtos');
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      showToast.error('Erro!', `Erro ao ${isEditing ? 'atualizar' : 'criar'} produto`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">
                  {isEditing ? 'Editar Produto' : 'Novo Produto'}
                </h1>
                <p className="mt-1 text-sm text-gray-600">
                  {isEditing ? 'Edite as informações do produto' : 'Preencha as informações do novo produto'}
                </p>
              </div>
              <Link
                to="/admin/produtos"
                className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md text-sm font-medium"
              >
                ← Voltar
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Informações Básicas */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Informações Básicas</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                  Nome do Produto *
                </label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Whey Protein Isolado"
                />
              </div>

              <div>
                <label htmlFor="brand" className="block text-sm font-medium text-gray-700">
                  Marca *
                </label>
                <input
                  type="text"
                  name="brand"
                  id="brand"
                  required
                  value={formData.brand}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Optimum Nutrition"
                />
              </div>

              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                  Categoria *
                </label>
                <select
                  name="category"
                  id="category"
                  required
                  value={formData.category}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Imagens */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Imagens do Produto</h3>
            <MultipleImageUpload
              images={formData.images}
              onImagesChange={(images) => setFormData(prev => ({ ...prev, images }))}
              maxImages={5}
            />
            <div className="mt-4 p-4 bg-blue-50 rounded-md">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-blue-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-blue-700">
                    <strong>Dica:</strong> Arraste as imagens para reordená-las. A primeira imagem será exibida como principal na loja.
                  </p>
                  <ul className="mt-2 text-sm text-blue-600 list-disc list-inside">
                    <li>A primeira imagem será a principal na loja</li>
                    <li>Você pode adicionar até 5 imagens por produto</li>
                    <li>Formatos aceitos: PNG, JPG, GIF (máx 5MB cada)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Descrição */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Descrição</h3>
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descrição do Produto
              </label>
              <textarea
                name="description"
                id="description"
                rows={6}
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                placeholder="Descreva os benefícios, ingredientes, modo de uso, etc."
              />
            </div>
          </div>

          {/* Preços */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Preços</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Preço Atual (R$) *
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  required
                  step="0.01"
                  min="0"
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                />
              </div>

              <div>
                <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">
                  Preço Original (R$) - opcional
                </label>
                <input
                  type="number"
                  name="originalPrice"
                  id="originalPrice"
                  step="0.01"
                  min="0"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="0.00"
                />
                <p className="mt-1 text-sm text-gray-500">
                  Se preenchido, será mostrado como preço riscado para indicar desconto
                </p>
              </div>
            </div>
          </div>

          {/* Opções */}
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-lg font-medium text-gray-900 mb-6">Opções</h3>
            
            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  id="isNew"
                  name="isNew"
                  type="checkbox"
                  checked={formData.isNew}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isNew" className="ml-2 block text-sm text-gray-900">
                  Produto novo (aparecerá com badge "NOVO")
                </label>
              </div>

              <div className="flex items-center">
                <input
                  id="isFeatured"
                  name="isFeatured"
                  type="checkbox"
                  checked={formData.isFeatured}
                  onChange={handleChange}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="isFeatured" className="ml-2 block text-sm text-gray-900">
                  Produto em destaque (aparecerá na página inicial)
                </label>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end space-x-4">
            <Link
              to="/admin/produtos"
              className="px-6 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
            >
              Cancelar
            </Link>
            <button
              type="submit"
              disabled={loading}
              className={`px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 ${
                loading ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {loading 
                ? (isEditing ? 'Atualizando...' : 'Salvando...') 
                : (isEditing ? 'Atualizar Produto' : 'Salvar Produto')
              }
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductForm;
