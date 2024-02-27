import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Header = ({color, subtitle}) => {
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <StatusBar backgroundColor="black"/>
            <Image source={require('../images/senai_logo.png')} style={styles.logo}/>
            <Text style={styles.subtitulo}>{subtitle}</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    logo: {
        width: 200,
        height: 52,
        marginTop: 80,
    },

    container: {
        height: 200,
        width: 360,
        display: "flex",
        alignItems: "center",
        backgroundColor: "red"
    },

    subtitulo: {
        color: "white",
        marginTop: 5
    }
})

export default Header;