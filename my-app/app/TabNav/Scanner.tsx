import { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, Text, SafeAreaView } from 'react-native';
import { Camera } from 'expo-camera';
import { MaterialIcons } from '@expo/vector-icons';
import { useColor } from '../../temas/tema';

export default function Scanner() {
    const cores = useColor()
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
            justifyContent: 'center',
            alignItems: 'center',
            height: "100%"
        },
        camera: {
            width: 475,
            height: 480,
        },

        qrcode: {
            flex: 1,
            alignSelf: "center",
            verticalAlign: "middle",
            opacity: 0.1
        }
    });

    return (
        <SafeAreaView style={[styles.container, { backgroundColor: cores.bgPrimary }]}>
            <Camera style={styles.camera} ref={camera}>
                <MaterialIcons style={styles.qrcode} name="qr-code-scanner" size={420} color="black" />
            </Camera>
        </SafeAreaView>
    );
}