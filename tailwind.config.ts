import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        body: ["var(--font-bitter)"],
        rrlogo: ["var(--font-permanent-marker)"],
        backcountry: ["var(--font-baloo)"],
        lavlink: ["var(--font-dosis)"],
        funkyflix: ["var(--font-passion-one)"],
        vws: ["var(--font-raleway)"]
      },
      colors: {
        darkBlue: "#001524",
        teal: "#15616D",
        beige: "#FFECD1",
        orange: "#FF7D00",
        aqua: "#34F6F2",
      },
      screens: {
        sm: "450px",
        md: "700px",
        mdlg: "900px",
        lg: "1180px",
        xl: "1600px",
      },
    },
  },
  plugins: [],
};
export default config;
