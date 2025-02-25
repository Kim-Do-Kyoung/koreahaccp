import { createTheme, CSSVariablesResolver, rem } from '@mantine/core';

export const theme = createTheme({
  fontFamily: 'Pretendard',
  black: '#333333',
  white: '#ffffff',
  headings: {
    sizes: {
      h1: { fontSize: rem(32), lineHeight: rem(44), fontWeight: '600' },
      h2: { fontSize: rem(28), lineHeight: rem(40), fontWeight: '600' },
      h3: { fontSize: rem(24), lineHeight: rem(34), fontWeight: '600' },
      h4: { fontSize: rem(20), lineHeight: rem(28), fontWeight: '600' },
      h5: { fontSize: rem(18), lineHeight: rem(28), fontWeight: '600' },
      h6: { fontSize: rem(16), lineHeight: rem(24), fontWeight: '600' },
    },
  },
  fontSizes: {
    lg: rem(18),
    md: rem(16),
    sm: rem(14),
    xs: rem(13),
  },
  lineHeights: {
    lg: rem(28),
    md: rem(24),
    sm: rem(22),
    xs: rem(18),
  },
  other: {
    colorGray1: '#767676',
    colorGray2: '#A1A19F',
    colorGray3: '#CCCCCC',
    colorGray4: '#D9D9D9',
    colorGray5: '#F2F2F2',
    colorGray6: '#F8F8F8',
    colorBlue: '#387ADF',
    colorBlue2: '#258DED',
    colorYR: '#F04D37',
    colorOrange: '#FF9310',
    colorIndigo: '#2D3250',
    container: '#FFF6F0',
    borderLight: 'rgba(0, 0, 0, 0.10)',
    borderDark: 'rgba(0, 0, 0, 0.16)',
    backgroundColorOrange: '#FFF7F2',
  },
});

export const cssResolver: CSSVariablesResolver = (providedTheme) => ({
  variables: {
    '--mantine-gray-scale-gy-1': providedTheme.other.colorGray1,
    '--mantine-color-disabled': providedTheme.other.colorGray4,
    '--mantine-color-blue': providedTheme.other.colorBlue,
    '--mantine-color-orange': providedTheme.other.colorOrange,
    '--mantine-color-indigo': providedTheme.other.colorIndigo,
    '--mantine-color-button-indigo': providedTheme.other.colorIndigo,
    '--mantine-color-button-red': providedTheme.other.colorYR,
    '--mantine-color-button-orange': providedTheme.other.colorOrange,
    '--mantine-color-button-gray': providedTheme.other.colorGray1,
    '--mantine-color-rounded-button-blue': providedTheme.other.colorBlue2,
    '--mantine-background-color-orange': providedTheme.other.backgroundColorOrange,
    '--mantine-background-color-gray': providedTheme.other.colorGray5,
    '--mantine-border-color-gray': providedTheme.other.colorGray2,
    '--mantine-font-size-sm': providedTheme.fontSizes.sm,
    '--mantine-font-size-md': providedTheme.fontSizes.md,
    '--mantine-font-size-lg': providedTheme.fontSizes.lg,
    '--mantine-font-size-xs': providedTheme.fontSizes.xs,
  },
  light: {
    '--mantine-box-shadow': providedTheme.other.borderLight,
  },
  dark: {
    '--mantine-box-shadow': providedTheme.other.borderDark,
  },
});
