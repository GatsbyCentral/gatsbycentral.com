import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 1.5,
  googleFonts: [
    {
      name: "Source Sans Pro",
      styles: ["300", "300i"]
    }
  ],
  headerFontFamily: [
    "Source Sans Pro",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  bodyFontFamily: [
    "Source Sans Pro",
    "Helvetica Neue",
    "Segoe UI",
    "Helvetica",
    "Arial",
    "sans-serif"
  ],
  headerColor: "hsla(0,0%,0%,0.6)",
  bodyColor: "hsla(0,0%,0%,0.60)",
  headerWeight: 300,
  bodyWeight: 300
});

export default typography;
