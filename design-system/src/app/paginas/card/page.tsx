"use client";

import { useState, useEffect } from "react";
import Card from "@/components/Card/Card";

export default function CardPage() {
  const [components, setComponents] = useState<any[]>([]);

  // Hacer la solicitud para obtener las tarjetas desde la API
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/components");
        const data = await response.json();
        setComponents(data); // Establecer los componentes obtenidos en el estado
      } catch (error) {
        console.error("Error al obtener los componentes:", error);
      }
    };

    fetchComponents();
  }, []);

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-white drop-shadow-md">
          Componentes de Tarjeta
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Explora las variantes de nuestras tarjetas, diseñadas para una experiencia visual única.
        </p>

        {/* Tarjetas dinámicas */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {components.length > 0 ? (
            components.map((component) => (
              <div
                key={component.id}
                className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-[#1e3a8a]"
              >
                <h2 className="text-2xl font-semibold text-[#00baff] hover:text-white transition-colors duration-300">
                  {component.name}
                </h2>
                <p className="text-sm text-gray-200 mt-2">{component.description}</p>

                {/* Mostrar la categoría */}
                <div className="mt-4">
                  <span className="text-xs text-gray-300">{`Categoría: ${component.category}`}</span>
                </div>

                {/* Mostrar las fechas */}
                <div className="mt-2 text-xs text-gray-300">
                  <p>{`Creado: ${new Date(component.created_at).toLocaleString()}`}</p>
                  <p>{`Actualizado: ${new Date(component.updated_at).toLocaleString()}`}</p>
                </div>

                {/* Botón de acción */}
                <div className="mt-6">
                  <a
                    href={`/paginas/button`} // Enlace al componente
                    className="inline-block text-[#00baff] hover:text-white font-semibold border border-[#00baff] py-2 px-4 rounded-full transition-all duration-300"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando tarjetas...</p>
          )}
        </div>
      </div>
    </div>
  );
}