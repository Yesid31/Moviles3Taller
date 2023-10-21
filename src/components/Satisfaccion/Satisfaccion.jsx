import { Text } from "react-native-paper";
import { View } from "react-native";
import { useContext } from "react";
import { themeContext } from "../../hooks/themes";

export const Satisfaccion = () =>{
    

    const {modoNocturno, themeColors} = useContext(themeContext)

    return(
        <View>
            <Text style={{textAlign:'center', color: modoNocturno? themeColors.dark.colors.text : themeColors.light.colors.text}}>Equipos</Text>
        </View>
    );
}