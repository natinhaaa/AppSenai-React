import { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { MaterialIcons } from '@expo/vector-icons';
import { Camera, CameraType } from "expo-camera";

const Scanner = () => {
    const [isCameraActive, setIsCameraActive] = useState(false);
    const [permission] = Camera.useCameraPermissions();

    if (!permission)
        return null;

    if (!permission.granted)
        return null;

    return (
        <View style={styles.container}>
            {isCameraActive ? (
                <Camera style={styles.camera} type={CameraType.back}>
                    <View style={styles.button}>
                        <TouchableOpacity style={styles.button} onPress={() => setIsCameraActive(false)}>
                            <MaterialIcons name="qr-code-scanner" size={300} color="#5D5C5C" />
                        </TouchableOpacity>
                    </View>
                </Camera>
            ) : (
                <TouchableOpacity style={styles.buttonContainer} onPress={() => setIsCameraActive(true)}>
                    <MaterialIcons style={styles.qrcode} name="qr-code-scanner" size={300} color="#5D5C5C" />
                </TouchableOpacity>
            )}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    camera: {
        width: '100%',
        height: '100%',
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    qrcode: {
        opacity: 0.1
    }
});

export default Scanner;