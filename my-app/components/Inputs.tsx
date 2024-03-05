import React from 'react';
import { StyleSheet, Text, TextInput, TextInputProps, View } from 'react-native';

interface InputProps extends TextInputProps{
    texto: string
}

const Input =({texto, ...props}: InputProps) => {
    return (
        <>
            <View style={styles.container}>
                <Text style={styles.texto}>{texto}</Text>
                <TextInput {...props} style={styles.input} placeholderTextColor="#808080"/>
            </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20

    },

    input: {
        marginLeft: 20,
        width: 310,
        height: 35,
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 5,
    },

    texto: {
        fontSize: 12,
        padding: 15,
        marginLeft: 15
    }
})

export default Input;
