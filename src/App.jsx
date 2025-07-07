import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";

// Layout components
import Header from "./components/layout/Header-improved";
import Footer from "./components/layout/Footer";
import ProtectedRoute from "./components/ProtectedRoute";
import ConnectionTest from "./components/ConnectionTest";

// Pages
import Home from "./pages/Home";
import Proteinas from "./pages/Proteinas";
import Creatina from "./pages/Creatina";
import PreTreino from "./pages/PreTreino";
import Vitaminas from "./pages/Vitaminas";
import Queimadores from "./pages/Queimadores";
import MassaMuscular from "./pages/MassaMuscular";
import Aminoacidos from "./pages/Aminoacidos";
import ProductPage from "./pages/ProductPage";
import Login from "./pages/Login";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import AddProduct from "./pages/admin/AddProduct";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Routes>
              {/* Rotas públicas */}
              <Route path="/login" element={<Login />} />
              
              {/* Rotas com layout padrão */}
              <Route path="/*" element={
                <>
                  <Header />
                  <main className="flex-1 pt-4">
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/proteinas" element={<Proteinas />} />
                      <Route path="/creatina" element={<Creatina />} />
                      <Route path="/pre-treino" element={<PreTreino />} />
                      <Route path="/vitaminas" element={<Vitaminas />} />
                      <Route path="/queimadores" element={<Queimadores />} />
                      <Route path="/massa-muscular" element={<MassaMuscular />} />
                      <Route path="/aminoacidos" element={<Aminoacidos />} />
                      <Route path="/produto/:id" element={<ProductPage />} />
                    </Routes>
                  </main>
                  <Footer />
                </>
              } />
              
              {/* Rotas administrativas protegidas */}
              <Route path="/admin" element={
                <ProtectedRoute requireAdmin>
                  <AdminDashboard />
                </ProtectedRoute>
              } />
              
              <Route path="/admin/products/new" element={
                <ProtectedRoute requireAdmin>
                  <AddProduct />
                </ProtectedRoute>
              } />
            </Routes>
            
            {/* Teste de conexão com backend */}
            {import.meta.env.DEV && <ConnectionTest />}
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
