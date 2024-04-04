import { LinkProps } from 'next/link';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';

interface props extends LinkProps{
    texto_botao: string;
};

const Botao = ({texto_botao, ...props}: props) => {
    return(
        <Link {...props} style= {styles.container} asChild>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.acessar}>{texto_botao}</Text>
            </TouchableOpacity>
        </Link>
    )
    
}


const styles = StyleSheet.create({
    
    container: {
        alignSelf: "center"
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
        textAlign: 'center'
    },
})

export default Botao;