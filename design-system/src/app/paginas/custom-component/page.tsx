"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";

export default function CreateComponentPage() {
  const [palette, setPalette] = useState<string[]>([
    "rgb(255, 255, 255)",
    "rgb(0, 0, 0)",
  ]);
  const [selectedFont, setSelectedFont] = useState<string>("Roboto");
  const [icon, setIcon] = useState<string | null>(null);
  const [iconError, setIconError] = useState<string | null>(null);
  const [generatedCode, setGeneratedCode] = useState<string>("");
  const [previewData, setPreviewData] = useState<{
    font: string;
    colors: string[];
    icon: string | null;
  }>({
    font: "Roboto",
    colors: ["rgb(255, 255, 255)", "rgb(0, 0, 0)"],
    icon: null,
  });

  useEffect(() => {
    Prism.highlightAll(); // Ejecutar el resaltado solo después del montaje
  }, [generatedCode]);

  const generateRandomPalette = () => {
    const randomColor = () =>
      `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
        Math.random() * 256
      )})`;
    const newPalette = Array(2)
      .fill(null)
      .map(() => randomColor());
    setPalette(newPalette);
  };

  const fetchIcon = async (query: string) => {
    try {
      if (!query.includes(":")) {
        setIconError("Por favor usa un formato válido, por ejemplo: mdi:home o fa:car.");
        setIcon(null);
        return;
      }

      const response = await axios.get(`https://api.iconify.design/${query}.svg`);
      if (response.status === 200) {
        setIcon(response.data);
        setIconError(null);
      } else {
        setIconError("Icono no encontrado.");
        setIcon(null);
      }
    } catch (error) {
      console.error("Error fetching icon:", error);
      setIconError("Error al obtener el icono. Verifica el nombre.");
      setIcon(null);
    }
  };

  const applyChanges = () => {
    setPreviewData({
      font: selectedFont,
      colors: palette,
      icon: icon,
    });
    generateCode();
  };

  const generateCode = () => {
    const code = `
<div style="font-family: '${selectedFont}'; color: ${palette[0]}; background: ${palette[1]}; padding: 20px; border-radius: 8px;">
  <h1>Componente Personalizado</h1>
  <p>Texto de ejemplo con la fuente ${selectedFont}.</p>
  <div>${icon ? icon : "Icono no seleccionado"}</div>
</div>`;
    setGeneratedCode(code);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#1e3a8a] text-white p-10">
      <div className="max-w-6xl mx-auto space-y-10">
        <h1 className="text-4xl font-bold text-center">Crea tu Propio Componente</h1>

        {/* Paleta de colores */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Paleta de Colores</h2>
          <button
            onClick={generateRandomPalette}
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-lg"
          >
            Generar Paleta
          </button>
          <div className="flex mt-4 space-x-4">
            {palette.map((color, index) => (
              <div key={index} style={{ background: color }} className="w-16 h-16 rounded-full" />
            ))}
          </div>
        </section>

        {/* Tipografía */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Selecciona una Tipografía</h2>
          <select
            onChange={(e) => setSelectedFont(e.target.value)}
            className="mt-4 p-2 rounded-lg bg-gray-800 text-white"
            value={selectedFont}
          >
            <option value="Roboto">Roboto</option>
            <option value="'Open Sans', sans-serif">Open Sans</option>
            <option value="'Lato', sans-serif">Lato</option>
            <option value="'Montserrat', sans-serif">Montserrat</option>
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
            placeholder="Ej: mdi:home o fa:car"
            onBlur={(e) => fetchIcon(e.target.value)}
            className="mt-4 p-2 rounded-lg bg-gray-800 text-white"
          />
          {iconError && <p className="text-red-500 mt-2">{iconError}</p>}
          <div
            className="mt-4"
            dangerouslySetInnerHTML={{ __html: icon || "Previsualización del icono aquí" }}
          />
        </section>

        {/* Vista previa en tiempo real */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Vista Previa</h2>
          <div
            className="mt-4 p-6 rounded-lg"
            style={{
              fontFamily: previewData.font,
              color: previewData.colors[0],
              background: previewData.colors[1] || "#ffffff",
              borderRadius: "8px",
            }}
          >
            <h1>Componente Personalizado</h1>
            <p>Texto de ejemplo con la fuente {previewData.font}.</p>
            <div dangerouslySetInnerHTML={{ __html: previewData.icon || "Icono no seleccionado" }} />
          </div>
          <button
            onClick={applyChanges}
            className="mt-4 bg-green-500 hover:bg-green-700 text-white py-2 px-4 rounded-lg"
          >
            Aplicar Cambios
          </button>
        </section>

        {/* Código generado */}
        <section className="bg-[#1e293b] p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold text-blue-400">Código Generado</h2>
          <pre className="bg-gray-800 p-4 rounded-lg text-sm">
            <code className="language-html">{generatedCode}</code>
          </pre>
        </section>
      </div>
    </div>
  );
}