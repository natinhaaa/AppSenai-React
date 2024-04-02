import React from 'react';
import { View, StyleSheet, Image, ActivityIndicator } from 'react-native';

function Load() {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image source={require('../../assets/senai_logo.png')} style={styles.logo}/>
                <ActivityIndicator size="large" color="#fff" style={styles.loader}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red'
    },

    background: {
        backgroundColor: "red",
        padding: 20,
        borderRadius: 10,
        alignItems: 'center'
    },

    logo: {
        width: 200,
        height: 52,
        marginBottom: 20
        
    },

    loader: {
        marginTop: 20
    }
})

export default Load;