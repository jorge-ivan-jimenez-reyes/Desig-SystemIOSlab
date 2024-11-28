"use client";

import { useState, useEffect } from "react";

interface Component {
  id: number;
  name: string;
  description: string;
  category: string;
  created_at: string;
  updated_at: string;
}

export default function CardPage() {
  const [components, setComponents] = useState<Component[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch("http://54.163.223.205:3002/api/components"); // Cambié a una URL absoluta
        if (!response.ok) {
          throw new Error(`Error al obtener los datos: ${response.statusText}`);
        }
        const data = await response.json();
        setComponents(data);
      } catch (error) {
        console.error("Error al obtener los componentes:", error);
        setError("No se pudieron cargar los componentes. Intenta nuevamente.");
      } finally {
        setLoading(false);
      }
    };

    fetchComponents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-white drop-shadow-md">
          Componentes de Tarjeta
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Explora las variantes de nuestras tarjetas, diseñadas para una experiencia visual única.
        </p>

        {loading ? (
          <p className="text-gray-400">Cargando componentes...</p>
        ) : error ? (
          <p className="text-red-400">{error}</p>
        ) : components.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {components.map((component) => (
              <div
                key={component.id}
                className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1e3a8a]"
              >
                <h2 className="text-2xl font-semibold text-[#00baff] hover:text-white transition-colors">
                  {component.name}
                </h2>
                <p className="text-sm text-gray-200 mt-2">{component.description}</p>

                <div className="mt-4 text-xs text-gray-300">
                  <p>{`Categoría: ${component.category}`}</p>
                  <p>{`Creado: ${new Date(component.created_at).toLocaleString()}`}</p>
                  <p>{`Actualizado: ${new Date(component.updated_at).toLocaleString()}`}</p>
                </div>

                <div className="mt-6">
                  <a
                    href={`/paginas/button`}
                    className="inline-block text-[#00baff] hover:text-white font-semibold border border-[#00baff] py-2 px-4 rounded-full transition-all"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-400">No se encontraron componentes.</p>
        )}
      </div>
    </div>
  );
}