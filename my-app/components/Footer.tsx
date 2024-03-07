import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

const Footer = ({...props}) => {
    return (
        <>
            <View style={[styles.footer, {backgroundColor: props.color}]}>
                <StatusBar backgroundColor="black"/>
                    <TouchableOpacity style={styles.separar_icons}>{props.icon1}</TouchableOpacity>
                    <TouchableOpacity style={styles.separar_icons}>{props.icon2}</TouchableOpacity>          
            </View>
            
        </>
    )
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "red",
        height: 60,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    separar_icons: {
        marginHorizontal: 5
    }

})

export default Footer;