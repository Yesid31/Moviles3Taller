import { View, PanResponder, Animated } from 'react-native';
import { useState } from "react";
import { Text, List } from "react-native-paper";
import { TareasItem } from '../TareasItem/TareasItem';
import { ScrollView } from 'react-native-gesture-handler';


export const TareasLista = ({navigation}) =>{

    const [tareasPendientes, setTareasPendientes] = useState([
        {id:1, descripcion:'Ir de compras',urgente:false},
        {id:2, descripcion:'Ir al medico',urgente:true},
        {id:3, descripcion:'Dormir',urgente:false},
        {id:4, descripcion:'Seguir durmiendo',urgente:true},

    ])
    return(
        // <ScrollView style={{marginVertical:20, marginHorizontal: 30}}>
        <View>
        {tareasPendientes.map((tarea, id)=>{
           return (
           <TareasItem key={id} tarea={tarea}/>
           )
        })}
        </View>
        // </ScrollView>
    );
}