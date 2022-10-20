import React, { useEffect } from 'react';
import { styled, VariantProps } from '../stitches.config';
import * as SwitchPrimitive from '@radix-ui/react-switch';
// Styling

const StyledSwitch = styled(SwitchPrimitive.Root, {
  boxSizing: 'border-box',
  width: 45,
  height: 28,
  overflow: 'visible',
  position: 'relative',
  borderRadius: 50,
  display: 'inline-flex',
  background: 'transparent',
  cursor: 'pointer',
  transition: 'all 0.3s ease',
  // can be used to set up variants!
  // variants: {
  //   isBig: {
  //     true: {
  //       backgroundColor: 'red',
  //       width: 65,
  //       height: 48,
  //     },
  //   },
  // },
});
// [data-value*="foo"]
const StyledThumb = styled(SwitchPrimitive.Thumb, {
  boxSizing: 'border-box',
  position: 'absolute',
  transition: 'all 0.5s cubic-bezier(.33,.21,0,1.07)',
  width: 22,
  height: 22,
  boxShadow:
    '0px 0.3619381243333773px 0.6514886238000792px -1px rgba(0, 0, 0, 0.19), 0px 1.3741263429785435px 2.4734274173613784px -2px rgba(0, 0, 0, 0.18288), 0px 6px 10.8px -3px rgba(0, 0, 0, 0.132)',
  backgroundColor: 'white',
  overflow: 'visible',
  borderRadius: 12,
  border: '1px solid $colors$slate8',
  '[data-state=unchecked]:hover &': {
    border: '1px solid $colors$blue9',
  },
  '[data-state=unchecked]:active &': {
    border: '1px solid $colors$blue9',
    width: 26,
    height: 22,
  },
  '[data-state=checked]:hover &': {
    border: 'none',
  },
  '[data-state=checked]:active &': {
    width: 26,
    height: 22,
    left: 19,
    border: '1px solid $colors$blue9',
  },
  '&[data-state=unchecked]': {
    top: 3,
    left: 3,
  },
  '&[data-state=checked]': {
    top: 3,
    left: 20,
    border: 'none',
  },
  // can be used to style variants!
  '[class*=isBig] &': {
    background: 'green',
  },
});

const StyledBackground = styled('div', {
  transition: 'all 0.2s ease-in-out',
  transitionDelay: '0ms',
  boxSizing: 'border-box',
  position: 'absolute',
  width: 37,
  height: 6,
  overflow: 'hidden',
  borderRadius: 50,
  '[data-state=checked] &': {
    backgroundColor: '$blue9',
    top: 0,
    left: 0,
    width: 45,
    height: 28,
  },
  '[data-state=unchecked] &': {
    backgroundColor: '$slate8',
    top: 11,
    left: 4,
    width: 37,
    height: 6,
  },
  '[data-state=checked]:active &': {
    backgroundColor: '$slate8',
    opacity: 0.75,
    top: 3,
    left: 0,
    width: 45,
    height: 22,
  },
  '[data-state=unchecked]:active &': {
    backgroundColor: '$blue9',
    opacity: 0.75,
    top: 8,
    left: 4,
    width: 37,
    height: 12,
  },
});

// Type

// For custom variants deinfed in the "variants" above
type SwitchVariants = VariantProps<typeof StyledSwitch>;
// For standard component props in https://www.radix-ui.com/docs/primitives/components/switch
type SwitchPrimitiveProps = React.ComponentProps<typeof SwitchPrimitive.Root>;
// Combine the two types
type SwitchProps = SwitchPrimitiveProps & SwitchVariants;

// Export

// Rename and expose all components
export const SwitchContainer = StyledSwitch;
export const SwitchThumb = StyledThumb;
export const SwitchBackground = StyledBackground;

// Export the single Switch component
export const Switch = React.forwardRef<
  React.ElementRef<typeof StyledSwitch>,
  SwitchProps
>((props, forwardedRef) => {
  return (
    <SwitchContainer {...props} ref={forwardedRef}>
      <SwitchBackground />
      <SwitchThumb className="box" />
    </SwitchContainer>
  );
});
