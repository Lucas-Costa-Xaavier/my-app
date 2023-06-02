import React, { useState } from 'react';
import { View, Text, TextInput,TouchableOpacity } from 'react-native';
import styles from './styles';

function Apostila04() {
      const [entrada1, setEntrada1] = useState('');
      const [entrada2, setEntrada2] = useState('');
      const [mensagem, setMensagem] = useState('Aqui aparece o texto digitado!');
    
      function apresentaMensagem() {
        setMensagem(entrada1 + ' ' + entrada2);
      }
    
      return (
        <View style={styles.container}>
          <Text style={styles.texto}>Exemplo 4</Text>
    
          <Text style={styles.txtSaida}>

            {mensagem}
            
          </Text>


          <TextInput
            style={styles.txtEntrada}
            onChangeText={(texto1) => setEntrada1(texto1)}
            value={entrada1}
          />
          <TextInput
            style={styles.txtEntrada}
            onChangeText={(texto2) => setEntrada2(texto2)}
            value={entrada2}
          />
    
          <TouchableOpacity
            style={styles.button}
            onPress={() => apresentaMensagem()}
          >
            <Text style={styles.textButton}>Mostrar valor digitado</Text>
          </TouchableOpacity>
        </View>
      );
    }
    
export default Apostila04