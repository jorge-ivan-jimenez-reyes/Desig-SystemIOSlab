"use client";

import Card from "@/components/Card/Card";

export default function CardPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-4xl mx-auto space-y-6 text-center">
        <h1 className="text-4xl font-bold">Componentes de Tarjeta</h1>
        <p className="text-gray-300">
          Visualiza y explora las variantes de tarjetas.
        </p>
        {/* Tarjetas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card
            title="Botones"
            description="Explora los botones en nuestra biblioteca de componentes."
            href="/paginas/button"
          />
          <Card
            title="Tarjetas"
            description="Visualiza las tarjetas diseñadas para mostrar contenido."
            href="/paginas/card"
          />
        </div>
      </div>
    </div>
  );
}
