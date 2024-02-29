import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

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
        width: 275
    },
    
    acessar: {
        color: 'white',
        textAlign: 'center',
    },
})

export default Botao;