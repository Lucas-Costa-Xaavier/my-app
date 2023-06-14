import React, {useState} from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

export default function Index() {

    const [massa, setMassa] = useState (0);
    const [altura, setAltura] = useState(0);
    const [resultado, setResultado] = useState(0);
    const [porcentual, setPorcentual] = useState(0);

    function Calcular() {
        const valor = massa / (altura * altura);
        setResultado(valor);

        if (valor < 18.5){
            setPorcentual('Abaixo do peso');
        }else if (valor >= 18 && valor < 24.59){
                setPorcentual('Peso Normal');
            } else if (valor >= 25 && valor < 29.9 ){
                setPorcentual('sobrepeso');
            } else if (valor >= 30 && valor < 34.9){
                setPorcentual('Obesidade grau 1');
            } else if (valor >= 35 && valor < 39.9){
                setPorcentual('Obesidade grau 2');
            } else if (valor > 40){
                setPorcentual('Obesidade grau 3');
            }
        
    }
        
        

    return (
    <View style={styles.container}>
        <Text style={styles.paragraph}> Exemplo 6</Text>
            <View style={styles.entradaImc}>
                <TextInput placeholder='Massa' placeholderTextColor='lightgray' keyboardType='numeric' style={styles.input}
                onChangeText={(entrada) => setMassa(entrada)} />
                <TextInput placeholder='Altura' placeholderTextColor='lightgray' keyboardType='numeric' style={styles.input}
                onChangeText={(entrada) => setAltura(entrada)}/>
            </View>
            <TouchableOpacity style={styles.button} onPress={() => Calcular ()} >
                <Text style={styles.buttonText}> Calcular</Text>
            </TouchableOpacity>
            <Text style={styles.resultados}>{resultado.toFixed(2)}</Text>
            <Text style={styles.resultados}>{porcentual}</Text>
    </View>
    )
}    