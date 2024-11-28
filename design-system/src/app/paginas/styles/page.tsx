"use client";

import { useState, useEffect } from "react";

interface Style {
  id: number;
  name: string;
  description: string;
  value: string;
  type: string;
  created_at: string;
  updated_at: string;
}

export default function StylesPage() {
  const [styles, setStyles] = useState<Style[]>([]);

  useEffect(() => {
    const fetchStyles = async () => {
      try {
        const response = await fetch("/api/styles");
        const data = await response.json();
        setStyles(data);
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {styles.length > 0 ? (
            styles.map((style) => (
              <div
                key={style.id}
                className="bg-[#1e293b] p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#1e3a8a]"
              >
                <h2 className="text-2xl font-semibold text-[#00baff] hover:text-white transition-colors">
                  {style.name}
                </h2>
                <p className="text-sm text-gray-200 mt-2">{style.description}</p>

                <div className="mt-4 text-xs text-gray-300">
                  <p>{`Tipo: ${style.type}`}</p>
                  <p>{`Valor: ${style.value}`}</p>
                </div>
                <div className="mt-4 text-xs text-gray-300">
                  <p>{`Creado: ${new Date(style.created_at).toLocaleString()}`}</p>
                  <p>{`Actualizado: ${new Date(style.updated_at).toLocaleString()}`}</p>
                </div>

                {style.type === "Color" && (
                  <div
                    className="mt-4 p-4 rounded-lg"
                    style={{ backgroundColor: style.value }}
                  >
                    <p className="text-white">Vista previa del color</p>
                  </div>
                )}

                <div className="mt-6">
                  <a
                    href={`/paginas/styles/${style.id}`}
                    className="inline-block text-[#00baff] hover:text-white font-semibold border border-[#00baff] py-2 px-4 rounded-full transition-all"
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