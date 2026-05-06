import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0080FF",     // botón + ring + gradientes
        heroTitle: "#0D2F73",   // "Hola, soy"
        heroName: "#06A6F9",    // "Tu Nombre"
        heroDesc: "#646cff",    // descripción (morado)
        heroGray: "#6C7C93",    // texto gris (rol)
      },
      backgroundImage: {
        // Fondo suave como tu captura, usando solo el azul #0080FF en los brillos
        "gradient-hero":
          "radial-gradient(circle at 80% 20%, rgba(0,128,255,0.20) 0%, rgba(0,128,255,0) 55%), radial-gradient(circle at 20% 85%, rgba(0,128,255,0.14) 0%, rgba(0,128,255,0) 60%), linear-gradient(180deg, #F3F8FF 0%, #EAF4FF 55%, #E6F1FF 100%)",
      },
      boxShadow: {
        blue: "0 18px 45px rgba(0,128,255,0.28)",
        soft: "0 14px 30px rgba(0,0,0,0.10)",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        "hero": "clamp(2rem, 8vw, 4rem)",
        "subtitle": "clamp(1rem, 3vw, 2rem)",
        "body-responsive": "clamp(0.8rem, 2vw, 1rem)",
      },
    },
  },
  plugins: [],
} satisfies Config;
