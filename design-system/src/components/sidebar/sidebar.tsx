"use client";

import { FiX } from "react-icons/fi"; // Ícono de cerrar (react-icons)

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  return (
    <div
      className={`fixed inset-y-0 left-0 w-64 bg-[#1e293b] transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } transition-transform duration-300 ease-in-out shadow-lg z-50`}
    >
      <div className="p-6 space-y-6 relative">
        {/* Ícono de cierre */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 text-gray-300 hover:text-white"
        >
          <FiX size={24} />
        </button>

        <h2 className="text-2xl font-bold text-blue-400">Menú</h2>
        <ul className="space-y-4">
          <li>
            <a href="/paginas/button" className="text-gray-300 hover:text-white">
              Botones
            </a>
          </li>
          <li>
            <a href="/paginas/card" className="text-gray-300 hover:text-white">
              Tarjetas
            </a>
          </li>
          <li>
            <a href="/paginas/colors" className="text-gray-300 hover:text-white">
              Colores
            </a>
          </li>
          <li>
            <a href="/paginas/typography" className="text-gray-300 hover:text-white">
              Tipografía
            </a>
          </li>
          {/* Agregar el enlace de la página de Estilos */}
          <li>
            <a href="/paginas/styles" className="text-gray-300 hover:text-white">
              Estilos
            </a>
          </li>
          <li>
    <a href="/paginas/typography" className="text-gray-300 hover:text-white">
      Tipografía
    </a>
  </li>
  <li>
            <a href="/paginas/custom-component" className="text-gray-300 hover:text-white">
              Crea tu Componente
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}