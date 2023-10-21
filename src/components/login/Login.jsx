import { useContext, useState } from "react";
import { View, Image, StyleSheet } from "react-native";
import { Text,TextInput, Title, Button } from "react-native-paper";
import cardinalLogo from '../../img/imagotipoCardinal.png'
import { loginApi } from "../../api/users";
import { themeContext } from "../../hooks/themes";
import { alerta } from "../../utils/alerts";
import lanyardCardinal from '../../img/lanyard-Cardinal.png'
import { auth } from "../../database/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'


export const Login = ({navigation}) =>{
    const [correo, setCorreo] = useState(null)
    const [password, setPassword] = useState(null)
    const {setUsuario,usuario} = useContext(themeContext)
    
   

    const handleLogin = async() =>{
        signInWithEmailAndPassword(auth,correo, password)
        .then((userCredential)=>{
            alerta('success','Login Exitoso', `Hola ${correo}`)
            setCorreo('')
            setPassword('')
            navigation.navigate('Home')
        }).catch((error) => {
            // Manejo de errores
            console.log(error);
            alerta('error','Login Erroneo', `Usuario y/o contraseña incorrectos`)
          });
            
        // }else{
        //     console.log(response);
        //     alerta('error','Error', 'Usuario y/o contraseña incorrecto/s')
        // }
        
    }

    const register = () =>{
        navigation.navigate('Crear usuario')
    }

  

    return(
        <View style={{backgroundColor:'white', alignItems:'center',display:'flex', flexDirection:'column',marginTop:25,paddingBottom:'80%',paddingTop:'50%'}}>

        {/* <Image source={lanyardCardinal} style={{width:'50%',height:'30%',marginLeft:30 }} /> */}

        <View style={{display:'flex', justifyContent:'center', alignItems:'center', backgroundColor: 'white',width:300, height:'50vh', paddingTop:30, borderWidth: 2, borderRadius: 30, paddingBottom:30 }}>
            {/* <Image source={cardinalLogo} style={{width:200, height:100,resizeMode:'contain'}}/> */}
            <Title>Bienvenido</Title>

            <TextInput 
            label='Usuario'
            activeUnderlineColor="royalblue"
            style={loginStyles.input}
            value={correo}
            onChangeText={(value) =>{setCorreo(value)}}/>

            <TextInput 
            label='Contraseña'
            style={loginStyles.input}
            activeUnderlineColor="royalblue"
            value={password}
            secureTextEntry={true}
            onChangeText={(value) =>{setPassword(value)}}/>

            <Button icon="login" mode="elevated" style={{marginTop:10, marginBottom:30}} onPress={()=> handleLogin()}>Iniciar Sesion</Button>
           
            <Button icon="login" mode="elevated" style={{marginTop:10, marginBottom:30}} onPress={()=> register()}>Registrarse</Button>

        </View>
        </View>
    );
}


const loginStyles = StyleSheet.create({
    
    input:{
        width:240,
        margin:5
    }
})