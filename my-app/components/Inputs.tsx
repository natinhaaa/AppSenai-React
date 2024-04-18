import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { useState } from 'react';
import { useColor } from '../temas/tema';

interface InputProps extends TextInputProps{
    texto: string
}

const Input =({texto, ...props}: InputProps) => {
    const cores = useColor();
    const [hover, setHover] = useState("#F5F5F5")

    const styles = StyleSheet.create({
        container: {
            marginLeft: 20

        },

        input: {
            marginLeft: 20,
            maxWidth: 310,
            height: 40,
            backgroundColor: '#F5F5F5',
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: hover
        },

        texto: {
            fontSize: 12,
            padding: 15,
            marginLeft: 15,
            marginTop: 10
        }
    })

    return (
        <>
            <View style={styles.container}>
                <Text style={[styles.texto, {color: cores.textColorPrimaryVariant}]}>{texto}</Text>
                <TextInput {...props} style={styles.input} onFocus={() => {setHover("#F39200")}} onBlur={() => {setHover("#F5F5F5")}}/>
            </View>
        </>
        
    );
}

export default Input;
