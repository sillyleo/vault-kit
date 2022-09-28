import { createStitches } from "@stitches/react";

/*
Use stitches as css-in-js solution

-  Doc: https://stitches.dev/blog/using-nextjs-with-stitches

*/

// Setting up default theme
export const { styled, getCssText, globalCss, createTheme } = createStitches({
  theme: {
    colors: {},
    space: {},
    fontSizes: {},
    fonts: {},
    fontWeights: {},
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {},
    borderStyles: {},
    radii: {},
    shadows: {},
    zIndices: {},
    transitions: {},
  },
});

// Setting up custom theme, the "darkTheme" can be the className
export const darkTheme = createTheme({
  colors: {},
});

// css reset
const cssReset = globalCss({
  body: { margin: 0, padding: 0 },
});

cssReset();
