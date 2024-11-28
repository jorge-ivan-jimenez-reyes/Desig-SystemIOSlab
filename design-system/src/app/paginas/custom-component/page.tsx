"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; // Tema para PrismJS

export default function CreateComponentPage() {
  const [palette, setPalette] = useState<string[]>([]);
  const [selectedFont, setSelectedFont] = useState<string>("Roboto");
  const [icon, setIcon] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>("");

  // Fetch palette from proxy server
  const fetchPalette = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/colormind", { model: "default" });
      setPalette(response.data.result.map((color: number[]) => `rgb(${color.join(",")})`));
    } catch (error) {
      console.error("Error fetching palette:", error);
    }
  };

  // Fetch an icon from Iconify
  const fetchIcon = async (query: string) => {
    try {
      const response = await axios.get(`https://api.iconify.design/${query}.svg`);
      if (response.status === 200) {
        setIcon(response.data);
      } else {
        setIcon("<p>Icono no encontrado</p>");
      }
    } catch (error) {
      console.error("Error fetching icon:", error);
      setIcon("<p>Icono no encontrado</p>");
    }
  };

  // Generate code snippet
  const generateCode = () => {
    const code = `
<div style="font-family: '${selectedFont}'; color: ${palette[0]}; background: ${palette[1]}; padding: 20px; border-radius: 8px;">
  <h1>Componente Personalizado</h1>
  <p>Texto de ejemplo con la fuente ${selectedFont}.</p>
  <div>${icon ? icon : "Icono no seleccionado"}</div>
</div>`;
    setGeneratedCode(code);
  };

  useEffect(() => {
    Prism.highlightAll(); // Resaltar el código con PrismJS
  }, [generatedCode]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center">Crea tu Propio Componente</h1>

        {/* Paleta de colores */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Paleta de Colores</h2>
          <button
            onClick={fetchPalette}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Generar Paleta
          </button>
          <div className="flex mt-4 space-x-4">
            {palette.map((color, index) => (
              <div
                key={index}
                style={{ background: color }}
                className="w-16 h-16 rounded-full"
              />
            ))}
          </div>
        </section>

        {/* Tipografía */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Selecciona una Tipografía</h2>
          <select
            onChange={(e) => setSelectedFont(e.target.value)}
            className="mt-4 p-2 rounded-lg bg-gray-800 text-white"
          >
            <option value="Roboto">Roboto</option>
            <option value="Open Sans">Open Sans</option>
            <option value="Lato">Lato</option>
            <option value="Montserrat">Montserrat</option>
          </select>
          <p className="mt-4" style={{ fontFamily: selectedFont }}>
            Este es un ejemplo con la fuente: {selectedFont}.
          </p>
        </section>

        {/* Iconos */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Selecciona un Icono</h2>
          <input
            type="text"
            placeholder="Ej: mdi:home"
            onBlur={(e) => fetchIcon(e.target.value)}
            className="mt-4 p-2 rounded-lg bg-gray-800 text-white"
          />
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: icon || "Previsualización del icono aquí" }}
          />
        </section>

        {/* Código generado */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Código Generado</h2>
          <pre className="bg-gray-800 p-4 rounded-lg text-sm">
            <code className="language-html">{generatedCode}</code>
          </pre>
          <button
            onClick={generateCode}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            Generar Código
          </button>
        </section>
      </div>
    </div>
  );
}