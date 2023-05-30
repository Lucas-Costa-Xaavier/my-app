import React, { useState } from 'react';
import { Text, View , TouchableOpacity } from 'react-native';
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
      
      <View>
        <TouchableOpacity 
          style={styles.buttonact}
          onPress={ () => subNumber()}
        >
        <Text style={styles.textButton}>-</Text>
        </TouchableOpacity>
        
        <Text style={styles.textCounter}>{contador}</Text>

        <TouchableOpacity 
          style={styles.buttonact}
          onPress={ () => addNumber()}
        >
        <Text style={styles.textButton}>+</Text>
        </TouchableOpacity>
      </View>
      
      <View>
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