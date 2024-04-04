import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';

function Scanner() {
    return (
        <>
            <View style={styles.container}>
                <MaterialIcons name="qr-code-scanner" size={350} color="#5D5C5C" />
            </View>            
        </>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }

})

export default Scanner;