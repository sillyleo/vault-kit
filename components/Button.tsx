import { styled } from '@stitches/react';

export const Button = styled('button', {
  // base style
  fontFamily: '$body',
  fontWeight: 'bold',
  letterSpacing: '$tight',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5em',
  borderWidth: 0,
  borderRadius: '$full',
  cursor: 'pointer',
  transition: 'transform 0.06s linear',
  lineHeight: 1,
  '&:hover': {
    transform: 'scale(1.02)',
  },

  '&:active': {
    transform: 'scale(0.9)',
  },

  // variants (use as props)
  color: '$whiteA12',

  variants: {
    color: {
      blue: {
        backgroundColor: '$blue9',
        '&:hover': {
          backgroundColor: '$blue10',
        },

        '&:active': {
          backgroundColor: '$blue10',
        },
      },
      tomato: {
        backgroundColor: '$tomato9',
        '&:hover': {
          backgroundColor: '$tomato10',
        },

        '&:active': {
          backgroundColor: '$tomato10',
        },
      },
      grass: {
        backgroundColor: '$grass9',
        '&:hover': {
          backgroundColor: '$grass10',
        },

        '&:active': {
          backgroundColor: '$grass10',
        },
      },
      gray: {
        color: '$sage11',
        backgroundColor: '$sage3',
        '&:hover': {
          backgroundColor: '$sage4',
        },

        '&:active': {
          backgroundColor: '$sage4',
        },
      },
      // For colored background
      whiteA: {
        color: '$blackA12',
        backgroundColor: '$whiteA10',
        backdropFilter: 'blur(10px)',
        '&:hover': {
          backgroundColor: '$whiteA10',
        },

        '&:active': {
          backgroundColor: '$whiteA10',
        },
      },
      // For colored background
      blackA: {
        color: '$whiteA12',
        backgroundColor: '$blackA10',
        backdropFilter: 'blur(10px)',

        '&:hover': {
          backgroundColor: '$blackA10',
        },

        '&:active': {
          backgroundColor: '$blackA10',
        },
      },
    },
    size: {
      '1': {
        fontSize: '$1',
        padding: '$2 $3',
      },
      '2': {
        fontSize: '$2',
        padding: '$2 $4',
      },
      '3': {
        fontSize: '$3',
        padding: '$3 $5',
      },
    },
  },
  defaultVariants: {
    size: '2',
    color: 'gray',
  },
});
