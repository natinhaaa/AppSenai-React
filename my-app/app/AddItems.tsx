import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Navbar from "../components/Navbar";
import { AntDesign } from '@expo/vector-icons';
import Input2 from "../components/Inputs2";
import Footer from "../components/Footer";

function AddItems() {
    return (
        <View style={styles.container}>
            <Navbar color="red" icon1={<AntDesign name="arrowleft" size={24} color="white" />} cortexto="white" texto="Cadastro de Itens" icon2={<AntDesign name="pluscircleo" size={24} color="white" />}/> 
            <View style={styles.blocoInputs}>
                <Input2 texto={"Nº Inventário"} placeholder="Ex: 001"/>
                <Input2 texto={"Descrição"} placeholder="Ex: Notebook"/>
                <Input2 texto={"Local"} placeholder="Sala de reuniões"/>
                <Input2 texto={"Responsável"} placeholder="Ex: João Silva"/>
                <Input2 texto={"Data de Registro"} placeholder="Ex: 10/10/10"/>
            </View>
            <Footer color="white" icon1={<MaterialCommunityIcons name="camera-flip" size={24} color="#595959" />} icon2 = {<FontAwesome5 name="list-ol" size={24} color="#595959" />}/>
        </View>
    )
}
const styles = StyleSheet.create({
    blocoInputs:{
        marginTop: 30,
        height: 680
    },
    container: {
        backgroundColor: "white"
    }

})

export default AddItems