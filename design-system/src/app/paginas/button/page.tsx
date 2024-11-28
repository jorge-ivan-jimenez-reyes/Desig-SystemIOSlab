"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button/Button"; // Asegúrate de que este sea el path correcto al componente Button

export default function ButtonPage() {
  const [components, setComponents] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(true); // Indicador de carga

  // Hacer la solicitud para obtener los botones desde la API
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch("/api/components"); // Nota: Asegúrate que el proxy esté configurado
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
        setComponents(data); // Establecer los componentes obtenidos en el estado
      } catch (error) {
        console.error("Error al obtener los componentes:", error);
      } finally {
        setIsLoading(false); // Finalizar la carga
      }
    };

    fetchComponents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">Componentes de Botón</h1>
        <p className="text-gray-300">Experimenta con los estilos y variantes de botones.</p>

        {/* Indicador de carga */}
        {isLoading ? (
          <p>Cargando botones...</p>
        ) : (
          <div className="flex flex-wrap justify-center gap-4">
            {components.length > 0 ? (
              components.map((component) => (
                <Button
                  key={component.id}
                  label={component.name} // Nombre del componente
                  onClick={() => alert(`${component.name} clicked`)}
                  variant={component.category || "default"} // Usamos la categoría como variante o "default"
                />
              ))
            ) : (
              <p>No se encontraron botones.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}