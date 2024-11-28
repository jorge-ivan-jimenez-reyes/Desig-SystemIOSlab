"use client";

import { useState } from "react";
import { FiMenu, FiUserPlus } from "react-icons/fi";
import Sidebar from "@/components/sidebar/sidebar";
import Link from "next/link";
import Spline from "@splinetool/react-spline";

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

        {/* User Registration Button */}
        <Link
          href="/paginas/register"
          className="absolute top-4 right-4 bg-green-500 hover:bg-green-700 text-white p-2 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-green-300"
        >
          <FiUserPlus size={24} />
        </Link>

        {/* Content */}
        <div className="max-w-6xl mx-auto text-center mt-10 space-y-10">
          {/* Header */}
          <header className="text-center space-y-4">
            <h1 className="text-6xl font-bold tracking-tight drop-shadow-md flex items-center justify-center gap-3">
              <span></span> iOS Lab Design System Bienvenidos
            </h1>
            <p className="text-lg text-gray-300">
              Una colección de componentes, estilos y herramientas utilizados en el laboratorio de
              iOS de la UP.
            </p>
          </header>

          {/* Modelo 3D con Borde y Fondo */}
          <div className="my-10 flex justify-center">
            <div className="relative w-full max-w-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-[#1e293b] to-[#334155] rounded-xl shadow-xl transform -rotate-1"></div>
              <div className="relative bg-[#1e293b] rounded-xl border border-[#00baff] shadow-lg p-4">
                <Spline scene="https://prod.spline.design/wpBrWb76tbrxdUf0/scene.splinecode" />
              </div>
            </div>
          </div>

          {/* About Section */}
          <section className="text-center bg-[#1e293b] p-6 rounded-lg shadow-lg">
            <h2 className="text-3xl font-semibold text-blue-400">¿Qué es este Design System?</h2>
            <p className="text-gray-300 mt-4">
              Este sistema de diseño es una plataforma colaborativa para compartir los componentes y
              estilos desarrollados en nuestros proyectos. Aquí puedes encontrar recursos que
              ayudan a mantener la consistencia visual y técnica en nuestras aplicaciones.
            </p>
          </section>

          {/* Links to Pages */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
            <a
              href="/paginas/styles"
              className="p-6 bg-[#1e293b] hover:bg-[#334155] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-blue-400">Estilos</h2>
              <p className="text-gray-400 mt-2">
                Descubre los estilos y temas visuales de los componentes.
              </p>
            </a>
            <a
              href="/paginas/typography"
              className="p-6 bg-[#1e293b] hover:bg-[#334155] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-blue-400">Tipografía</h2>
              <p className="text-gray-400 mt-2">
                Experimenta con tamaños, pesos y estilos de fuente.
              </p>
            </a>
            <a
              href="/paginas/custom-component"
              className="p-6 bg-[#1e293b] hover:bg-[#334155] rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-1"
            >
              <h2 className="text-2xl font-semibold text-blue-400">Crea tu Componente</h2>
              <p className="text-gray-400 mt-2">
                Diseña y personaliza tus propios componentes visuales.
              </p>
            </a>
          </section>
        </div>
      </div>
    </div>
  );
}