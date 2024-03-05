import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

const Footer = () => {
    return (
        <>
            <StatusBar backgroundColor="black"/>
            <TouchableOpacity>
                <Ionicons style={styles.adicionar} name="add-circle-sharp" size={55} color="red" />
            </TouchableOpacity>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <MaterialCommunityIcons style={styles.separar_icons} name="camera-flip-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Foundation style={styles.separar_icons} name="list-number" size={24} color="white" />
                </TouchableOpacity>
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
    },
    adicionar: {
        position: "absolute",
        right: 20,
        bottom: 30
    }

})

export default Footer;