import React, {useState} from 'react';
import { Text, View, TouchableOpacity } from 'react-native';

import styles from './styles';

export default function apostila03() {

  const [contador, setContador] = useState(0);

    function addNumber () {
      setContador(contador + 1);
      console.log(contador);
    }

    function removeNumber () {
      setContador(contador -1);
      console.log(contador)
    }

    function zeroNumber () {
      setContador(contador => 0 );
      console.log(contador)
    }

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Exemplo apostila 3</Text>

      <Text style={styles.textCounter}>{contador}</Text>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => addNumber ()}
      >
        <Text style={styles.textButton} > + </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => removeNumber ()}
      >
        <Text style={styles.textButton} > - </Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.button} 
        onPress={() => zeroNumber ()}
      >
        <Text style={styles.textButton} > Zerar </Text>
      </TouchableOpacity>


    </View>
  );
}

