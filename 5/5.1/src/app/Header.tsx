import {useContext} from "react";
import {ThemeContext} from "@/stores/UseContextStore"

export const Header = () => {
  const {theme, toggleTheme} = useContext(ThemeContext)
  
  return(
    <div>
      <p>Сейчас включена тема: {theme === 'light' ? "Светлая" : "Тёмная"} <button onClick={toggleTheme}>Изменить тему</button> </p>
    </div>
  )
}
