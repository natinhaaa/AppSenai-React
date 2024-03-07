import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import Input2 from '../components/Inputs2';
import Footer2 from '../components/Footer2';

function AddItems() {
    return (
        <>
            <Navbar background={"#FF0000"}>
                <TouchableOpacity>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>
                <Text>Cadastro de Itens</Text>
                <TouchableOpacity>
                    <AntDesign name="pluscircleo" size={24} color="black" />
                </TouchableOpacity>
            </Navbar>
            <View style={styles.blocoInputs}>
                <View style={styles.inputContainer}>
                    <Input2 texto={"Nº Inventário *"} style={styles.input} placeholder="Ex: 001"/>
                </View>
                <View style={styles.inputContainer}>
                    <Input2 texto={"Descrição *"} style={styles.input} placeholder="Ex: Notebook"/>
                </View>
                <View style={styles.inputContainer}>
                    <Input2 texto={"Local *"} style={styles.input} placeholder="Sala de reuniões"/>
                </View>
                <View style={styles.inputContainer}>
                    <Input2 texto={"Responsável *"} style={styles.input} placeholder="Ex: João Silva"/>
                </View>
                <View style={styles.inputContainer}>
                    <Input2 texto={"Data de Registro *"} style={styles.input} placeholder="Ex: 10/10/10"/>
                </View>
            </View>
            <Footer2/>            
        </>
    );
}

const styles = StyleSheet.create({

    blocoInputs: {
        paddingHorizontal: 20,
    },
    inputContainer: {
        position: 'relative',
        marginTop: 30
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        paddingHorizontal: 8,
        top: -6,
        left: 12,
        zIndex: 1,
        fontSize: 12,
        maxWidth: 110,
    },
    input: {
        height: 40,
        borderRadius: 5,
        borderColor: 'gray',
        borderWidth: 1,
        paddingLeft: 35,
    },
});

export default AddItems;