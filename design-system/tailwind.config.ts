import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}", // Escanea las páginas si usas Pages Router
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", // Escanea los componentes
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}", // Escanea la carpeta App Router
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)", // Variables CSS para temas personalizados
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [], // Puedes añadir plugins aquí
};

export default config;
