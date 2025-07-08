// Dados simulados de pedidos
export const sampleOrders = [
  {
    id: 1001,
    userId: 2,
    userName: 'João Silva',
    userEmail: 'joao@email.com',
    date: '2024-01-18',
    status: 'delivered',
    total: 179.80,
    items: [
      {
        id: 1,
        name: 'Whey Protein Concentrado',
        brand: 'Growth',
        price: 89.90,
        quantity: 2,
        image: '/src/assets/whey-protein.jpg'
      }
    ],
    address: {
      street: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567'
    },
    payment: {
      method: 'credit_card',
      card: '**** **** **** 1234'
    }
  },
  {
    id: 1002,
    userId: 3,
    userName: 'Maria Santos',
    userEmail: 'maria@email.com',
    date: '2024-01-17',
    status: 'processing',
    total: 125.80,
    items: [
      {
        id: 2,
        name: 'Creatina Monohidratada',
        brand: 'Black Skull',
        price: 45.90,
        quantity: 1,
        image: '/src/assets/creatina.webp'
      },
      {
        id: 3,
        name: 'Pré-Treino Haze',
        brand: 'Growth',
        price: 79.90,
        quantity: 1,
        image: '/src/assets/pre-treino.jpg'
      }
    ],
    address: {
      street: 'Av. Paulista, 456',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01310-100'
    },
    payment: {
      method: 'pix',
      pixKey: 'maria@email.com'
    }
  },
  {
    id: 1003,
    userId: 2,
    userName: 'João Silva',
    userEmail: 'joao@email.com',
    date: '2024-01-15',
    status: 'shipped',
    total: 259.70,
    items: [
      {
        id: 1,
        name: 'Whey Protein Concentrado',
        brand: 'Growth',
        price: 89.90,
        quantity: 1,
        image: '/src/assets/whey-protein.jpg'
      },
      {
        id: 4,
        name: 'BCAA Aminoácidos',
        brand: 'Probiótica',
        price: 69.90,
        quantity: 1,
        image: '/src/assets/probiotica.webp'
      },
      {
        id: 5,
        name: 'Vitamina D3',
        brand: 'Vitafor',
        price: 99.90,
        quantity: 1,
        image: '/src/assets/vitamina-d3.jpg'
      }
    ],
    address: {
      street: 'Rua das Flores, 123',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01234-567'
    },
    payment: {
      method: 'debit_card',
      card: '**** **** **** 5678'
    }
  },
  {
    id: 1004,
    userId: 3,
    userName: 'Maria Santos',
    userEmail: 'maria@email.com',
    date: '2024-01-12',
    status: 'delivered',
    total: 149.80,
    items: [
      {
        id: 6,
        name: 'Queimador de Gordura',
        brand: 'Max Titanium',
        price: 149.80,
        quantity: 1,
        image: '/src/assets/queimador.jpg'
      }
    ],
    address: {
      street: 'Av. Paulista, 456',
      city: 'São Paulo',
      state: 'SP',
      zipCode: '01310-100'
    },
    payment: {
      method: 'credit_card',
      card: '**** **** **** 9012'
    }
  },
  {
    id: 1005,
    userId: 4,
    userName: 'Pedro Costa',
    userEmail: 'pedro@email.com',
    date: '2024-01-08',
    status: 'cancelled',
    total: 89.90,
    items: [
      {
        id: 1,
        name: 'Whey Protein Concentrado',
        brand: 'Growth',
        price: 89.90,
        quantity: 1,
        image: '/src/assets/whey-protein.jpg'
      }
    ],
    address: {
      street: 'Rua do Comércio, 789',
      city: 'Rio de Janeiro',
      state: 'RJ',
      zipCode: '20040-020'
    },
    payment: {
      method: 'boleto',
      boleto: '23793380000000008990'
    }
  }
];

export default sampleOrders;
