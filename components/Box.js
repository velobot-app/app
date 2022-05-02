import { styled } from "styles/theme"

const Box = styled("div", {
  variants: {
    flex: {
      true: {
        display: "flex"
      }
    },
    flexColumn: {
      true: {
        flexDirection: "column"
      }
    }
  }
})

export default Box
