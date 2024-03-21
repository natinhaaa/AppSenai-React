import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import Navbar from "../components/Navbar";
import { AntDesign } from '@expo/vector-icons';
import Input2 from "../components/Inputs2";
import Footer from "../components/Footer";

function Editar() {
    return (
        <View style={styles.container}>
            <Navbar color="red" icon1={<AntDesign name="arrowleft" size={24} color="white" />} cortexto="white" texto="Editar" icon2={<AntDesign name="checkcircle" size={24} color="white" />}/> 
            <View style={styles.blocoInputs}>
                <Input2 texto={"Nº Inventário"} placeholder="957689"/>
                <Input2 texto={"Descrição"} placeholder="CADEIRA GIRATÓRIA"/>
                <Input2 texto={"Local"} placeholder="SALA C13"/>
                <Input2 texto={"Responsável"} placeholder="CARLOS"/>
                <Input2 texto={"Data de Registro"} placeholder="05/03/2024"/>
            </View>
            <Footer color="white" icon1={<MaterialCommunityIcons name="camera-flip" size={24} color="#595959" />} icon2 = {<FontAwesome5 name="list-ol" size={24} color="#595959" />}/>
        </View>
    )
}
const styles = StyleSheet.create({
    blocoInputs:{
        marginTop: 30,
        height: 670
    },
    container: {
        backgroundColor: "white"
    }

})

export default Editar