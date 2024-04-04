import React, { Children, PropsWithChildren } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

const Navbar = ({...props}) => {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <TouchableOpacity>{props.icon1}</TouchableOpacity>
            <Text style={[styles.texto, {color: props.cortexto}]}>{props.texto}</Text>
            <TouchableOpacity>{props.icon2}</TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({

    container: {
        width:"100%",
        height: 60,
        flexDirection: "row",
        justifyContent: "space-between",
        borderBottomWidth: 1,
        borderBottomColor: "#f5f5f5",
        gap: 10,
        paddingTop: 15,
        paddingLeft: 20,
        paddingRight: 20
    },


    texto: {
        marginTop: 5,
        fontSize: 14,
        fontWeight: "600"
    }

})

export default Navbar;