import { Text } from "react-native-paper";
import { View, ScrollView } from 'react-native'
import { useContext, useEffect, useState } from "react";
import { themeContext } from "../../hooks/themes";
import { StyleSheet } from "react-native";
import {TextInput, Button} from "react-native-paper";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { alerta } from "../../utils/alerts";


export const Renta = () =>{

    const {modoNocturno,themeColors,vehiculos, clientes} = useContext(themeContext)


    
   console.log(vehiculos);
    console.log(clientes);

    
   const formik = useFormik({
    initialValues:{
        idRenta:'',
        usuario:'',
        placa:'',
        fecha:''
    },
    validationSchema: Yup.object({
            idRenta: Yup.string().required('Este campo es obligatorio').min(1, 'El campo debe tener 1 caracter').max(7),
            usuario: Yup.string().required('Este campo es obligatorio').min(2, 'La marca es muy corta'),
            placa: Yup.string().required('Este campo es obligatorio'),
            fecha: Yup.string().notRequired(),
    }),

    onSubmit: ( (formValues) =>{
        // console.log(formValues);

        let encontradoVehiculo = false
        vehiculos.map((vehiculo)=> {
            if(vehiculo.placa ===formValues.placa){
                encontradoVehiculo=true
            }
        })

        let encontradoCliente = false
        clientes.map((cliente)=>{
            if(cliente.usuario === formValues.usuario){
                encontradoCliente= true
            }
        })

        if(encontradoCliente==true && encontradoVehiculo==true){
            alerta('success','correcto','Formulario enviado con exito')
            console.log('Registro creado: '+JSON.stringify(formValues, null, 2));
        }else{
            if(encontradoVehiculo==false){
                alerta('error','Error','Ese vehiculo no fue encontrado en la base de datos')
            }else{
                alerta('error','Error','Ese cliente no fue encontrado en la base de datos')
            }
        }


        

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
            label='idRenta'
            onChangeText={formik.handleChange('idRenta')}
            onBlur={formik.handleBlur('idRenta')}
            value={formik.values.idRenta}
            error={formik.errors.idRenta}
            />
            {formik.errors.idRenta && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.idRenta}</Text>)}

            <TextInput 
            activeUnderlineColor="royalblue"
            style={carroStyles.input}
            label='Usuario'
            onChangeText={formik.handleChange('usuario')}
            onBlur={formik.handleBlur('usuario')}
            value={formik.values.usuario}
            error={formik.errors.usuario}
            />
            {formik.errors.usuario && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.usuario}</Text>)}
            <TextInput 
            activeUnderlineColor="royalblue"
            style={carroStyles.input}
            label='Placa'
            onChangeText={formik.handleChange('placa')}
            onBlur={formik.handleBlur('placa')}
            value={formik.values.placa}
            error={formik.errors.placa}
            />
            {formik.errors.placa && (<Text style={{color:modoNocturno? themeColors.dark.colors.text: themeColors.light.colors.text}}>{formik.errors.placa}</Text>)}
           
            <TextInput 
            activeUnderlineColor="royalblue"
            style={carroStyles.input}
            label='fecha'
            onChangeText={formik.handleChange('fecha')}
            onBlur={formik.handleBlur('fecha')}
            value={formik.values.fecha}
            error={formik.errors.fecha}
            />
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