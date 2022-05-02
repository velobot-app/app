import { createContext, useContext, useReducer } from "react"

export const ThemeModeContext = createContext()

export const ThemeModeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useReducer((currentMode, newMode) => {
    switch (mode) {
      case "light":
      case "dark":
        window.localStorage.setItem("theme", JSON.stringify(newMode))
        return newMode
      default:
        return currentMode
    }
  }, getInitialThemePreference())

  return (
    <ThemeModeContext.Provider value={{ themeMode, setThemeMode }}>
      {children}
    </ThemeModeContext.Provider>
  )
}

const getInitialThemePreference = () => {
  if (typeof window === "undefined") {
    return null
  }

  const storedTheme = window.localStorage.getItem("theme")
  if (typeof storedTheme === "string") {
    return JSON.parse(storedTheme)
  }

  const mql = window.matchMedia("(prefers-color-scheme: dark)")
  const hasPreference = typeof mql.matches === "boolean"
  if (hasPreference) {
    return mql.matches ? "dark" : "light"
  }

  return "light"
}

const useThemeMode = () => {
  return useContext(ThemeModeContext)
}

export default useThemeMode
