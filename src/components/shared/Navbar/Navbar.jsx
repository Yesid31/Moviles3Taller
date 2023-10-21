import { Avatar,Text } from "react-native-paper";
import {  DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import { View } from "react-native";
import {Switch} from "react-native-paper";
import { useContext, useEffect, useState } from "react";
// import user from '../../../img/user.png'
import userDefault from '../../../img/userDefault.png'
import { themeContext } from "../../../hooks/themes";

export const Navbar = (props) =>{
  const {modoNocturno, setModoNocturno,handleModoNocturno, usuario,themeColors} = useContext(themeContext)

//   #202c44 background oscuro menú
useEffect(()=>{
    // modoNocturno? console.log(themeColors.dark) : console.log(themeColors.light);
   console.log(themeColors);
},[modoNocturno])


    return(
        <DrawerContentScrollView {...props}  style={{backgroundColor: modoNocturno? themeColors.dark.colors.background : themeColors.light.colors.background}}>
            <View style={{marginTop:'10%', justifyContent:'center', }}>
                <View style={{alignItems:'center'}}>
                <Avatar.Image size={100} source={userDefault}/>
                </View>
                
                {usuario && (<Text style={{textAlign:'center',color: modoNocturno? themeColors.dark.colors.text : themeColors.light.colors.text}}>Hola {usuario}</Text>)}
                
                <DrawerItemList  {...props}/>
                <View style={{display:'flex',flexDirection:"row"}}>
                    <Text style={{marginTop:10,marginLeft: 13, color: modoNocturno? themeColors.dark.colors.text : themeColors.light.colors.text}}>Modo Nocturno</Text>
                    <Switch value={modoNocturno} style={{marginTop:9, marginLeft: 10}} onValueChange={handleModoNocturno}/>
                </View>
              
                

                
            </View>
        </DrawerContentScrollView>
    );
}