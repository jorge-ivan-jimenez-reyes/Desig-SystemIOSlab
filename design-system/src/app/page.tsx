"use client";

import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import Sidebar from "@/components/sidebar/sidebar";

export default function Home() {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white">
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />

      {/* Main Content */}
      <div className="flex-1 p-10 relative">
        {/* Menu Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 bg-blue-500 hover:bg-blue-700 text-white p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <FiMenu size={24} />
        </button>

        {/* Content */}
        <div className="max-w-4xl mx-auto text-center mt-10 space-y-10">
          <h1 className="text-6xl font-bold tracking-tight drop-shadow-md flex items-center justify-center gap-3">
            <span></span> iOS Lab Design System
          </h1>
          <p className="text-lg text-gray-300">
            Explora los componentes reutilizables diseñados para las aplicaciones creadas en el laboratorio de iOS de la UP.
          </p>

          {/* Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <a
              href="/paginas/button"
              className="p-6 bg-[#1e293b] hover:bg-[#334155] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-blue-400">Botones</h2>
              <p className="text-gray-400 mt-2">
                Explora las variantes de botones con estilos modernos y funcionales.
              </p>
            </a>
            <a
              href="/paginas/card"
              className="p-6 bg-[#1e293b] hover:bg-[#334155] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-blue-400">Tarjetas</h2>
              <p className="text-gray-400 mt-2">
                Visualiza las tarjetas diseñadas para mostrar contenido de manera limpia y elegante.
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}