import React, {useState} from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { FontAwesome5 } from '@expo/vector-icons'
import * as Speech from 'expo-speech'

export default function App() {

  const [falando, setFalando] = useState(false)

  function falar(){
    let frase = 'Curso de ADS na Fatec Itu'
    Speech.speak(frase, {
      language: 'pt'
    })
  }

  function parar(){
    setFalando(false)
    Speech.stop()
  }

  return (
    <View style={styles.principal}>
      <Text style={styles.titulo}>App para gerar frases</Text>
      <Text style={styles.subtitulo}>Rândomicas</Text>
      <View style={styles.botoes}>
      <FontAwesome5.Button
        name="bolt" 
        onPress={falar}
        backgroundColor="#82f183"> Falar 
      </FontAwesome5.Button>
      <FontAwesome5.Button
        name="stop" 
        onPress={parar}
        disabled={falando}
        backgroundColor={falando ? "#F00" : "#CCC"}> Parar 
      </FontAwesome5.Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  principal: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around', //distribui uniformemente na vertical
    alignItems: 'center'
  },
  botoes:{
    flexDirection: 'row',
    margin: 16
  },
  titulo: {
    fontSize: 30,
    color: '#1A237E'
  },
  subtitulo: {
    fontSize: 24,
    color: '#1A2340'
  }
})