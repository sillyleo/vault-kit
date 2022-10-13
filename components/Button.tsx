import { styled } from "@stitches/react";

export const Button = styled("button", {
  // base style
  fontFamily: "$body",
  fontWeight: "bold",
  letterSpacing: "$tight",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5em",
  backgroundColor: "$blue9",
  borderColor: "$blue9",
  color: "$blue2",
  borderWidth: 0,
  borderRadius: "$full",
  cursor: "pointer",
  transition: "transform 0.2s linear",

  "&:hover": {
    backgroundColor: "$blue10",
    transform: "scale(1.02)",
  },

  "&:active": {
    backgroundColor: "$blue10",
    transform: "scale(0.98)",
  },

  // variants (use as props)

  variants: {
    color: {},
    size: {
      "1": {
        fontSize: "$1",
        padding: "$1 $2",
      },
      "2": {
        fontSize: "$3",
        padding: "$2 $3",
      },
      "3": {
        fontSize: "$4",
        padding: "$2 $4",
      },
    },
  },
  defaultVariants: {
    size: "2",
  },
});
