import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons, Feather, AntDesign } from '@expo/vector-icons';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlocoDesc from "../components/BlocoDesc";
import { Link } from "expo-router";

function DescItem() {
    return (
        <>
            <View style={styles.container}>
                <Navbar color="#FF0000" icon1={<AntDesign name="arrowleft" size={24} color="white" />} cortexto="white" texto="Descrição do item" icon2={<AntDesign name="pluscircleo" size={24} color="white" />}/> 
                <ScrollView>
                    <View style={styles.blocoItens}>
                        <BlocoDesc titulo="N° do Inventário:" descriçao="957689"/>
                        <BlocoDesc titulo="Descrição:" descriçao="CADEIRA GIRATÓRIA"/>
                        <BlocoDesc titulo="Local:" descriçao="SALA C13"/>
                        <BlocoDesc titulo="Responsável:" descriçao="CARLOS"/>
                        <BlocoDesc titulo="Data de Registro" descriçao="05/03/2024"/>
                    </View>
                </ScrollView>
                <Link href="/Editar" asChild>
                    <TouchableOpacity>
                        <MaterialCommunityIcons style={styles.editar} name="pencil-circle" size={55} color="red" />
                    </TouchableOpacity>
                </Link>
                
                <Footer color="#FFFFFF" icon1={<MaterialCommunityIcons name="camera-flip" size={24} color="#595959" />} icon2 = {<FontAwesome5 name="list-ol" size={24} color="#595959" />}/>
            </View>
        </>
        
    )
}
const styles = StyleSheet.create({

    container:{
        flex: 1
    },

    blocoItens:{
        height: 680,
        backgroundColor: "white"
    },

    editar: {
        position: "absolute",
        right: 20,
        bottom: 20
    }

})

export default DescItem