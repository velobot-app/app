import { styled } from "styles/theme"

const Button = styled("button", {
  cursor: "pointer",
  borderRadius: "$normal",
  border: "0",
  borderWidth: "$normal",
  borderStyle: "solid",
  backgroundColor: "$$backgroundColor",
  borderColor: "transparent",
  color: "$$color",
  fontWeight: "regular",
  "&:hover": {
    backgroundColor: "$$hoverColor"
  },
  "&:focus:active": {
    backgroundColor: "$$backgroundColor"
  },
  "&:focus:active:not(:hover)": {
    backgroundColor: "$$hoverColor"
  },
  defaultVariants: {
    color: "primary",
    outline: false,
    pill: false,
    size: "md"
  },
  variants: {
    color: {
      danger: {
        $$color: "$colors$text",
        $$backgroundColor: "$colors$danger",
        $$hoverColor: "$colors$dangerLighter",
        $$subtleColor: "$colors$dangerLightest",
        ":root .dark-theme &": {
          $$subtleColor: "$colors$dangerDarkest"
        }
      },
      info: {
        $$color: "$colors$textContrast",
        $$backgroundColor: "$colors$info",
        $$hoverColor: "$colors$infoLighter",
        $$subtleColor: "$colors$infoLightest",
        ":root .dark-theme &": {
          $$subtleColor: "$colors$infoDarkest"
        }
      },
      primary: {
        $$color: "$colors$text",
        $$backgroundColor: "$colors$primary",
        $$hoverColor: "$colors$primaryLighter",
        $$subtleColor: "$colors$primaryLightest",
        ":root .dark-theme &": {
          $$subtleColor: "$colors$primaryDarkest"
        }
      },
      secondary: {
        $$color: "$colors$text",
        $$backgroundColor: "$colors$secondary",
        $$hoverColor: "$colors$secondaryLighter",
        $$subtleColor: "$colors$secondaryLightest",
        ":root .dark-theme &": {
          $$subtleColor: "$colors$secondaryDarkest"
        }
      },
      success: {
        $$color: "$colors$text",
        $$backgroundColor: "$colors$success",
        $$hoverColor: "$colors$successLighter",
        $$subtleColor: "$colors$successLightest",
        ":root .dark-theme &": {
          $$subtleColor: "$colors$successDarkest"
        }
      },
      warn: {
        $$color: "$colors$textContrast",
        $$backgroundColor: "$colors$warn",
        $$hoverColor: "$colors$warnLighter",
        $$subtleColor: "$colors$warnLightest",
        ":root .dark-theme &": {
          $$subtleColor: "$colors$warnDarkest"
        }
      }
    },
    pill: {
      true: {
        borderRadius: "$pill"
      }
    },
    outline: {
      true: {
        color: "$$backgroundColor",
        backgroundColor: "transparent",
        borderColor: "$$backgroundColor",
        "&:hover": {
          backgroundColor: "$$subtleColor"
        },
        "&:focus:active:not(:hover)": {
          backgroundColor: "$$subtleColor"
        },
        "&:focus:active": {
          backgroundColor: "transparent"
        },
        ":root .dark-theme &:hover": {
          color: "white"
        },
        ":root .dark-theme &:focus:active:not(:hover)": {
          color: "white"
        }
      }
    },
    size: {
      sm: {
        fontSize: "$sm",
        padding: "$1 $2"
      },
      md: {
        fontSize: "$md",
        padding: "$2 $3"
      }
    }
  }
})

export default Button
