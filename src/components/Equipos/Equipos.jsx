import { useContext, useState } from "react";
import { View } from "react-native";
import { Text } from "react-native-paper";
import { themeContext } from "../../hooks/themes";
import { StyleSheet } from "react-native";
import {TextInput} from "react-native-paper";

export const Equipos = () =>{

    const {modoNocturno, themeColors} = useContext(themeContext)

    const [equipo, setEquipo] = useState(null)
    const [fabricante, setFabricante] = useState(null)
    const [modelo, setModelo] = useState(null)
    const [serial, setSerial] = useState(null)
    const [ubicacion, setUbicacion] = useState(null)
    const [identificacion, setIdentificacion] = useState(null)

    return(
        <View>
            <Text style={{textAlign:'center', color: modoNocturno? themeColors.dark.colors.text : themeColors.light.colors.text}}>Equipos</Text>

            <View style={{alignItems:'center'}}>

            <TextInput 
            label='Equipo'
            activeUnderlineColor="royalblue"
            style={equipoStyles.input}
            value={equipo}
            onChangeText={(value) =>{setEquipo(value)}}/>

            <TextInput 
            label='Fabricante'
            activeUnderlineColor="royalblue"
            style={equipoStyles.input}
            value={fabricante}
            onChangeText={(value) =>{setFabricante(value)}}/>

            <TextInput 
            label='Modelo'
            activeUnderlineColor="royalblue"
            style={equipoStyles.input}
            value={modelo}
            onChangeText={(value) =>{setModelo(value)}}/>

            <TextInput 
            label='Serial'
            activeUnderlineColor="royalblue"
            style={equipoStyles.input}
            value={serial}
            onChangeText={(value) =>{setSerial(value)}}/>

            <TextInput 
            label='Ubicacion'
            activeUnderlineColor="royalblue"
            style={equipoStyles.input}
            value={ubicacion}
            onChangeText={(value) =>{setUbicacion(value)}}/>

            <TextInput 
            label='Identificacion'
            activeUnderlineColor="royalblue"
            style={equipoStyles.input}
            value={identificacion}
            onChangeText={(value) =>{setIdentificacion(value)}}/>
            </View>
        </View>
    );
}


const equipoStyles = StyleSheet.create({
    
    input:{
        width:240,
        margin:5,
        marginVertical:15
    }
})