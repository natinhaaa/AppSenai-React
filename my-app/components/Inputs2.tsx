import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { useState } from 'react';
import { useColor } from '../temas/tema';

interface InputProps extends TextInputProps{
    texto: string
}

const Input2 =({texto, ...props}: InputProps) => {
    const cores = useColor()
    const [hover, setHover] = useState(cores.bgInput)

    const styles = StyleSheet.create({
        container: {
            marginLeft: 20

        },
        texto: {
            position: 'absolute',
            backgroundColor: cores.bgPrimary,
            paddingHorizontal: 8,
            top: -6,
            left: 12,
            zIndex: 1,
            fontSize: 12,
            maxWidth: 110
        },

        input: {
            marginLeft: 10,
            width: 310,
            height: 40,
            padding: 10,
            borderRadius: 5,
            borderWidth: 2,
            borderColor: hover,
            marginBottom: 35
        },

        asterisco: {
            color: "red"
        }
    })

    return (
        <>
            <View style={styles.container}>
                <Text style={[styles.texto, {color: cores.textColorSecundary}]}>
                    {texto}
                    <Text style={styles.asterisco}> *</Text>
                </Text>
                <TextInput {...props} style={[styles.input]} placeholderTextColor={cores.colorTextInput} onFocus={() => {setHover("#F39200")}} onBlur={() => {setHover(cores.borderInput)}} />
            </View>
        </>
        
    );
}

export default Input2;
