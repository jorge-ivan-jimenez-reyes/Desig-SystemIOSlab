"use client";

import { useState } from "react";

export default function TypographyPage() {
  const [fontSize, setFontSize] = useState(16); // Tamaño de fuente
  const [fontWeight, setFontWeight] = useState("normal"); // Peso de fuente
  const [lineHeight, setLineHeight] = useState(1.5); // Altura de línea

  return (
    <div className="flex min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-4xl mx-auto space-y-10">
        <h1 className="text-5xl font-bold text-center">Tipografía</h1>
        <p className="text-center text-gray-300">
          Experimenta con tamaños, pesos y estilos de fuente para personalizar tu diseño.
        </p>

        {/* Controles de Tipografía */}
        <div className="space-y-4 bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <div className="flex justify-between items-center">
            <label htmlFor="fontSize" className="text-gray-300">
              Tamaño de Fuente ({fontSize}px):
            </label>
            <input
              id="fontSize"
              type="range"
              min={12}
              max={48}
              value={fontSize}
              onChange={(e) => setFontSize(Number(e.target.value))}
              className="w-1/2"
            />
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="fontWeight" className="text-gray-300">
              Peso de Fuente:
            </label>
            <select
              id="fontWeight"
              value={fontWeight}
              onChange={(e) => setFontWeight(e.target.value)}
              className="p-2 rounded-md bg-[#334155] text-white"
            >
              <option value="normal">Normal</option>
              <option value="bold">Negrita</option>
              <option value="lighter">Ligera</option>
            </select>
          </div>
          <div className="flex justify-between items-center">
            <label htmlFor="lineHeight" className="text-gray-300">
              Altura de Línea ({lineHeight}):
            </label>
            <input
              id="lineHeight"
              type="range"
              min={1}
              max={3}
              step={0.1}
              value={lineHeight}
              onChange={(e) => setLineHeight(Number(e.target.value))}
              className="w-1/2"
            />
          </div>
        </div>

        {/* Vista Previa de Tipografía */}
        <div
          className="bg-[#1e293b] p-6 rounded-lg shadow-lg"
          style={{
            fontSize: `${fontSize}px`,
            fontWeight: fontWeight,
            lineHeight: lineHeight,
          }}
        >
          <p>
            Esto es un ejemplo de texto con las configuraciones actuales. Cambia los valores para
            ver cómo afectan al diseño.
          </p>
        </div>
      </div>
    </div>
  );
}