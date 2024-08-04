import { Text, TextInput, View, TouchableOpacity, FlatList, Alert } from "react-native"
import { styles } from "./styles"
import { Participant } from "../../components/Participant"
import React , { useState} from "react";

export function Home() {
  const [participants, setParticipants] = useState<string[]>([]);
  const [participantName, setParticipantName] = useState('');
  

  //const participants = ['Dani', 'DvD', 'Duda', 'Bia', 'Sophia', 'Lucas', 'Pedro', 'Tigger', 'Vitória', 'Arthur', 'Lucas da Chica', 'Tobozo'];

  function handleParticipantAdd() {
    if(participants.includes(participantName)){
      return Alert.alert("Participante Existe ou valor", "Já existe um participante com esse nome !");
    }

    setParticipants(prevState =>[...prevState, participantName]);
    setParticipantName('');
  }

  function handleParticipantRemove(name: string){
    Alert.alert("Remover", `Deseja remover o convidado: ${name}?`, [
      {
        text: 'Sim',
        onPress: () => Alert.alert("Delatado")
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ]);


  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Tren Bom</Text>
      <Text style={styles.eventDate}>04 de Agosto de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do Participante"
          placeholderTextColor="#6b6b6b"
          onChangeText={setParticipantName}
          value={participantName}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList 
        data={ participants }
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            key={item} 
            name={item} 
            onRemove={ ()=> handleParticipantRemove(item)}
            />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}> Niguém chegou no evento ainda, Adicione um novo convidado!</Text>
        )}
        />      
    </View>
  )
}
