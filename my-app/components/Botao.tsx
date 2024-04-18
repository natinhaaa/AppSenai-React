import { LinkProps } from 'next/link';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Link } from 'expo-router';
import { useColor } from '../temas/tema';

interface props extends LinkProps{
    texto_botao: string;
};

const Botao = ({texto_botao, ...props}: props) => {
    const cores = useColor()

    const styles = StyleSheet.create({
    
        container: {
            alignSelf: "center",
        },

        botao: {
            backgroundColor: cores.bgButton,
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

    return(
        <Link {...props} style= {styles.container} asChild>
            <TouchableOpacity style={styles.botao}>
                <Text style={styles.acessar}>{texto_botao}</Text>
            </TouchableOpacity>
        </Link>
    )
    
}


export default Botao;