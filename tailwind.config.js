/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
        fontFamily: {
            mullish: ["Mulish","sans-serif"],
            kal: ["kalnia","serif"],
            yes: ["Yeseva One","serif"],
            ave: ["Averia Serif Libre","serif"],
            fj: ["Fjord One","serif"],
            fre:["Ribeye Marrow","serif"],
            rye:["Rye","serif"],
            bgii:["Bungee Inline","sans-serif"],
        },
        colors: {
          deepBlue: "#02042a",
          lightBlue: "#2b84ea",
          lightBlue300: "#4b94ed",
          lightBlue500: "#0b72e7",
          greenLight: "#61cea6",
          lightGray: "#e2e2e2",
          grayBlue: "#344a6c",
          deepBlueHead: "#162f56",
          grayText: "#818597",
          gray2: "#525a76",
          darkblue: "#15273C",
          darkestblue: "#020408",
          navyblu: "#365475",
          lblue: "#98BAE3",
          lblue20: "#5981B1",
        },
    },
  },
  plugins: [],
}

