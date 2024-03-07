import React, { Children, PropsWithChildren } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';

type NavbarProps = {
    background: string
}

const Navbar = ({children}: any, {background}: NavbarProps) => {
    return (
        <View style={{...styles.container, backgroundColor: background}}>
            <StatusBar backgroundColor="black"/>
            <View style={styles.separar}>{children}</View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        height: 60,
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