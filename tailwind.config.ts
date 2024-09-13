import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        "custom-inset": "0 -80px 100px 0px #242424 inset",
      },
      spacing: {
        neg4: "-4px",
        neg6: "-6px",
        neg20: "-20px",
        "2px": "2px",
        "3px": "3px",
        "6px": "6px",
        "5px": "5px",
        "10px": "10px",
        "11px": "11px",
        "12px": "12px",
        "15px": "15px",
        "16px": "16px",
        "20px": "20px",
        "25px": "25px",
        "30px": "30px",
        "35px": "35px",
        "40px": "40px",
        "45px": "45px",
        "47px": "47px",
        "50px": "50px",
        "55px": "55px",
        "60px": "60px",
        "65px": "65px",
        "70px": "70px",
        "75px": "75px",
        "80px": "80px",
        "85px": "85px",
        "90px": "90px",
        "95px": "95px",
        "100px": "100px",
        "103px": "103px",
        "120px": "120px",
        "140px": "140px",
        "145px": "145px",
        "150px": "150px",
        "151px": "151px",
        "160px": "160px",
        "168px": "168px",
        "177px": "177px",
        "185px": "185px",
        "194px": "194px",
        "200px": "200px",
        "250px": "250px",
        "290px": "290px",
        "300px": "300px",
        "310px": "310px",
        "340px": "340px",
        "360px": "360px",
        "380px": "380px",
        "400px": "400px",
        "500px": "500px",
        "800px": "800px",
      },
      fontSize: {
        "14px": "14px",
        "16.5px": "16.5px",
        "17px": "17px",
        "17.5px": "17.5px",
        "18px": "18px",
        "18.5px": "18.5px",
        "19px": "19px",
        "19.5px": "19.5px",
        "21px": "21px",
        "22px": "22px",
        "29.5px": "29.5px",
        "30px": "30px",
        "35px": "35px",
        "50px": "50px",
        "60px": "60px",
      },
      colors: {
        charcoal: "#131921",
        darkBlue: "#232F3E",
        blue: "#37475A",
        orange: "#FEBD69",
        darkOrange: "#F08811",
        yellow: "#FFD814",
      },
    },
  },
  plugins: [],
};
export default config;
