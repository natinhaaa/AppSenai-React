import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

const BlocoCadeira = () => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.conteudo}>
                <Text style={styles.numero}>956389</Text>
                <Text>CADEIRA SENAI</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: 70,
        width: "100%",
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5"
    },

    conteudo: {
        marginLeft: 10
    },

    numero: {
        fontWeight: "bold",
        marginBottom: 5
    }

})

export default BlocoCadeira;