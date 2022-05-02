import React, { useState, useEffect } from "react"
import { QueryClient, QueryClientProvider } from "react-query"
import { lightTheme, darkTheme, globalCss } from "styles/theme"
import useThemeMode, { ThemeModeProvider } from "hooks/useThemeMode"
import "../node_modules/react-vis/dist/style.css"

const queryClient = new QueryClient()

const App = (props) => (
  <ThemeModeProvider>
    <QueryClientProvider client={queryClient}>
      <ThemedApp {...props} />
    </QueryClientProvider>
  </ThemeModeProvider>
  )

const ThemedApp = ({ Component, pageProps }) => {
  const { themeMode } = useThemeMode()
  const selectedTheme = themeMode === "dark" ? darkTheme : lightTheme

  const globalStyles = globalCss({
    body: {
      backgroundColor: selectedTheme.colors.background.value,
      color: selectedTheme.colors.text.value
    },
    "@dark": {
      ":root:not(.dark-theme)": {
        ...Object.keys(darkTheme.colors).reduce((varSet, currentColorKey) => {
          const currentColor = darkTheme.colors[currentColorKey]
          const currentColorValue =
            currentColor.value.substring(0, 1) === "$"
              ? `$colors${currentColor.value}`
              : currentColor.value

          return {
            [currentColor.variable]: currentColorValue,
            ...varSet
          }
        }, {})
      }
    }
  })

  globalStyles()

  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) {
    return null
  }

  return (
    <div className={selectedTheme}>
      <Component {...pageProps} />
    </div>
  )
}

export default App
