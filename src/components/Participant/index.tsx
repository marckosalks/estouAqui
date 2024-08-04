import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  name: string;
  //jeito certo de tipar função 
  onRemove: () => void;
}

export function Participant({ name, onRemove } : Props){
  return(
    <View style={styles.container}>
      <Text style={styles.name}>{name}</Text>
      <TouchableOpacity
          style={styles.button}>
          <Text 
            style={styles.buttonText}
            onPress={onRemove}>-</Text>
        </TouchableOpacity>
      </View>
  )
}