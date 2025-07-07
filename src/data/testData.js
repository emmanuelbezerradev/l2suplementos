// Dados de teste para o desenvolvimento
// Estes dados podem ser usados para criar um usuário admin inicial

export const adminTestUser = {
  email: 'admin@l2suplementos.com',
  password: '123456',
  name: 'Administrador',
  role: 'admin'
};

export const testProducts = [
  {
    name: 'Whey Protein Isolado',
    price: 89.90,
    description: 'Proteína isolada de soro do leite com alta concentração de aminoácidos',
    category: 'Proteínas',
    brand: 'L2 Nutrition',
    stock: 50,
    images: ['/images/whey-protein.jpg']
  },
  {
    name: 'Creatina Monohidratada',
    price: 45.90,
    description: 'Creatina pura para aumento de força e massa muscular',
    category: 'Creatina',
    brand: 'L2 Nutrition',
    stock: 30,
    images: ['/images/creatina.jpg']
  },
  {
    name: 'BCAA 2:1:1',
    price: 39.90,
    description: 'Aminoácidos de cadeia ramificada para recuperação muscular',
    category: 'Aminoácidos',
    brand: 'L2 Nutrition',
    stock: 25,
    images: ['/images/bcaa.jpg']
  }
];

export const testCategories = [
  'Proteínas',
  'Creatina',
  'Pré-treino',
  'Aminoácidos',
  'Vitaminas',
  'Queimadores',
  'Massa Muscular'
];

export default {
  adminTestUser,
  testProducts,
  testCategories
};
