"use client";

import { useState, useEffect } from "react";

export default function StylesPage() {
  const [styles, setStyles] = useState<any[]>([]);

  // Hacer la solicitud para obtener los estilos desde la API
  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/styles");
        const data = await response.json();
        setStyles(data); // Establecer los estilos obtenidos en el estado
      } catch (error) {
        console.error("Error al obtener los estilos:", error);
      }
    };

    fetchStyles();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-6xl mx-auto space-y-6 text-center">
        <h1 className="text-5xl font-semibold tracking-tight text-white drop-shadow-md">
          Estilos de Diseño
        </h1>
        <p className="text-lg text-gray-300 mb-10">
          Explora los estilos de diseño aplicados a los componentes de la interfaz.
        </p>

        {/* Filtros para los estilos */}
        <div className="mb-10">
          <button className="bg-[#1e3a8a] hover:bg-[#334155] text-white py-2 px-4 rounded-lg mr-4">
            Filtrar por Color
          </button>
          <button className="bg-[#1e3a8a] hover:bg-[#334155] text-white py-2 px-4 rounded-lg">
            Filtrar por Tipografía
          </button>
        </div>

        {/* Estilos dinámicos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {styles.length > 0 ? (
            styles.map((style) => (
              <div
                key={style.id}
                className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out border border-[#1e3a8a]"
              >
                <h2 className="text-2xl font-semibold text-[#00baff] hover:text-white transition-colors duration-300">
                  {style.name}
                </h2>
                <p className="text-sm text-gray-200 mt-2">{style.description}</p>

                {/* Mostrar el valor del estilo */}
                <div className="mt-4">
                  <span className="text-xs text-gray-300">{`Valor: ${style.value}`}</span>
                </div>

                {/* Mostrar el tipo de estilo */}
                <div className="mt-2 text-xs text-gray-300">
                  <p>{`Tipo: ${style.type}`}</p>
                </div>

                {/* Mostrar fecha de creación */}
                <div className="mt-2 text-xs text-gray-300">
                  <p>{`Creado: ${new Date(style.created_at).toLocaleString()}`}</p>
                  <p>{`Actualizado: ${new Date(style.updated_at).toLocaleString()}`}</p>
                </div>

                {/* Vista previa del estilo (solo si es color) */}
                {style.type === "Color" && (
                  <div
                    className="mt-4 p-4 rounded-lg"
                    style={{ backgroundColor: style.value }}
                  >
                    <p className="text-white">Vista previa del color</p>
                  </div>
                )}

                {/* Botón de acción */}
                <div className="mt-6">
                  <a
                    href={`/paginas/styles/${style.id}`} // Enlace a la vista detallada del estilo
                    className="inline-block text-[#00baff] hover:text-white font-semibold border border-[#00baff] py-2 px-4 rounded-full transition-all duration-300"
                  >
                    Ver más
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>Cargando estilos...</p>
          )}
        </div>
      </div>
    </div>
  );
}