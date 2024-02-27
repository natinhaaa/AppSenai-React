import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';

const Botao = ({texto_botao}) => {
    return(
        <View style= {styles.container}>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.acessar}>{texto_botao}</Text>
            </TouchableOpacity>
        </View>
    )
    
}


const styles = StyleSheet.create({
    
    container: {
        display: "flex",
        alignItems: "center"
    },

    botao: {
        backgroundColor: 'black',
        padding: 10,
        borderRadius: 5,
        marginTop: 12,
        marginBottom: 5,
        width: 270
    },
    
    acessar: {
        color: 'white',
        textAlign: 'center',
    },
})

export default Botao;