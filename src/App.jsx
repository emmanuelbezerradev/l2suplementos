import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext";
import { AuthProvider } from "./contexts/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import AuthDebugger from "./components/debug/AuthDebugger";
import ToastContainer from "./components/common/ToastContainer";

// Layout components
import Header from "./components/layout/Header-improved";
import Footer from "./components/layout/Footer";

// Pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Proteinas from "./pages/Proteinas";
import Creatina from "./pages/Creatina";
import PreTreino from "./pages/PreTreino";
import Aminoacidos from "./pages/Aminoacidos";
import Vitaminas from "./pages/Vitaminas";
import Queimadores from "./pages/Queimadores";
import MassaMuscular from "./pages/MassaMuscular";
import ProductPage from "./pages/ProductPage";

// Admin Pages
import AdminDashboard from "./pages/admin/AdminDashboard";
import ProductManagement from "./pages/admin/ProductManagement";
import ProductForm from "./pages/admin/ProductForm";
import UserManagement from "./pages/admin/UserManagement";
import OrderManagement from "./pages/admin/OrderManagement";

function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <div className="min-h-screen flex flex-col">
            <Header />

            <main className="flex-1">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/produto/:id" element={<ProductPage />} />
                <Route path="/proteinas" element={<Proteinas />} />
                <Route path="/creatina" element={<Creatina />} />
                <Route path="/pre-treino" element={<PreTreino />} />
                <Route path="/aminoacidos" element={<Aminoacidos />} />
                <Route path="/vitaminas" element={<Vitaminas />} />
                <Route path="/queimadores" element={<Queimadores />} />
                <Route path="/massa-muscular" element={<MassaMuscular />} />
                
                {/* Admin Routes */}
                <Route path="/admin" element={
                  <ProtectedRoute requireAdmin={true}>
                    <AdminDashboard />
                  </ProtectedRoute>
                } />
                <Route path="/admin/produtos" element={
                  <ProtectedRoute requireAdmin={true}>
                    <ProductManagement />
                  </ProtectedRoute>
                } />
                <Route path="/admin/produtos/novo" element={
                  <ProtectedRoute requireAdmin={true}>
                    <ProductForm />
                  </ProtectedRoute>
                } />
                <Route path="/admin/produtos/editar/:id" element={
                  <ProtectedRoute requireAdmin={true}>
                    <ProductForm />
                  </ProtectedRoute>
                } />
                <Route path="/admin/usuarios" element={
                  <ProtectedRoute requireAdmin={true}>
                    <UserManagement />
                  </ProtectedRoute>
                } />
                <Route path="/admin/pedidos" element={
                  <ProtectedRoute requireAdmin={true}>
                    <OrderManagement />
                  </ProtectedRoute>
                } />
              </Routes>
            </main>

            <Footer />
            <ToastContainer />
            <AuthDebugger />
          </div>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
