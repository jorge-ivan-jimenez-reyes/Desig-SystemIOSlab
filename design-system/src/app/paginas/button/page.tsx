"use client";

import { useState, useEffect } from "react";
import Button from "@/components/Button/Button";

export default function ButtonPage() {
  const [components, setComponents] = useState<any[]>([]);

  // Hacer la solicitud para obtener los botones desde la API
  useEffect(() => {
    const fetchComponents = async () => {
      try {
        const response = await fetch("http://localhost:5555/api/components"); // Asegúrate de que el backend esté en http://localhost:5555
        const data = await response.json();
        setComponents(data); // Establecer los componentes obtenidos en el estado
      } catch (error) {
        console.error("Error al obtener los componentes:", error);
      }
    };

    fetchComponents();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">Componentes de Botón</h1>
        <p className="text-gray-300">Experimenta con los estilos y variantes de botones.</p>
        
        {/* Botones dinámicos */}
        <div className="flex justify-center gap-4">
          {components.length > 0 ? (
            components.map((component, index) => (
              <Button
                key={index}
                label={component.name} // Nombre del componente
                onClick={() => alert(`${component.name} clicked`)}
                variant={component.category} // Usamos la categoría como variante
              />
            ))
          ) : (
            <p>Cargando botones...</p>
          )}
        </div>
      </div>
    </div>
  );
}