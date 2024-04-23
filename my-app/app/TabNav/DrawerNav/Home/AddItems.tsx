import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Input2 from "@comp/Inputs2";

export default function AddItems() {
    return (
        <>
            <View style={styles.container}>
                <View style={styles.blocoInputs}>
                    <Input2 texto={"Nº Inventário"} placeholder="Ex: 001"/>
                    <Input2 texto={"Descrição"} placeholder="Ex: Notebook"/>
                    <Input2 texto={"Local"} placeholder="Sala de reuniões"/>
                    <Input2 texto={"Responsável"} placeholder="Ex: João Silva"/>
                    <Input2 texto={"Data de Registro"} placeholder="Ex: 10/10/10"/>
                </View>
            </View>
        </>
    )
}
const styles = StyleSheet.create({
    blocoInputs:{
        marginTop: 30,
        height: 690
    },
    container: {
        backgroundColor: "white"
    }

})