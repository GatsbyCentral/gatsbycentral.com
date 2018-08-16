import Typography from "typography";

const typography = new Typography({
  baseFontSize: "18px",
  baseLineHeight: 1.5,
  scaleRatio: 1.5,
  // googleFonts: [
  //   {
  //     name: "Source Sans Pro",
  //     styles: ["300", "300i", "400", "400i"]
  //   }
  // ],
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
  bodyWeight: 300,
  overrideStyles: ({ adjustFontSizeTo, scale, rhythm }, options) => {
    return {
      body: {},
      a: {
        color: "hsla(0,0%,0%,0.6)",
        textDecoration: "none",
        borderBottom: "1px dotted #666"
      },
      "a:hover": {
        color: "#6bd4c8",
        borderBottom: "none"
      },
      h1: {
        fontSize: "2.5rem",
        color: "#d81e5b",
        marginBottom: "4rem",
        marginTop: "2rem"
      },
      h2: {
        fontSize: "2rem",
        fontWeight: 300,
        color: "#d81e5b",
        borderBottom: "1px solid",
        marginTop: "4rem",
        marginBottom: "1rem"
      },
      h3: {
        color: "#d81e5b"
      },
      blockquote: {
        borderLeft: "solid 4px hsla(41,100%,53%,1)",
        fontStyle: "italic",
        margin: "0 0 2rem 0",
        padding: "0.5em 0 0.5em 2em"
      },
      strong: { fontWeight: 400 },
      code: {
        background: "rgba(143, 143, 143, 0.075)",
        borderRadius: "0.3rem",
        border: "solid 1px rgba(143, 143, 143, 0.075)",
        fontFamily: '"Courier New", monospace',
        fontSize: "0.9em",
        margin: "0 0.25em",
        padding: "0.25em 0.65em",
        display: "inline",
        whiteSpace: "pre-wrap !important"
      }
    };
  }
});

export default typography;
