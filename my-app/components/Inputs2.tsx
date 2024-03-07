import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';
import { useState } from 'react';

interface InputProps extends TextInputProps{
    texto: string
}

const Input2 =({texto, ...props}: InputProps) => {
    const [hover, setHover] = useState("#F5F5F5")

    const styles = StyleSheet.create({
        container: {
            marginLeft: 20

        },
        texto: {
            position: 'absolute',
            backgroundColor: 'white',
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
            height: 35,
            padding: 10,
            borderRadius: 5,
            borderWidth: 1,
            borderColor: hover
        }
    })

    return (
        <>
            <View style={styles.container}>
                <Text style={styles.texto}>{texto}</Text>
                <TextInput {...props} style={styles.input} onFocus={() => {setHover("#F39200")}} onBlur={() => {setHover("#F5F5F5")}}/>
            </View>
        </>
        
    );
}

export default Input2;
