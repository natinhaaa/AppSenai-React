import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BlocoDesc from '../components/BlocoDesc';
import { Ionicons, MaterialCommunityIcons, Foundation, MaterialIcons } from '@expo/vector-icons';


function DescItem() {
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
            <BlocoDesc titulo={"Nº do Inventário:"} descriçao={"957689"}/>
            <BlocoDesc titulo={"Descrição:"} descriçao={"CADEIRA GIRATÓRIA"}/>
            <BlocoDesc titulo={"Local:"} descriçao={"SALA C13"}/>
            <BlocoDesc titulo={"Responsável:"} descriçao={"CARLOS"}/>
            <BlocoDesc titulo={"Data de Registro:"} descriçao={"05/03/2024"}/>
            <MaterialCommunityIcons style={styles.editar} name="pencil-circle" size={24} color="red" />
            <Footer color="#FFFFFF" icon1={<MaterialCommunityIcons name="camera-flip-outline" size={24} color="gray" />} icon2={<Foundation name="list-number" size={24} color="gray" />}/>
        </>
    );
}

const styles = StyleSheet.create({
    editar: {
        position: "absolute",
        right: 20,
        bottom: 80
    }
    
});

export default DescItem;