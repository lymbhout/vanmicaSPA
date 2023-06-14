import { useContext,createContext,useState } from "react";


const DarkModeContext = createContext() //creando contexto

export const useDarkModeContext = () =>useContext(DarkModeContext) // consulador
export const DarkModerProvider = (props) => { //provedor
    const [darkMode, setDarkMode] = useState(false) //booleano para definri modo oscuro

    const toogleDarkMode = ()=>{
        setDarkMode(!darkMode)
    }
    return(
        <DarkModeContext.Provider value={{darkMode,toogleDarkMode}}>
            {props.children}
        </DarkModeContext.Provider>
    )
}