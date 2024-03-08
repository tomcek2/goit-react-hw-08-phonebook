import { defineStyle, defineStyleConfig } from '@chakra-ui/react';

// const solid = defineStyle({
//     bg: 'teal.400',
//     color: 'white',
//     fontFamily: 'tahoma',
//     letterSpacing: '1px',
//     fontWeight: '600',
//     textTransform: 'uppercase',
//     borderRadius: 'base',
//   })
  
//   export const buttonTheme = defineStyleConfig({
//     variants: { solid },
//   })

export const Button = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    bg: 'teal.400',
    color: 'white',
    fontFamily: 'tahoma',
    letterSpacing: '1px',
    fontWeight: '600',
    textTransform: 'uppercase',
    borderRadius: 'base',
  },
  // Two sizes: sm and md
  sizes: {
    sm: {
      fontSize: 'sm',
      px: 2,
      py: 1,
    },
    md: {
      fontSize: 'md',
      px: 3,
      py: 2,
    },
  },
  // Two variants: outline and solid
  
    solid: {
      bg: 'teal.400',
      color: 'white',
    },
  },
  // The default size and variant values
  defaultProps: {
    size: 'md',
    variant: 'solid',
  },
});
