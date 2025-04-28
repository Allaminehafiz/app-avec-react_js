import React from 'react'
import { useState } from 'react'


function DarkMode() {
    const [themeMode, setThemeMode] = useState ("light") 
    let clickedClasse = "clicked"
    const body = document.body
    const lightTheme = "light"
    const darkTheme = "dark"
    let theme

    if (localStorage){
        theme = localStorage.getItem("theme")
       
    }
    if ( theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }
    const switchTheme = e =>{
        if(theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme)
            e.target.classList.remove(clickedClasse)
            localStorage.setItem("theme", "light")
            theme = lightTheme
        } else {
            body.classList.replace(lightTheme, darkTheme)
            e.target.classList.add(clickedClasse)
            localStorage.setItem("theme", "dark")
            theme = darkTheme

        }
        setThemeMode(theme)
    }
  return (
    <button className= { theme === "dark" ?  clickedClasse : ""} id="darkmode" onClick={e => switchTheme(e)}>DarkMode</button>
  )
}

export default DarkMode