//< = alt +60 > = alt+ 62
import React, {createContext, useState} from "react";
import { DarkTheme, DefaultTheme } from "@react-navigation/native";
import { useEffect } from "react";
export const themeContext = createContext();




export const MyContextProvider = ({children}) => {
const [modoNocturno, setModoNocturno] = useState(false)
const [usuario, setUsuario]= useState(null)

const [clientes, setClientes] = useState([])
const [vehiculos, setVehiculos] = useState([])
const [rentas, setRentas] = useState([])





const themeColors = {
  light: {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      primary: "gray",
      textNotification: '#47b2f5',
      card:'#f0f0f0'

    },
  },
  dark: {
    ...DarkTheme,
    colors: {
      ...DarkTheme.colors,
      primary: "royalblue",
      background:'#181c2c',
      card:'#202c44',
      textNotification: '#f5e347'
    },
  },
};




  const handleModoNocturno = () =>{
    setModoNocturno(!modoNocturno)
  }

return(
  <themeContext.Provider value={{modoNocturno, setModoNocturno, handleModoNocturno,themeColors,setUsuario, usuario, clientes,setClientes,vehiculos,setVehiculos,rentas,setRentas}}>
    {children}
  </themeContext.Provider>
);

}


