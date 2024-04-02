import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Navbar from '@comp/Navbar';
import Footer from '@comp/Footer';

function Scanner() {
    return (
        <>
            <Navbar color="red" icon1={<AntDesign name="arrowleft" size={24} color="white" />} cortexto="white" texto="Scanner" icon2={<Ionicons name="reload" size={24} color="white" />}/> 
            <View style={styles.container}>
                <MaterialIcons name="qr-code-scanner" size={350} color="#5D5C5C" />
            </View>
            
            <Footer color="#FFFFFF" icon1={<MaterialCommunityIcons name="camera-flip" size={24} color="#595959" />} icon2 = {<FontAwesome5 name="list-ol" size={24} color="#595959" />}/>
            
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