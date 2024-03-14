import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialCommunityIcons, FontAwesome5, MaterialIcons, Ionicons } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Scanner() {
    return (
        <>
            <Navbar color="red" icon1={<AntDesign name="arrowleft" size={24} color="white" />} cortexto="white" texto="Scanner" icon2={<Ionicons name="reload" size={24} color="white" />}/> 
            <View style={{flex: 1}}>
                <MaterialIcons name="qr-code-scanner" size={350} color="black" />
            </View>
            
            <Footer color="#FFFFFF" icon1={<MaterialCommunityIcons name="camera-flip" size={24} color="gray" />} icon2 = {<FontAwesome5 name="list-ol" size={24} color="gray" />}/>
            
        </>
    );
}

export default Scanner;