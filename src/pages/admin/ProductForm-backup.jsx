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
        setFormData({
          name: productToEdit.name || '',
          brand: productToEdit.brand || '',
          category: productToEdit.category || '',
          price: productToEdit.price?.toString() || '',
          originalPrice: productToEdit.originalPrice?.toString() || '',
          description: productToEdit.description || '',
          images: productToEdit.images || [productToEdit.image].filter(Boolean) || [],
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
        setNotification({
          show: true,
          type: 'error',
          title: 'Campos obrigatórios',
          message: 'Por favor, preencha todos os campos obrigatórios (Nome, Marca, Categoria e Preço)'
        });
        setLoading(false);
        return;
      }

      const savedProducts = JSON.parse(localStorage.getItem('adminProducts') || '[]');
      
      if (isEditing) {
        console.log('ProductForm: Editando produto ID:', id);
        
        // Atualizar produto existente
        const productData = { 
          ...formData, 
          id: parseInt(id),
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          image: formData.images[0] || '', // Primeira imagem como principal
          images: formData.images
        };
        
        console.log('ProductForm: Dados do produto editado:', productData);
        
        // Verificar se o produto já está no adminProducts, senão adicionar
        const existingAdminIndex = savedProducts.findIndex(p => p.id === parseInt(id));
        let updatedAdminProducts;
        
        if (existingAdminIndex >= 0) {
          // Produto já existe no adminProducts, atualizar
          updatedAdminProducts = savedProducts.map(product => 
            product.id === parseInt(id) ? productData : product
          );
          console.log('ProductForm: Produto atualizado no adminProducts');
        } else {
          // Produto não existe no adminProducts, adicionar
          updatedAdminProducts = [...savedProducts, productData];
          console.log('ProductForm: Produto adicionado ao adminProducts');
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
          console.log('ProductForm: Produto atualizado na lista principal');
        } else {
          // Produto não existe na lista principal, adicionar
          updatedAllProducts = [...allProducts, productData];
          console.log('ProductForm: Produto adicionado à lista principal');
        }
        
        localStorage.setItem('products', JSON.stringify(updatedAllProducts));
        
        console.log('ProductForm: Produto salvo com sucesso nos dois locais');
        
        setNotification({
          show: true,
          type: 'success',
          title: 'Sucesso!',
          message: 'Produto atualizado com sucesso!'
        });
        
        // Atualizar lista de produtos e navegar
        refreshProducts();
        setTimeout(() => navigate('/admin/produtos'), 1500);
      } else {
        // Criar novo produto
        const newId = Date.now();
        console.log('ProductForm: Criando novo produto com ID:', newId);
        
        const newProduct = { 
          ...formData, 
          id: newId,
          price: parseFloat(formData.price),
          originalPrice: formData.originalPrice ? parseFloat(formData.originalPrice) : null,
          image: formData.images[0] || '', // Primeira imagem como principal
          images: formData.images
        };
        
        console.log('ProductForm: Dados do novo produto:', newProduct);
        
        savedProducts.push(newProduct);
        localStorage.setItem('adminProducts', JSON.stringify(savedProducts));
        
        // Também adicionar na lista principal de produtos
        const allProducts = JSON.parse(localStorage.getItem('products') || '[]');
        allProducts.push(newProduct);
        localStorage.setItem('products', JSON.stringify(allProducts));
        
        console.log('ProductForm: Produto salvo com sucesso');
        
        setNotification({
          show: true,
          type: 'success',
          title: 'Sucesso!',
          message: 'Produto criado com sucesso!'
        });
        
        // Atualizar lista de produtos e navegar
        refreshProducts();
        setTimeout(() => navigate('/admin/produtos'), 1500);
      }
      
      // Navegar de volta para lista de produtos
      navigate('/admin/produtos');
    } catch (error) {
      console.error('Erro ao salvar produto:', error);
      setNotification({
        show: true,
        type: 'error',
        title: 'Erro!',
        message: `Erro ao ${isEditing ? 'atualizar' : 'criar'} produto`
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {isEditing ? 'Editar Produto' : 'Novo Produto'}
              </h1>
              <p className="text-gray-600">
                {isEditing ? 'Edite as informações do produto' : 'Adicione um novo produto ao catálogo'}
              </p>
            </div>
            <Link
              to="/admin/produtos"
              className="text-gray-600 hover:text-gray-800"
            >
              ← Voltar para Produtos
            </Link>
          </div>
        </div>
      </div>

      {/* Form */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Info */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Informações Básicas</h2>
            
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
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Whey Protein Concentrado"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Ex: Growth"
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
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Selecione uma categoria</option>
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="md:col-span-2">
                <MultipleImageUpload
                  value={formData.images}
                  onChange={(images) => setFormData(prev => ({ ...prev, images }))}
                  maxImages={5}
                />
              </div>
            </div>

            <div className="mt-6">
              <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                Descrição
              </label>
              <textarea
                name="description"
                id="description"
                rows={4}
                value={formData.description}
                onChange={handleChange}
                className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Descrição detalhada do produto..."
              />
            </div>
          </div>

          {/* Pricing */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Preços</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="price" className="block text-sm font-medium text-gray-700">
                  Preço Atual (R$) *
                </label>
                <input
                  type="number"
                  name="price"
                  id="price"
                  step="0.01"
                  min="0"
                  required
                  value={formData.price}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="89.90"
                />
              </div>

              <div>
                <label htmlFor="originalPrice" className="block text-sm font-medium text-gray-700">
                  Preço Original (R$)
                  <span className="text-gray-500 text-sm"> - opcional</span>
                </label>
                <input
                  type="number"
                  name="originalPrice"
                  id="originalPrice"
                  step="0.01"
                  min="0"
                  value={formData.originalPrice}
                  onChange={handleChange}
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="109.90"
                />
              </div>
            </div>
          </div>

          {/* Options */}
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-lg font-medium text-gray-900 mb-6">Opções</h2>
            
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

      {/* Notification */}
      <Notification
        show={notification.show}
        type={notification.type}
        title={notification.title}
        message={notification.message}
        onClose={() => setNotification({ ...notification, show: false })}
      />
    </div>
  );
};

export default ProductForm;
