import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

type Color_TextProps = {
    color: string,
    subtitle: string
}

const Header = ({color, subtitle}: Color_TextProps) => {
    return (
        <View style={[styles.container, {backgroundColor: color}]}>
            <StatusBar backgroundColor="black"/>
            <Image source={require('@assets/senai_logo.png')} style={styles.logo}/>
            <Text style={[styles.subtitulo, {color: "#F5F5F5"}]}>{subtitle}</Text>
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
        width: "100%",
        display: "flex",
        alignItems: "center",
        backgroundColor: "red"
    },

    subtitulo: {
        color: "white",
        marginTop: 10,
        fontSize: 20
    }
})

export default Header;