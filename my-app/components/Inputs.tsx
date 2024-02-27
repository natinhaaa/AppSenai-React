import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';

const Input =({texto, input}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.texto}>{texto}</Text>
            <TextInput style={styles.input} placeholder={input}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 20

    },

    input: {
        marginLeft: 20,
        width: 270,
        height: 35,
        backgroundColor: '#F5F5F5',
        padding: 10,
        borderRadius: 5,
    },

    texto: {
        fontSize: 12,
        padding: 12,
        marginLeft: 15
    }
})

export default Input;
