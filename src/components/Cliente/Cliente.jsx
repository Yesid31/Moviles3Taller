import { Text } from "react-native-paper";
import { View, ScrollView } from 'react-native'
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../../hooks/themes";
import { StyleSheet } from "react-native";
import {TextInput, Button} from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { alerta } from "../../utils/alerts";

export const Cliente = () =>{

    const {modoNocturno,themeColors,clientes ,setClientes} = useContext(themeContext)



   const formik = useFormik({
    initialValues:{
        usuario:'',
        nombreCompleto:'',
        correo:'',
        contraseña:'',
        uri:'',
        edad:'',
    },
    validationSchema: Yup.object({
            usuario: Yup.string(),
            nombreCompleto: Yup.string().required().min(2, 'El nombre es muy corto'),
            correo: Yup.string().email().required().min(12),
            contraseña: Yup.string().required().min(6),
            uri: Yup.string().required().min(6),
            edad: Yup.number().required(),
    }),

    onSubmit: ( (formValues) =>{
        console.log(formValues);
        console.log(clientes);

        const newClientes = clientes

        newClientes.push(formValues)

       setClientes(newClientes)

        console.log(clientes);

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
            style={clienteStyles.input}
            label='usuario'
            onChangeText={formik.handleChange('usuario')}
            onBlur={formik.handleBlur('usuario')}
            value={formik.values.usuario}
            error={formik.errors.usuario}
            />
            {/* {formik.errors.usuario && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.usuario}</Text>)} */}

            <TextInput 
            activeUnderlineColor="royalblue"
            style={clienteStyles.input}
            label='Nombre Completo'
            onChangeText={formik.handleChange('nombreCompleto')}
            onBlur={formik.handleBlur('nombreCompleto')}
            value={formik.values.nombreCompleto}
            error={formik.errors.nombreCompleto}
            />
            {formik.errors.nombreCompleto && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.nombreCompleto}</Text>)}
            <TextInput 
            activeUnderlineColor="royalblue"
            style={clienteStyles.input}
            label='Correo Electronico'
            onChangeText={formik.handleChange('correo')}
            onBlur={formik.handleBlur('correo')}
            value={formik.values.correo}
            error={formik.errors.correo}
            />
            {formik.errors.correo && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.correo}</Text>)}
            <TextInput 
            activeUnderlineColor="royalblue"
            style={clienteStyles.input}
            label='Contraseña'
            onChangeText={formik.handleChange('contraseña')}
            onBlur={formik.handleBlur('contraseña')}
            value={formik.values.contraseña}
            error={formik.errors.contraseña}
            />
            {formik.errors.contraseña && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.contraseña}</Text>)}
            <TextInput 
            activeUnderlineColor="royalblue"
            style={clienteStyles.input}
            label='uri'
            onChangeText={formik.handleChange('uri')}
            onBlur={formik.handleBlur('uri')}
            value={formik.values.uri}
            error={formik.errors.uri}
            />
            {formik.errors.uri && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.uri}</Text>)}
            <TextInput 
            activeUnderlineColor="royalblue"
            style={clienteStyles.input}
            label='Edad'
            onChangeText={formik.handleChange('edad')}
            onBlur={formik.handleBlur('edad')}
            value={formik.values.edad}
            error={formik.errors.edad}
            />
              {formik.errors.edad && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.edad}</Text>)}
            <Button icon='send' mode="contained-tonal"  onPress={()=> formik.handleSubmit()}>
            Ingresar Informacion
            </Button>
            



            </View>
            </form>
            </ScrollView>
        </View>
    );
}

const clienteStyles = StyleSheet.create({
    
    input:{
        width:240,
        margin:5,
        marginVertical:15
    }
})