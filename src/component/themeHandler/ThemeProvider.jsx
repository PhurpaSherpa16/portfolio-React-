import {createContext, useContext, useEffect, useState } from 'react'

const ThemeContext = createContext()

export default function ThemeProvider({children}){
    const [theme, setTheme] = useState(()=>(
        localStorage.getItem('theme') ||'light'))

    useEffect(()=>{
        document.body.setAttribute('data-theme', theme)
        localStorage.setItem('theme', theme)
    },[theme])
    const toggleThemeMode = ()=>setTheme((p)=>(p==='light'?'dark':'light'))

  return (
    <ThemeContext.Provider value={{theme, toggleThemeMode}}>
        {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = ()=> useContext(ThemeContext)
