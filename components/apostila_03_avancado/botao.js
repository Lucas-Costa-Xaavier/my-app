import { Text, TouchableOpacity } from 'react-native';

import styles from './styles';

      function Botao ({ sinal, funcao }){
      return(
            <TouchableOpacity 
            style= {[styles.button, styles.botaoSinal]}
            onPress = {() => funcao()}
            >
            <Text style={styles.textButton}>{sinal}</Text>
            </TouchableOpacity>
      );
}

export default Botao;