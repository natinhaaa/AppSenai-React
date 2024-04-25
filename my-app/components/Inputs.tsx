import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { useState } from 'react';
import { useColor } from '../temas/tema';
import { Cores } from '../temas/tema';

interface InputProps extends TextInputProps{
    texto: string
}

const Input =({texto, ...props}: InputProps) => {
    const cores = useColor();
    const [hover, setHover] = useState(cores.bgInput)

    const styles = StyleSheet.create({
        container: {
            marginLeft: 20
        },

        input: {
            marginLeft: 20,
            maxWidth: 310,
            height: 40,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: hover,
            backgroundColor: cores.bgInput
            
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
                <TextInput {...props} style={[styles.input]} placeholderTextColor={cores.colorTextInput} onFocus={() => {setHover("#F39200")}} onBlur={() => {setHover(cores.borderInput)}} />
            </View>
        </>
        
    );
}

export default Input;
