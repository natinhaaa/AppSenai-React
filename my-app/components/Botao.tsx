import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type TouchableOpacityProps = {
    texto_botao: string,
    onPress: () => void;
}

const Botao = ({texto_botao, onPress}: TouchableOpacityProps) => {
    return(
        <View style= {styles.container}>
            <TouchableOpacity style={styles.botao} onPress={onPress}>
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
        marginTop: 20,
        marginBottom: 5,
        width: 310
    },
    
    acessar: {
        color: 'white',
        textAlign: 'center',
    },
})

export default Botao;