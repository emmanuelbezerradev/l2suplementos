import React from "react";
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
  TruckIcon,
  ShieldCheckIcon,
  CreditCardIcon,
  ClockIcon,
  HeartIcon,
} from "@heroicons/react/24/outline";
import Logo from "../common/Logo";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent"></div>
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-primary-500 to-primary-600"></div>

      {/* Benefícios - Design ultra premium */}
      <div className="bg-gradient-to-r from-primary-600 via-primary-500 to-primary-600 py-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        {/* Efeito de brilho animado */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 group cursor-pointer">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/90 group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                <TruckIcon className="w-8 h-8 text-white group-hover:text-primary-600 transition-all duration-500" />
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300">
                  Frete Grátis
                </h4>
                <p className="text-primary-50 text-sm group-hover:text-primary-100 transition-colors duration-300">
                  Acima de R$ 199
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 group cursor-pointer">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/90 group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                <ShieldCheckIcon className="w-8 h-8 text-white group-hover:text-primary-600 transition-all duration-500" />
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300">
                  100% Seguro
                </h4>
                <p className="text-primary-50 text-sm group-hover:text-primary-100 transition-colors duration-300">
                  SSL Certificado
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 group cursor-pointer">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/90 group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                <CreditCardIcon className="w-8 h-8 text-white group-hover:text-primary-600 transition-all duration-500" />
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300">
                  Parcelamento
                </h4>
                <p className="text-primary-50 text-sm group-hover:text-primary-100 transition-colors duration-300">
                  Até 12x sem juros
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center text-center sm:text-left space-y-3 sm:space-y-0 sm:space-x-4 group cursor-pointer">
              <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-white/90 group-hover:shadow-2xl group-hover:shadow-white/20 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3">
                <ClockIcon className="w-8 h-8 text-white group-hover:text-primary-600 transition-all duration-500" />
              </div>
              <div className="group-hover:translate-x-2 transition-transform duration-300">
                <h4 className="font-bold text-lg text-white group-hover:text-white transition-colors duration-300">
                  Entrega Rápida
                </h4>
                <p className="text-primary-50 text-sm group-hover:text-primary-100 transition-colors duration-300">
                  2-3 dias úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Conteúdo principal do footer */}
      <div className="py-6 md:py-12 lg:py-16 relative z-10">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 xl:gap-12">
            {/* Sobre a empresa */}
            <div className="xl:col-span-1">
              <div className="mb-4 md:mb-6">
                <Logo size="md" className="mb-3 md:mb-4" />
                <p className="text-gray-300 leading-relaxed text-sm">
                  Sua parceira na jornada fitness. Oferecemos os melhores
                  suplementos com qualidade garantida e preços imbatíveis para
                  você alcançar seus objetivos.
                </p>
              </div>

              {/* Redes sociais ultra premium */}
              <div className="space-y-4">
                <h4 className="font-semibold text-white">Siga-nos</h4>
                <div className="flex space-x-3">
                  <button className="relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-3 rounded-full transition-all duration-500 transform hover:scale-125 hover:shadow-2xl hover:shadow-blue-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <svg
                      className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                    </svg>
                  </button>
                  <button className="relative bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 p-3 rounded-full transition-all duration-500 transform hover:scale-125 hover:shadow-2xl hover:shadow-blue-400/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <svg
                      className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                    </svg>
                  </button>
                  <button className="relative bg-gradient-to-r from-pink-500 to-pink-600 hover:from-pink-400 hover:to-pink-500 p-3 rounded-full transition-all duration-500 transform hover:scale-125 hover:shadow-2xl hover:shadow-pink-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <svg
                      className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.097.119.112.223.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.746-1.378l-.747 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z" />
                    </svg>
                  </button>
                  <button className="relative bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-400 hover:to-pink-400 p-3 rounded-full transition-all duration-500 transform hover:scale-125 hover:shadow-2xl hover:shadow-purple-500/50 group overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <svg
                      className="w-5 h-5 relative z-10 group-hover:rotate-12 transition-transform duration-300"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Categorias */}
            <div className="">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white relative">
                Categorias
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Whey Protein",
                  "Creatina",
                  "Pré-Treino",
                  "BCAA",
                  "Vitaminas",
                  "Queimadores",
                  "Mass Gainer",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-all duration-300 text-sm flex items-center group relative py-1"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300 shadow-sm shadow-primary-400/50"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Atendimento */}
            <div className="">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white relative">
                Atendimento
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
              </h3>
              <ul className="space-y-2 md:space-y-3">
                {[
                  "Central de Ajuda",
                  "Como Comprar",
                  "Trocas e Devoluções",
                  "Rastrear Pedido",
                  "Política de Privacidade",
                  "Termos de Uso",
                ].map((item, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-primary-400 transition-all duration-300 text-sm flex items-center group relative py-1"
                    >
                      <span className="w-2 h-2 bg-primary-500 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-110"></span>
                      <span className="relative">
                        {item}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 group-hover:w-full transition-all duration-300 shadow-sm shadow-primary-400/50"></span>
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contato e Newsletter */}
            <div className="xl:col-span-1">
              <h3 className="text-lg md:text-xl font-bold mb-4 md:mb-6 text-white relative">
                Contato
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full"></div>
              </h3>

              <div className="space-y-3 md:space-y-4 mb-6 md:mb-8">
                <div className="group cursor-pointer p-2 md:p-3 rounded-xl hover:bg-primary-500/10 hover:backdrop-blur-sm transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-500/20 p-2 rounded-lg group-hover:bg-primary-500/90 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                      <PhoneIcon className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300 relative z-10 min-w-0 flex-1">
                      <p className="text-xs text-gray-400 group-hover:text-primary-200 transition-colors duration-300">
                        WhatsApp
                      </p>
                      <span className="text-gray-300 text-sm hover:text-primary-400 transition-colors group-hover:text-white block">
                        (85) 99985-00344
                      </span>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer p-2 md:p-3 rounded-xl hover:bg-primary-500/10 hover:backdrop-blur-sm transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-center space-x-3">
                    <div className="bg-primary-500/20 p-2 rounded-lg group-hover:bg-primary-500/90 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                      <EnvelopeIcon className="w-4 h-4 text-primary-400 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300 relative z-10 min-w-0 flex-1">
                      <p className="text-xs text-gray-400 group-hover:text-primary-200 transition-colors duration-300">
                        E-mail
                      </p>
                      <a
                        href="mailto:emmanuelbezerra1992@gmail.com"
                        className="text-gray-300 text-xs hover:text-primary-400 transition-colors group-hover:text-primary-200 block whitespace-nowrap overflow-hidden text-ellipsis"
                        title="emmanuelbezerra1992@gmail.com"
                      >
                        emmanuelbezerra1992@gmail.com
                      </a>
                    </div>
                  </div>
                </div>

                <div className="group cursor-pointer p-2 md:p-3 rounded-xl hover:bg-primary-500/10 hover:backdrop-blur-sm transition-all duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="flex items-start space-x-3">
                    <div className="bg-primary-500/20 p-2 rounded-lg group-hover:bg-primary-500/90 group-hover:shadow-2xl group-hover:shadow-primary-500/30 transition-all duration-500 transform group-hover:scale-110 group-hover:rotate-3 flex-shrink-0">
                      <MapPinIcon className="w-4 h-4 text-primary-400 mt-0.5 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div className="group-hover:translate-x-2 transition-transform duration-300 relative z-10 min-w-0 flex-1">
                      <p className="text-xs text-gray-400 group-hover:text-primary-200 transition-colors duration-300">
                        Endereço
                      </p>
                      <span className="text-gray-300 text-sm leading-relaxed group-hover:text-white transition-colors duration-300 block">
                        Rua Mauro Freire, 300, 1101C
                        <br />
                        Fortaleza - CE
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Newsletter integrada */}
              <div className="bg-gradient-to-br from-primary-500/10 to-primary-600/10 backdrop-blur-sm rounded-xl p-4 border border-primary-500/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-400/5 to-transparent transform -skew-x-12"></div>

                <div className="flex items-center space-x-2 mb-3 relative z-10">
                  <HeartIcon className="w-4 h-4 text-primary-400" />
                  <h4 className="font-bold text-white text-sm">Newsletter</h4>
                </div>
                <p className="text-gray-300 text-xs mb-3 leading-relaxed relative z-10">
                  Receba ofertas exclusivas
                </p>
                <div className="space-y-2 relative z-10">
                  <input
                    type="email"
                    placeholder="Seu melhor e-mail"
                    className="w-full px-3 py-2 bg-gray-800/80 text-white text-xs rounded-lg border border-gray-600/50 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500 placeholder-gray-400 backdrop-blur-sm transition-all duration-300 hover:bg-gray-800/90"
                  />
                  <button className="w-full bg-gradient-to-r from-primary-500 to-primary-600 hover:from-primary-400 hover:to-primary-500 px-4 py-2 rounded-lg transition-all duration-300 text-white font-medium text-xs shadow-lg shadow-primary-500/25 hover:shadow-xl hover:shadow-primary-500/40 transform hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                    <span className="relative z-10">Enviar</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer bottom - Design responsivo */}
      <div className="bg-gray-900/80 backdrop-blur-sm border-t border-gray-700/50 py-4 md:py-6 relative z-10">
        <div className="container-custom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 gap-4">
            {/* Copyright */}
            <div className="text-center md:text-left order-2 md:order-1 w-full md:w-auto">
              <p className="text-gray-400 text-xs md:text-sm">
                © 2025{" "}
                <span className="text-primary-400 font-semibold">
                  L2 Suplementos
                </span>
                . Todos os direitos reservados.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Desenvolvido com{" "}
                <HeartIcon className="w-3 h-3 inline text-red-500" /> por
                Emmanuel Bezerra
              </p>
            </div>

            {/* Métodos de pagamento */}
            <div className="flex flex-col items-center md:items-end order-1 md:order-2 w-full md:w-auto">
              <span className="text-gray-400 text-xs mb-2 flex items-center">
                <ShieldCheckIcon className="w-3 h-3 mr-1 text-primary-400" />
                Pagamento seguro
              </span>
              <div className="flex flex-wrap items-center justify-center md:justify-end gap-2">
                {/* Visa */}
                <div className="bg-white rounded p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <svg
                    className="h-3 w-6 md:h-4 md:w-8"
                    viewBox="0 0 40 24"
                    fill="none"
                  >
                    <rect width="40" height="24" fill="#1434CB" rx="4" />
                    <path
                      d="M16.283 7.5h-2.93l-1.833 9h2.93l1.833-9zm7.096 5.777c.012-2.377-3.286-2.507-3.262-3.566.008-.322.315-.665.988-.753.333-.044 1.252-.077 2.295.403l.409-1.91c-.561-.204-1.281-.4-2.178-.4-2.303 0-3.925 1.225-3.938 2.98-.015 1.297 1.158 2.021 2.042 2.45.91.44 1.216.722 1.213 1.116-.005.602-.723.869-1.392.879-1.17.018-1.849-.315-2.389-.567l-.422 1.975c.543.25 1.547.467 2.588.477 2.449 0 4.051-1.21 4.056-3.084zm6.278 3.223h2.548l-2.226-9h-2.355c-.531 0-.982.307-1.181.78l-4.165 8.22h2.449l.487-1.348h2.994l.283 1.348zm-2.609-3.21l1.227-3.377.707 3.377h-1.934zm-7.822-5.79L17.466 16.5h-2.329l1.459-9z"
                      fill="white"
                    />
                  </svg>
                </div>

                {/* Mastercard */}
                <div className="bg-white rounded p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <svg
                    className="h-3 w-6 md:h-4 md:w-8"
                    viewBox="0 0 40 24"
                    fill="none"
                  >
                    <rect width="40" height="24" fill="white" rx="4" />
                    <circle cx="15" cy="12" r="7" fill="#EB001B" />
                    <circle cx="25" cy="12" r="7" fill="#F79E1B" />
                    <path
                      d="M20 7.5c1.4 1.2 2.3 3 2.3 5s-.9 3.8-2.3 5c-1.4-1.2-2.3-3-2.3-5s.9-3.8 2.3-5z"
                      fill="#FF5F00"
                    />
                  </svg>
                </div>

                {/* PIX */}
                <div className="bg-gradient-to-r from-teal-500 to-teal-600 rounded p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <svg
                    className="h-3 w-6 md:h-4 md:w-8"
                    viewBox="0 0 40 24"
                    fill="none"
                  >
                    <rect width="40" height="24" fill="transparent" rx="4" />
                    <path
                      d="M12 8l8 8m0-8l-8 8"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                    <text
                      x="20"
                      y="18"
                      textAnchor="middle"
                      fill="white"
                      fontSize="6"
                      fontFamily="Arial, sans-serif"
                      fontWeight="bold"
                    >
                      PIX
                    </text>
                  </svg>
                </div>

                {/* Boleto */}
                <div className="bg-gradient-to-r from-orange-500 to-orange-600 rounded p-1 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  <svg
                    className="h-3 w-6 md:h-4 md:w-8"
                    viewBox="0 0 40 24"
                    fill="none"
                  >
                    <rect width="40" height="24" fill="transparent" rx="4" />
                    <rect
                      x="6"
                      y="8"
                      width="28"
                      height="2"
                      fill="white"
                      rx="1"
                    />
                    <rect
                      x="6"
                      y="11"
                      width="23"
                      height="1"
                      fill="white"
                      rx="0.5"
                    />
                    <rect
                      x="6"
                      y="13"
                      width="18"
                      height="1"
                      fill="white"
                      rx="0.5"
                    />
                    <rect
                      x="6"
                      y="15"
                      width="28"
                      height="1"
                      fill="white"
                      rx="0.5"
                    />
                    <text
                      x="20"
                      y="7"
                      textAnchor="middle"
                      fill="white"
                      fontSize="4"
                      fontFamily="Arial, sans-serif"
                      fontWeight="bold"
                    >
                      BOLETO
                    </text>
                  </svg>
                </div>

                {/* SSL */}
                <div className="flex items-center space-x-1 ml-2">
                  <div className="bg-green-600 rounded p-1 shadow-lg">
                    <ShieldCheckIcon className="w-3 h-3 text-white" />
                  </div>
                  <div className="text-left">
                    <p className="text-green-400 text-xs font-semibold leading-none">
                      SSL
                    </p>
                    <p className="text-gray-400 text-xs leading-none">Seguro</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
