/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Cantata: ["Cantata One", "serif"],
      },
      fontSize:{
        subtext: "30px",
        title: "50px",
        Msubtext: "12px",
        Mtitle: "20px"
      },
    },
    colors:{
      black: "#000",
      white: "#FFFF",
      bg_blue:"#000D2E",
      fg_blue:"#61DAFB",
      fg_muted_blue:"#00617B",
      bg_gray:"#111",
      fg_gray:"#808080",
    }
  },

  plugins: [],
};
