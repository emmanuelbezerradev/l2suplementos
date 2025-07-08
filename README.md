# L2 Suplementos - E-commerce de Suplementos

![L2 Suplementos Logo](./src/assets/logo.png)

## 📋 Sobre o Projeto

L2 Suplementos é um e-commerce moderno e responsivo especializado em suplementos alimentares e nutrição esportiva. O projeto foi desenvolvido com React e Tailwind CSS, oferecendo uma experiência de usuário excepcional com design inspirado nos melhores e-commerces do mercado.

### 🎯 Funcionalidades Principais

- ✅ **Catálogo de Produtos**: Navegação intuitiva por categorias
- ✅ **Carrinho de Compras**: Sistema completo com persistência local
- ✅ **Busca Avançada**: Encontre produtos rapidamente
- ✅ **Favoritos**: Salve produtos para comprar depois
- ✅ **Design Responsivo**: Funciona perfeitamente em todos os dispositivos
- ✅ **Interface Moderna**: Design inspirado nos tons da logo (azul, branco, preto)
- ✅ **Performance Otimizada**: Carregamento rápido e smooth

### 🚀 Tecnologias Utilizadas

- **React 19** - Biblioteca JavaScript para interfaces
- **Vite** - Build tool rápido e moderno
- **Tailwind CSS** - Framework CSS utilitário
- **React Router DOM** - Roteamento para SPA
- **Heroicons** - Ícones SVG otimizados
- **Context API** - Gerenciamento de estado global

## 🛠️ Instalação e Configuração

### Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

### Passos para instalação

1. **Clone o repositório**
```bash
git clone https://github.com/seu-usuario/l2suplementos.git
cd l2suplementos
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Execute o projeto em modo de desenvolvimento**
```bash
npm run dev
# ou
yarn dev
```

4. **Abra o navegador**
Acesse [http://localhost:5173](http://localhost:5173)

## 📁 Estrutura do Projeto

```
l2suplementos/
├── public/
│   ├── favicon.ico
│   └── ...
├── src/
│   ├── components/
│   │   ├── common/          # Componentes reutilizáveis
│   │   │   ├── Logo.jsx
│   │   │   ├── ProductCard.jsx
│   │   │   └── CartSidebar.jsx
│   │   └── layout/          # Componentes de layout
│   │       ├── Header.jsx
│   │       └── Footer.jsx
│   ├── contexts/            # Contextos do React
│   │   └── CartContext.jsx
│   ├── data/               # Dados mock e configurações
│   │   └── products.js
│   ├── pages/              # Páginas da aplicação
│   │   └── Home.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js      # Configuração do Tailwind
├── postcss.config.js       # Configuração do PostCSS
├── package.json
└── README.md
```

## 🎨 Design System

### Paleta de Cores

- **Primary**: #1890ff (Azul da logo)
- **Secondary**: #262626 (Preto/Cinza escuro)
- **Background**: #ffffff (Branco)
- **Accent**: #40a9ff (Azul claro)

### Tipografia

- **Heading**: Poppins (Títulos e destaques)
- **Body**: Inter (Texto corrido)

### Componentes Base

- **Botões**: Primary, Secondary, Outline
- **Cards**: Produto, Categoria
- **Inputs**: Campo de busca, Newsletter
- **Layout**: Header, Footer, Container

## 🔧 Scripts Disponíveis

- `npm run dev` - Inicia o servidor de desenvolvimento
- `npm run build` - Gera a build de produção
- `npm run preview` - Visualiza a build de produção
- `npm run lint` - Executa o linter

## 📱 Funcionalidades Detalhadas

### Sistema de Carrinho

O carrinho utiliza Context API para gerenciamento global de estado e localStorage para persistência:

- Adicionar/remover produtos
- Alterar quantidades
- Calcular totais
- Persistir entre sessões

### Categorias de Produtos

- **Proteínas**: Whey, Caseína, Albumina
- **Creatina**: Monohidratada, CreaPure
- **Pré-Treino**: Estimulantes naturais
- **Vitaminas**: Complexos e suplementos
- **Queimadores**: Termogênicos naturais
- **Massa Muscular**: Hipercalóricos
- **Aminoácidos**: BCAA, Glutamina

### Recursos de UX

- Loading states com skeletons
- Hover effects e transições suaves
- Feedback visual para ações do usuário
- Design mobile-first responsivo

## 🚀 Deploy

### Build para Produção

```bash
npm run build
```

### Deploy na Vercel

1. Conecte seu repositório à Vercel
2. Configure as variáveis de ambiente (se necessário)
3. Deploy automático a cada push

### Deploy no Netlify

1. Conecte seu repositório ao Netlify
2. Configure o comando de build: `npm run build`
3. Configure o diretório de publicação: `dist`

## 🤝 Contribuindo

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Contato

**L2 Suplementos**
- Website: [www.l2suplementos.com](https://www.l2suplementos.com)
- Email: emmanuelbezerra1992@gmail.com
- Telefone: (85) 99985-00344

## 🎯 Roadmap

### Próximas Funcionalidades

- [ ] Sistema de autenticação
- [ ] Página de produto individual
- [ ] Sistema de filtros avançados
- [ ] Checkout completo
- [ ] Painel administrativo
- [ ] Sistema de avaliações
- [ ] Wishlist persistente
- [ ] Comparador de produtos
- [ ] Chat de atendimento
- [ ] Blog de nutrição

### Melhorias Técnicas

- [ ] Testes unitários com Jest
- [ ] Testes E2E com Cypress
- [ ] PWA (Progressive Web App)
- [ ] SEO otimizado
- [ ] Performance optimization
- [ ] Acessibilidade (WCAG)

---

**Desenvolvido com ❤️ para a comunidade fitness**+ Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
