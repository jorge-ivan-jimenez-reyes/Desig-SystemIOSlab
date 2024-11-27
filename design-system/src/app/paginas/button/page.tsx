"use client";

import Button from "@/components/Button/Button";

export default function ButtonPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">Componentes de Botón</h1>
        <p className="text-gray-300">
          Experimenta con los estilos y variantes de botones.
        </p>
        {/* Botones */}
        <div className="flex justify-center gap-4">
          <Button label="Primario" onClick={() => alert("Botón Primario")} variant="primary" />
          <Button label="Secundario" onClick={() => alert("Botón Secundario")} variant="secondary" />
        </div>
      </div>
    </div>
  );
}
