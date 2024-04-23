import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';

export default function Scanner() {
    const camera = useRef(null);
    const [hasPermission, setHasPermission] = useState(null);

    useEffect(() => {
        (
            async () => {
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === 'granted');
            }
        )
    ();
    }, []);

    if (hasPermission === null) {
        return <View />
    }

    if (hasPermission === false) {
        return <Text>Não foi possível abrir a câmera</Text>
    }

    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} ref={camera}></Camera>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    camera: {
        width: 475,
        height: 480,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 20,
    },
    button: {
        padding: 20,
        backgroundColor: '#ffffff',
        borderRadius: 10,
    },
    text: {
        fontSize: 20,
        color: '#000000',
    },
});