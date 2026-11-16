import { useState } from "react"
import { createContext } from "react"

export const themeDataContext=createContext()

const ThemeContext = (props) => {
  const [theme,setTheme]=useState('light')
  return (
    <div>
      <themeDataContext.Provider value={[theme,setTheme]}>
        {props.children}
      </themeDataContext.Provider>
    </div>
  )
}

export default ThemeContext
