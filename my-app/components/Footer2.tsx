import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { MaterialCommunityIcons, Foundation } from '@expo/vector-icons';

const Footer2 = () => {

    const styles = StyleSheet.create({
        footer2: {
            height: 60,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "row",
            borderTopWidth: 1,
            borderTopColor: "#F5F5F5"
        },
        separar_icons: {
            marginHorizontal: 5
        }
    
    })

    return (
        <>
            <StatusBar backgroundColor="black"/>
            <View style={styles.footer2}>
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

export default Footer2;