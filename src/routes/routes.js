import { createDrawerNavigator } from "@react-navigation/drawer";
import { Login } from "../components/login/Login";
import { Home } from "../components/Home/Home";
import { Navbar } from "../components/shared/Navbar/Navbar";
import { Cliente } from "../components/Cliente/Cliente";
import { Equipos } from "../components/Equipos/Equipos";
import { Satisfaccion } from "../components/Satisfaccion/Satisfaccion";
import { useContext } from "react";
import { themeContext } from "../hooks/themes";
import { Registrar } from "../components/Registrar/Registrar";
import { Carro } from "../components/Carro/Carro";
import { Renta } from "../components/Renta/Renta";
const Router = createDrawerNavigator(); 

export const Routes = () =>{

    const {usuario, modoNocturno, themeColors} = useContext(themeContext)

    //cambiar el contexto del usuario para así una vez se haya algo en el contexto de usuario entonces cambiar mostrar cierto botón en el registrar para retornar
     return(
        <Router.Navigator initialRouteName={'Home'}  drawerContent={props => <Navbar {...props} /> }>
            {/* <Router.Navigator initialRouteName={!usuario?'Login':'Home'}  drawerContent={props =><Navbar {...props} />}> */}
            <Router.Screen name="Home"  options={{title: "Inicio", headerTitleAlign:'center',headerTitle:'', headerStyle:{backgroundColor:modoNocturno? '#202c44' : themeColors.light.colors.background, borderBottomWidth:3,borderTopWidth:30,borderTopColor: 'gray'}}} component={Home} />
            <Router.Screen name="Cliente"  options={{title: "Cliente",headerTitleAlign:'center',headerTitle:'', headerStyle:{backgroundColor:modoNocturno? '#202c44' : themeColors.light.colors.background, borderBottomWidth:3,borderTopWidth:30,borderTopColor: 'gray'}}} component={Cliente} />
            <Router.Screen name="Carro"  options={{title: "Carro",headerTitleAlign:'center',headerTitle:'', headerStyle:{backgroundColor:modoNocturno? '#202c44' : themeColors.light.colors.background, borderBottomWidth:3,borderTopWidth:30,borderTopColor: 'gray'}}} component={Carro} />
            <Router.Screen name="Renta"  options={{title: "Renta",headerTitleAlign:'center',headerTitle:'', headerStyle:{backgroundColor:modoNocturno? '#202c44' : themeColors.light.colors.background, borderBottomWidth:3,borderTopWidth:30,borderTopColor: 'gray'}}} component={Renta} />
            <Router.Screen name="Crear usuario"  options={!usuario? {headerShown:false, swipeEnabled:false}: null}  component={Registrar} />
            {/* <Router.Screen name="Equipos" options={{title:"Equipos", headerTitleAlign:'center', headerTitle:'', headerStyle: {backgroundColor:modoNocturno? '#202c44' : themeColors.light.colors.background, borderBottomWidth:3,borderTopWidth:30,borderTopColor: 'gray'}}} component={Equipos}/> */}
            {/* <Router.Screen name="Satisfaccion" options={{title:"Satisfaccion", headerTitleAlign:'center', headerTitle:'', headerStyle: {backgroundColor:modoNocturno? '#202c44' : themeColors.light.colors.background, borderBottomWidth:3,borderTopWidth:30,borderTopColor: 'gray'}}} component={Satisfaccion}/> */}
            <Router.Screen name="Cerrar Sesion" options={{headerShown:false, swipeEnabled:false}}  component={Login} />
            {/* <Router.Screen name="Cerrar Sesion" component={Login} /> */}
            
        </Router.Navigator>
    )
}