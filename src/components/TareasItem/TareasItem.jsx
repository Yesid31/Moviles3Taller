import { View, PanResponder, Animated } from 'react-native';
import { useContext, useState } from "react";
import { Text,List } from "react-native-paper";
import { themeContext } from '../../hooks/themes';
import { alerta } from '../../utils/alerts';



export const TareasItem = ({tarea}) =>{

  const {modoNocturno, themeColors} = useContext(themeContext)
  
    const [openModal, setOpenModal] = useState(false)


    const [positionX] = useState(new Animated.Value(0));
    const [panResponder, setPanResponder] = useState(
      PanResponder.create({
        onMoveShouldSetPanResponderCapture: () => true,
        onMoveShouldSetPanResponder: () => true,
        onPanResponderMove: Animated.event([null, { dx: positionX }], {
          useNativeDriver: false,
        }),
        onPanResponderRelease: (e, gestureState) => {
          
          console.log(gestureState.dx);
          
          if (gestureState.dx >30) {
       console.log(`Derecha Tarea#${tarea.id}`);
         
          }else if(gestureState.dx <-30){
            console.log(`Izquierda Tarea#${tarea.id}`);
          }else{
            console.log('Neutral');
          }
          Animated.spring(positionX, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        },
      })
    );

    const listItemStyle = {
        transform: [{ translateX: positionX }],
      };

      return (

        <View  {...panResponder.panHandlers }>
            <Animated.View style={listItemStyle}>
            <List.Item
           descriptionStyle={{color:modoNocturno? themeColors.dark.colors.text : themeColors.light.colors.text}}
            titleStyle={{color:modoNocturno? themeColors.dark.colors.textNotification : themeColors.light.colors.textNotification}}
            style={{ margin: 10, marginHorizontal:40, borderWidth:2,backgroundColor: modoNocturno? themeColors.dark.colors.card :  themeColors.light.colors.card, borderRadius:30, borderColor:modoNocturno? themeColors.dark.colors.border :  themeColors.light.colors.border }}
            title={`Tarea#${tarea.id}`}
            description={tarea.descripcion} 
            
            onPress={() => alert('Hola')}
            left={props => <List.Icon {...props} style={{justifyContent:'center', marginLeft:20,}} icon={tarea.urgente? 'calendar-blank' : 'alert'}/>}/>
              </Animated.View>
              </View> 
      
           
       
      );
}