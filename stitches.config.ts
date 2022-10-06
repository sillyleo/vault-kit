import { createStitches } from "@stitches/react";
import {
  gray,
  blue,
  red,
  green,
  grayDark,
  blueDark,
  redDark,
  greenDark,
} from "@radix-ui/colors";
/*
Use stitches as css-in-js solution

-  Doc: https://stitches.dev/blog/using-nextjs-with-stitches

*/

// Setting up default theme
export const { styled, getCssText, globalCss, createTheme } = createStitches({
  theme: {
    colors: {
      ...gray,
      ...blue,
      ...red,
      ...green,
    },
    space: {},
    fontSizes: {},
    fonts: {
      brand: "Modernist,system-ui, sans-serif",
      body: "'Inter','InterVariable',sans-serif",
      heading: "'Inter','InterVariable',,sans-serif",
      mono: "'Space Mono', monospace",
    },
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
  colors: { ...grayDark, ...blueDark, ...redDark, ...greenDark },
});

// css reset
const cssReset = globalCss({
  body: { margin: 0, padding: 0 },
});

cssReset();
