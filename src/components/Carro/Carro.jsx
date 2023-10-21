import { Text } from "react-native-paper";
import { View, ScrollView } from 'react-native'
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../../hooks/themes";
import { StyleSheet } from "react-native";
import {TextInput, Button} from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { alerta } from "../../utils/alerts";



export const Carro = () => {

    const {modoNocturno,themeColors, vehiculos, setVehiculos} = useContext(themeContext)





   const formik = useFormik({
    initialValues:{
        placa:'',
        marca:'',
        disponible:'',
    },
    validationSchema: Yup.object({
            placa: Yup.string().required('Este campo es obligatorio').min(6, 'El campo debe tener 6 caracteres').max(7),
            marca: Yup.string().required('Este campo es obligatorio').min(2, 'La marca es muy corta'),
            disponible: Yup.string().required('Este campo es obligatorio'),
    }),

    onSubmit: ( (formValues) =>{
        console.log(formValues);


        const newVehiculo = vehiculos

        newVehiculo.push(formValues)

       setVehiculos(newVehiculo)

        console.log(vehiculos);

        alerta('success','correcto','Formulario enviado con exito')

    }) 
   })

    return(
        <View>
            <Text style={{textAlign:'center', color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>Clientes</Text>

        <ScrollView>
            <form onSubmit={formik.handleSubmit}>
            <View style={{alignItems:'center'}}>

            <TextInput 
            activeUnderlineColor="royalblue"
            style={carroStyles.input}
            label='placa'
            onChangeText={formik.handleChange('placa')}
            onBlur={formik.handleBlur('placa')}
            value={formik.values.placa}
            error={formik.errors.placa}
            />
            {formik.errors.placa && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.placa}</Text>)}

            <TextInput 
            activeUnderlineColor="royalblue"
            style={carroStyles.input}
            label='Marca'
            onChangeText={formik.handleChange('marca')}
            onBlur={formik.handleBlur('marca')}
            value={formik.values.marca}
            error={formik.errors.marca}
            />
            {formik.errors.marca && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.marca}</Text>)}
            <TextInput 
            activeUnderlineColor="royalblue"
            style={carroStyles.input}
            label='Estado del Vehiculo'
            onChangeText={formik.handleChange('disponible')}
            onBlur={formik.handleBlur('disponible')}
            value={formik.values.disponible}
            error={formik.errors.disponible}
            />
            {formik.errors.disponible && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.disponible}</Text>)}
           
            <Button icon='send' mode="contained-tonal"  onPress={()=> formik.handleSubmit()}>
            Ingresar Vehiculo
            </Button>
            



            </View>
            </form>
            </ScrollView>
        </View>
    );
}

const carroStyles = StyleSheet.create({
    
    input:{
        width:240,
        margin:5,
        marginVertical:15
    }
})