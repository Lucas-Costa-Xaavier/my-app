import React, { useState } from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
import Botao from './botao';
import styles from './styles';

export default function apostila03() {
  
  //State
  const [contador, setContador] = useState(0);
  //Função
  function subNumber(){
    setContador (contador-1);
  }
  function addNumber() {
    setContador (contador+1);
  }
  function zerarNumber(){
    setContador (0);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.textCounter}>Contador</Text>
      
      <View style={styles.buttonRow}>
        <Botao sinal={'-'} funcao = {subNumber} />
        
        <Text style={styles.numcont}>{contador}</Text>

        <Botao sinal={'+'} funcao = {addNumber} />
      </View>
      
      <View style={styles.buttonCol}>
        <TouchableOpacity 
          style={styles.button}
          onPress={ () => zerarNumber()}
        >
        <Text style={styles.textButton}>Zerar</Text>
        </TouchableOpacity>
      </View>

    </View>
  );
}