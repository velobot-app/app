/* For consistency:
 *  - When defining color aliases, use {tag}{variant}{pseudo-selector}, e.g.
 *    buttonPrimaryHover
 */

import { createStitches} from "@stitches/react"

const baseColors = {
  white: "#ffffff",
  black: "#000000",

  black400: "#726F7C",
  black500: "#4C4C5A",
  black600: "#292F38",
  black900: "#121417",

  blue100: "#F7FCFF",
  blue200: "#E1F1FE",
  blue300: "#CCE5FB",
  blue400: "#B8D8F8",
  blue500: "#A5CAF4",
  blue600: "#99BFEB",
  blue700: "#8EB4E1",
  blue800: "#82AAD6",
  blue900: "#779FCA",

  gray100: "#FBFBFC",
  gray200: "#EFEFF4",
  gray300: "#E5E5EB",
  gray400: "#DADAE2",
  gray500: "#D0D0D9",
  gray600: "#B6B8BF",
  gray700: "#9CA0A5",
  gray800: "#83878A",
  gray900: "#696E70",

  green100: "#F6FFEE",
  green200: "#DAFABB",
  green300: "#BDEF8F",
  green400: "#A1DC6A",
  green500: "#85C34C",
  green600: "#7ABB40",
  green700: "#70B134",
  green800: "#65A62A",
  green900: "#5B9A21",

  red100: "#FFEEED",
  red200: "#FFBAB6",
  red300: "#FF9089",
  red400: "#FF6F67",
  red500: "#FF574F",
  red600: "#EB473F",
  red700: "#D83931",
  red800: "#C42D24",
  red900: "#B02219",

  yellow100: "#FFFACF",
  yellow200: "#FFF29E",
  yellow300: "#FFE972",
  yellow400: "#FFDD49",
  yellow500: "#FFCF24",
  yellow600: "#F1C820",
  yellow700: "#E3C11D",
  yellow800: "#D5B919",
  yellow900: "#C7B116"
}

const { createTheme, styled, css, theme, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      ...baseColors
    },
    space: [
      "0rem",
      "0.25rem",
      "0.5rem",
      "0.75rem",
      "1rem",
      "1.5rem",
      "2rem",
      "3rem",
      "4rem",
      "6rem",
    ],
    fontSizes: {
      sm: "14px",
      md: "16px",
      lg: "20px",
      xl: "24px"
    },
    fontWeights: {
      regular: "400",
      bold: "600"
    },
    lineHeights: {},
    letterSpacings: {},
    sizes: {},
    borderWidths: {
      normal: "0.15rem",
      heavy: "0.25rem"
    },
    borderStyles: {},
    radii: {
      square: "0",
      normal: "0.225rem",
      soft: "0.4rem",
      pill: "100rem",
      circle: "100%"
    },
    shadows: {},
    zIndices: {},
    transitions: {},
  }
})

const lightTheme = createTheme("light-theme", {
  colors: {
    text: baseColors.black,
    textContrast: baseColors.gray200,
    background: baseColors.white,
    dangerDarkest: baseColors.red900,
    dangerDarker: baseColors.red600,
    danger: baseColors.red500,
    dangerLighter: baseColors.red400,
    dangerLightest: baseColors.red100,
    infoDarkest: baseColors.gray900,
    infoDarker: baseColors.gray600,
    info: baseColors.gray500,
    infoLighter: baseColors.gray400,
    infoLightest: baseColors.gray100,
    primaryDarkest: baseColors.blue900,
    primaryDarker: baseColors.blue600,
    primary: baseColors.blue500,
    primaryLighter: baseColors.blue400,
    primaryLightest: baseColors.blue100,
    secondaryDarkest: baseColors.black700,
    secondaryDarker: baseColors.black600,
    secondary: baseColors.black500,
    secondaryLighter: baseColors.black400,
    secondaryLightest: baseColors.gray200,
    successDarkest: baseColors.green900,
    successDarker: baseColors.green600,
    success: baseColors.green500,
    successLighter: baseColors.green400,
    successLightest: baseColors.green100,
    warnDarkest: baseColors.yellow900,
    warnDarker: baseColors.yellow600,
    warn: baseColors.yellow500,
    warnLighter: baseColors.yellow400,
    warnLightest: baseColors.yellow100
  }
})

const darkTheme = createTheme("dark-theme", {
  colors: {
    text: baseColors.gray200,
    textContrast: baseColors.black600,
    background: baseColors.black900,
    dangerDarkest: baseColors.red900,
    dangerDarker: baseColors.red600,
    danger: baseColors.red500,
    dangerLighter: baseColors.red400,
    dangerLightest: baseColors.red100,
    infoDarkest: baseColors.gray900,
    infoDarker: baseColors.gray600,
    info: baseColors.gray500,
    infoLighter: baseColors.gray400,
    infoLightest: baseColors.gray100,
    primaryDarkest: baseColors.blue900,
    primaryDarker: baseColors.blue700,
    primary: baseColors.blue700,
    primaryLighter: baseColors.blue600,
    primaryLightest: baseColors.blue300,
    secondaryDarkest: baseColors.black700,
    secondaryDarker: baseColors.black600,
    secondary: baseColors.black500,
    secondaryLighter: baseColors.black400,
    secondaryLightest: baseColors.gray200,
    successDarkest: baseColors.green900,
    successDarker: baseColors.green600,
    success: baseColors.green500,
    successLighter: baseColors.green400,
    successLightest: baseColors.green100,
    warnDarkest: baseColors.yellow900,
    warnDarker: baseColors.yellow600,
    warn: baseColors.yellow500,
    warnLighter: baseColors.yellow400,
    warnLightest: baseColors.yellow100
  }
})

export { styled, css, theme, lightTheme, darkTheme, getCssText, globalCss }
