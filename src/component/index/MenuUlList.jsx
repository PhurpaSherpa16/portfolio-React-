import React from 'react'
import Content from '../../assets/data/Content.json'
import { useTheme } from '../themeHandler/ThemeProvider';
import {useLocation, useNavigate } from 'react-router-dom';

export default function MenuUlList({handleMenuOpen}) {
    const {theme} = useTheme()
    const pathName = useLocation().pathname
    const navigation = useNavigate()

    const navigationHandle = (props) =>{
        console.log(props)
        handleMenuOpen()
        navigation(props)
    }

  return (
    <ul className="grid h-full">
            {Content.navbarMenu.map((item, index) => {
              const isActive = pathName === item.path;
              const iconFile =
                theme === "light" ? isActive ? `${item.icon}Dark.png`: `${item.icon}.png`     // light + inactive
                  : isActive? `${item.icon}Dark.png`: `${item.icon}Dark.png`
              return (
                <li
                  key={index}
                  className={`button px-4 md:px-8 md:py-2 relative overflow-hidden
                    ${isActive 
                      ? "bg-gradient-to-r from-[var(--CTAbuttonColor1)] to-[var(--CTAbuttonColor2)] gradient-border" 
                      : "before:absolute before:inset-0 before:bg-[var(--primaryHoverColor)] before:scale-x-0 hover:before:scale-x-100 before:transition-transform before:duration-300 before:origin-left"}`}>
                  <button onClick={()=>navigationHandle(item.path)}
                    className={`relative p-4 flex items-center cursor-pointer gap-8
                      ${theme === "light"
                        ? isActive ? "text-white" : "text-black"
                        : isActive ? "text-white" : "text-white"}`}>
                    <img src={`/icons/${iconFile}`} alt="icons" className="h-6 md:h-8 w-6 md:w-8"/>
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
  )
}
