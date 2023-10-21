import 'react-native-gesture-handler';
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Routes } from './src/routes/routes';
import { NavigationContainer, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { MyContextProvider, themeContext } from './src/hooks/themes';
import { useContext } from 'react';
import Toast from 'react-native-toast-message';

export default function App() {


  return (
    //validar login, una vez se haya validado entonces cargar el enrutador de aqui abajo 
    <>
    <MyContextProvider>
     <MainApp/>
     <Toast />
    </MyContextProvider>
   
    </>
    
  );
}



const MainApp = () =>{
  const {modoNocturno,setModoNocturno, handleModoNocturno,themeColors} = useContext(themeContext);

  return(
    <NavigationContainer theme={modoNocturno? themeColors.dark :  themeColors.light} >
    <Routes />
  </NavigationContainer>
  );

}


