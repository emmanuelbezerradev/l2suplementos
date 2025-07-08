const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Dados dos produtos (simulando um banco de dados)
const products = [
    {
        id: 1,
        name: "Whey Protein Concentrado 900g - Chocolate",
        brand: "L2 Nutrition",
        category: "proteinas",
        price: 89.90,
        originalPrice: 119.90,
        rating: 4.8,
        reviews: 245,
        image: "https://via.placeholder.com/300x300/f0f2f5/2196F3?text=Whey+Protein",
        isFavorite: false,
        isNew: false,
        freeShipping: true,
        installments: 3,
        description: "Proteína de alta qualidade para o ganho de massa muscular",
        features: ["25g de proteína por dose", "Baixo teor de carboidratos", "Sabor chocolate cremoso"],
        stock: 50,
        servings: 30
    },
    {
        id: 2,
        name: "Creatina Monohidratada 300g - Sem Sabor",
        brand: "L2 Power",
        category: "creatina",
        price: 45.90,
        originalPrice: 59.90,
        rating: 4.9,
        reviews: 189,
        image: "https://via.placeholder.com/300x300/f0f2f5/27ae60?text=Creatina",
        isFavorite: true,
        isNew: false,
        freeShipping: false,
        installments: 2,
        description: "Creatina pura para aumento de força e resistência",
        features: ["100% pura", "Melhora performance", "Sem aditivos"],
        stock: 35,
        servings: 60
    },
    {
        id: 3,
        name: "Pré-Treino Extreme 300g - Frutas Vermelhas",
        brand: "L2 Energy",
        category: "pre-treino",
        price: 79.90,
        originalPrice: null,
        rating: 4.7,
        reviews: 156,
        image: "https://via.placeholder.com/300x300/f0f2f5/e74c3c?text=Pre+Treino",
        isFavorite: false,
        isNew: true,
        freeShipping: true,
        installments: 3,
        description: "Energia e foco máximo para seus treinos",
        features: ["200mg de cafeína", "Beta-alanina", "Citrulina malato"],
        stock: 28,
        servings: 30
    },
    {
        id: 4,
        name: "BCAA 2:1:1 120 Cápsulas",
        brand: "L2 Recovery",
        category: "amino",
        price: 39.90,
        originalPrice: 49.90,
        rating: 4.6,
        reviews: 98,
        image: "https://via.placeholder.com/300x300/f0f2f5/666?text=Produto",
        isFavorite: false,
        isNew: false,
        freeShipping: false,
        installments: 2,
        description: "Aminoácidos essenciais para recuperação muscular",
        features: ["Proporção 2:1:1", "120 cápsulas", "Fácil absorção"],
        stock: 42,
        servings: 120
    },
    {
        id: 5,
        name: "Whey Protein Isolado 900g - Baunilha",
        brand: "L2 Premium",
        category: "proteinas",
        price: 149.90,
        originalPrice: 189.90,
        rating: 4.9,
        reviews: 312,
        image: "https://via.placeholder.com/300x300/f0f2f5/666?text=Produto",
        isFavorite: true,
        isNew: false,
        freeShipping: true,
        installments: 6,
        description: "Proteína isolada de máxima pureza",
        features: ["Proteína isolada", "Zero lactose", "Absorção rápida"],
        stock: 22,
        servings: 30
    },
    {
        id: 6,
        name: "Multivitamínico Completo 60 Cápsulas",
        brand: "L2 Health",
        category: "vitaminas",
        price: 29.90,
        originalPrice: null,
        rating: 4.5,
        reviews: 76,
        image: "https://via.placeholder.com/300x300/f0f2f5/666?text=Produto",
        isFavorite: false,
        isNew: false,
        freeShipping: false,
        installments: 1,
        description: "Vitaminas e minerais essenciais",
        features: ["26 vitaminas e minerais", "Dose diária", "Qualidade farmacêutica"],
        stock: 65,
        servings: 60
    },
    {
        id: 7,
        name: "Queimador de Gordura Thermo 60 Caps",
        brand: "L2 Burn",
        category: "queimadores",
        price: 69.90,
        originalPrice: 89.90,
        rating: 4.4,
        reviews: 134,
        image: "https://via.placeholder.com/300x300/f0f2f5/666?text=Produto",
        isFavorite: false,
        isNew: true,
        freeShipping: true,
        installments: 3,
        description: "Acelerador metabólico natural",
        features: ["Termogênico natural", "Acelera metabolismo", "Sem estimulantes"],
        stock: 18,
        servings: 60
    },
    {
        id: 8,
        name: "Mass Gainer 3kg - Chocolate",
        brand: "L2 Mass",
        category: "massa-muscular",
        price: 129.90,
        originalPrice: 159.90,
        rating: 4.6,
        reviews: 87,
        image: "https://via.placeholder.com/300x300/f0f2f5/666?text=Produto",
        isFavorite: false,
        isNew: false,
        freeShipping: true,
        installments: 5,
        description: "Ganho de peso e massa muscular",
        features: ["50g de proteína", "Carboidratos complexos", "Vitaminas e minerais"],
        stock: 15,
        servings: 20
    }
];

const categories = [
    {
        id: "proteinas",
        name: "Proteínas",
        description: "Whey, Caseína, Albumina e mais",
        image: "/api/placeholder/200/200",
        productCount: 45
    },
    {
        id: "creatina",
        name: "Creatina",
        description: "Aumento de força e massa muscular",
        image: "/api/placeholder/200/200",
        productCount: 12
    },
    {
        id: "pre-treino",
        name: "Pré-Treino",
        description: "Energia e foco para treinos intensos",
        image: "/api/placeholder/200/200",
        productCount: 23
    },
    {
        id: "amino",
        name: "Aminoácidos",
        description: "BCAA, Glutamina e mais",
        image: "/api/placeholder/200/200",
        productCount: 18
    },
    {
        id: "vitaminas",
        name: "Vitaminas",
        description: "Suporte nutricional completo",
        image: "/api/placeholder/200/200",
        productCount: 32
    },
    {
        id: "queimadores",
        name: "Queimadores",
        description: "Acelere seu metabolismo",
        image: "/api/placeholder/200/200",
        productCount: 15
    },
    {
        id: "massa-muscular",
        name: "Massa Muscular",
        description: "Hipercalóricos e Mass Gainers",
        image: "/api/placeholder/200/200",
        productCount: 8
    }
];

// Rotas da API

// Status da API
app.get('/api/status', (req, res) => {
    res.json({ 
        status: 'online', 
        message: 'L2 Suplementos API está funcionando!',
        timestamp: new Date().toISOString()
    });
});

// Listar todos os produtos
app.get('/api/products', (req, res) => {
    const { category, search, limit } = req.query;
    let filteredProducts = [...products];

    // Filtrar por categoria
    if (category && category !== 'all') {
        filteredProducts = filteredProducts.filter(product => 
            product.category === category
        );
    }

    // Filtrar por busca
    if (search) {
        const searchLower = search.toLowerCase();
        filteredProducts = filteredProducts.filter(product =>
            product.name.toLowerCase().includes(searchLower) ||
            product.brand.toLowerCase().includes(searchLower) ||
            product.description.toLowerCase().includes(searchLower)
        );
    }

    // Limitar resultados
    if (limit) {
        filteredProducts = filteredProducts.slice(0, parseInt(limit));
    }

    res.json(filteredProducts);
});

// Obter produto por ID
app.get('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const product = products.find(p => p.id === productId);
    
    if (!product) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    res.json(product);
});

// Listar categorias
app.get('/api/categories', (req, res) => {
    res.json(categories);
});

// Produtos em destaque
app.get('/api/products/featured', (req, res) => {
    const featuredProducts = products.filter(p => p.rating >= 4.8);
    res.json(featuredProducts);
});

// Produtos novos
app.get('/api/products/new', (req, res) => {
    const newProducts = products.filter(p => p.isNew);
    res.json(newProducts);
});

// Produtos em promoção
app.get('/api/products/sale', (req, res) => {
    const saleProducts = products.filter(p => p.originalPrice && p.originalPrice > p.price);
    res.json(saleProducts);
});

// Adicionar produto (Admin)
app.post('/api/products', (req, res) => {
    const newProduct = {
        id: products.length + 1,
        ...req.body,
        stock: parseInt(req.body.stock) || 0,
        servings: parseInt(req.body.servings) || 0
    };
    
    products.push(newProduct);
    res.status(201).json(newProduct);
});

// Atualizar produto (Admin)
app.put('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    products[productIndex] = {
        ...products[productIndex],
        ...req.body,
        id: productId,
        stock: parseInt(req.body.stock) || products[productIndex].stock,
        servings: parseInt(req.body.servings) || products[productIndex].servings
    };
    
    res.json(products[productIndex]);
});

// Deletar produto (Admin)
app.delete('/api/products/:id', (req, res) => {
    const productId = parseInt(req.params.id);
    const productIndex = products.findIndex(p => p.id === productId);
    
    if (productIndex === -1) {
        return res.status(404).json({ error: 'Produto não encontrado' });
    }
    
    products.splice(productIndex, 1);
    res.json({ message: 'Produto deletado com sucesso' });
});

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Algo deu errado!' });
});

// Middleware para rotas não encontradas
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Rota não encontrada' });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando na porta ${PORT}`);
    console.log(`📍 API disponível em: http://localhost:${PORT}/api`);
    console.log(`💊 L2 Suplementos Backend está online!`);
});

module.exports = app;