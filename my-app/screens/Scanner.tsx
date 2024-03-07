import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Scanner() {
    return (
        <>
            <Navbar background= "#FF0000">
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text>Descrição do item</Text>
                <TouchableOpacity>
                    <AntDesign name="reload1" size={24} color="black" />
                </TouchableOpacity>
            </Navbar>
            
            <Footer/>            
        </>
    );
}

export default Scanner;