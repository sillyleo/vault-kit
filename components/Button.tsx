import { styled } from "@stitches/react";

export const Button = styled("button", {
  // base style
  fontFamily: "$body",
  fontWeight: "bold",
  letterSpacing: "$tight",
  display: "inline-flex",
  alignItems: "center",
  gap: "0.5em",
  borderWidth: 0,
  borderRadius: "$full",
  cursor: "pointer",
  transition: "transform 0.06s linear",

  "&:hover": {
    transform: "scale(1.02)",
  },

  "&:active": {
    transform: "scale(0.9)",
  },

  // variants (use as props)

  variants: {
    color: {
      blue: {
        backgroundColor: "$blue9",
        color: "$whiteA12",
        "&:hover": {
          backgroundColor: "$blue10",
        },

        "&:active": {
          backgroundColor: "$blue10",
        },
      },
      tomato: {
        backgroundColor: "$tomato9",
        color: "$whiteA12",
        "&:hover": {
          backgroundColor: "$tomato10",
        },

        "&:active": {
          backgroundColor: "$tomato10",
        },
      },
    },
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
        padding: "$2 $5",
      },
    },
  },
  defaultVariants: {
    size: "2",
    color: "blue",
  },
});
