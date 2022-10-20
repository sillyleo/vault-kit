import { styled } from '@stitches/react';

export const Button = styled('button', {
  // base style
  fontFamily: '$body',
  fontWeight: 600,
  letterSpacing: '$tight',
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0.5em',
  borderWidth: 0,
  borderRadius: '$1',
  cursor: 'pointer',
  transition: 'transform 0.06s linear',
  lineHeight: 1,
  '&:hover': {
    transform: 'scale(1.02)',
  },

  '&:active': {
    transform: 'scale(0.98)',
  },

  color: '$buttonLabelWhite',

  // variants (use as props)
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
      yellow: {
        color: '$buttonLabelBlack',

        backgroundColor: '$yellow9',
        '&:hover': {
          backgroundColor: '$yellow10',
        },

        '&:active': {
          backgroundColor: '$yellow10',
        },
      },
      red: {
        backgroundColor: '$red9',
        '&:hover': {
          backgroundColor: '$red10',
        },

        '&:active': {
          backgroundColor: '$red10',
        },
      },

      gray: {
        color: '$buttonLabelBlackAdaptive',
        backgroundColor: '$slate3',
        '&:hover': {
          backgroundColor: '$slate4',
        },

        '&:active': {
          backgroundColor: '$slate4',
        },
      },
      // For colored background
      whiteA: {
        color: '$buttonLabelBlackAdaptive',

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
        height: 30,
      },
      '2': {
        fontSize: '$2',
        padding: '$2 $4',
        height: 32,
      },
      '3': {
        fontSize: '$3',
        padding: '$3 $5',
        height: 38,
      },
    },
  },
  defaultVariants: {
    size: '2',
    color: 'gray',
  },
});
