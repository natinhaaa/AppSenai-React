import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';

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

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: "white"
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
        qrcode: {
            flex: 1,
            alignSelf: "center",
            verticalAlign: "middle",
            opacity: 0.1
        }
    });

    return (
        <SafeAreaView style={styles.container}>
            <Camera style={styles.camera} ref={camera}>
                <MaterialIcons style={styles.qrcode} name="qr-code-scanner" size={420} color="black" />
            </Camera>
        </SafeAreaView>
    );
}