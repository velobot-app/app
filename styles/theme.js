import { createStitches} from "@stitches/react"

const baseColors = {
  white: "#ffffff",
  black: "#000000",
}

const { createTheme, styled, css, theme } = createStitches({
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
    fontSizes: {},
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
  }
})

const lightTheme = createTheme("light-theme", {
  colors: {}
})

const darkTheme = createTheme("dark-theme", {
  colors: {}
})

export { styled, css, theme, lightTheme, darkTheme }
