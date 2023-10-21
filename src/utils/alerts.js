
import Toast from "react-native-toast-message";

export const alerta = (tipo,titulo,texto) => {

    Toast.show({
      type: tipo,
      text1: titulo,
      text2: texto
    });
  }