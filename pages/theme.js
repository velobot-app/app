import React from "react"
import { theme } from "styles/theme"
import Button from "components/Button"

const Theme = () => {
  return <>
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

    <h2>Buttons</h2>
    {(() => {
      const css = { marginRight: "$2" }
      return (
        <>
          <h3>Primary</h3>
          <Button color="primary" css={css}>Button</Button>
          <Button color="primary" size="sm" css={css}>Button Small</Button>
          <Button color="primary" pill css={css}>Button Pill</Button>
          <Button color="primary" outline css={css}>Button Outline</Button>
          <Button color="primary" outline pill css={css}>Button Outline Pill</Button>
          <h3>Secondary</h3>
          <Button color="secondary" css={css}>Button</Button>
          <Button color="secondary" size="sm" css={css}>Button Small</Button>
          <Button color="secondary" pill css={css}>Button Pill</Button>
          <Button color="secondary" outline css={css}>Button Outline</Button>
          <Button color="secondary" outline pill css={css}>Button Outline Pill</Button>
          <h3>Success</h3>
          <Button color="success" css={css}>Button</Button>
          <Button color="success" size="sm" css={css}>Button Small</Button>
          <Button color="success" pill css={css}>Button Pill</Button>
          <Button color="success" outline css={css}>Button Outline</Button>
          <Button color="success" outline pill css={css}>Button Outline Pill</Button>
          <h3>Warn</h3>
          <Button color="warn" css={css}>Button</Button>
          <Button color="warn" size="sm" css={css}>Button Small</Button>
          <Button color="warn" pill css={css}>Button Pill</Button>
          <Button color="warn" outline css={css}>Button Outline</Button>
          <Button color="warn" outline pill css={css}>Button Outline Pill</Button>
          <h3>Info</h3>
          <Button color="info" css={css}>Button</Button>
          <Button color="info" outline css={css}>Button Outline</Button>
          <Button color="info" size="sm" css={css}>Button Small</Button>
          <Button color="info" pill css={css}>Button Pill</Button>
          <Button color="info" outline css={css}>Button Outline</Button>
          <Button color="info" outline pill css={css}>Button Outline Pill</Button>
          <h3>Danger</h3>
          <Button color="danger" css={css}>Button</Button>
          <Button color="danger" size="sm" css={css}>Button Small</Button>
          <Button color="danger" pill css={css}>Button Pill</Button>
          <Button color="danger" outline css={css}>Button Outline</Button>
          <Button color="danger" outline pill css={css}>Button Outline Pill</Button>
        </>
      )
    })()}
  </>
}

export default Theme
