import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

const Navbar = ({icon1, icon2}) => {
    return (
        <View style={styles.container}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.separar}>
                <View>{icon1}</View>
                <View>{icon2}</View>
            </View>
            
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: 50,
        width: "100%",
        marginTop: 30,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F5",
        padding: 8,
        justifyContent: "center"
    },

    separar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between"        
    }

})

export default Navbar;