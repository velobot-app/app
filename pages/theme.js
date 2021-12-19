import React from "react"
import { theme } from "styles/theme"

const Theme = () => {
  return (
    <>
      <h1>Theme Demo</h1>
      <h2>Spacing</h2>
      {Object.keys(theme.space).map((idx) => {
        const { value } = theme.space[idx]
        return (
          <React.Fragment key={idx}>
            {value}
            <div
              style={{
                marginBottom: "0.5rem",
                width: value,
                backgroundColor: "blue"
              }}
            >
              &nbsp;
            </div>
          </React.Fragment>
        )
      })}
    </>
  )
}

export default Theme
