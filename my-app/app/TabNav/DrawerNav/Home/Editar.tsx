import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Input2 from "@comp/Inputs2";
import { Link } from "expo-router";

export default function Editar() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.blocoInputs}>
                    <Input2 texto={"Nº Inventário"} placeholder="957689"/>
                    <Input2 texto={"Descrição"} placeholder="CADEIRA GIRATÓRIA"/>
                    <Input2 texto={"Local"} placeholder="SALA C13"/>
                    <Input2 texto={"Responsável"} placeholder="CARLOS"/>
                    <Input2 texto={"Data de Registro"} placeholder="05/03/2024"/>
                </View>
            </View>
        </>
        
    )
}
const styles = StyleSheet.create({
    blocoInputs:{
        marginTop: 30,
        height: 660
    },
    container: {
        backgroundColor: "white"
    }

})

