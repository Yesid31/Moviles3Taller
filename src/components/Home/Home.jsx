import { View } from "react-native";
import { Button, Text, useTheme } from "react-native-paper";
import React, { useContext, useState } from 'react';
import { TareasLista } from "../TareasLista/TareasLista";
import { themeContext } from "../../hooks/themes";


export const Home = ({navigation}) =>{
    const {modoNocturno, themeColors} = useContext(themeContext)
    return(
        <View>
            <Text style={{textAlign:'center', color: modoNocturno? themeColors.dark.colors.text : themeColors.light.colors.text}}>Vehiculos</Text>
            <TareasLista/>
            
        </View>
    );
}