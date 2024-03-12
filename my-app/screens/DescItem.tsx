import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons, Feather, AntDesign } from '@expo/vector-icons';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import BlocoDesc from "../components/BlocoDesc";

function DescItem() {
    return (
        <>
            <View style={styles.container}>
                <Navbar color = "#ff0000" icon1={<AntDesign name="arrowleft" size={24} color="white" />} color2="#ffffff" texto="Cadastro de Itens" icon2={<AntDesign name="pluscircleo" size={24} color="white" />}/> 
                <Text>AHNSDIAJHNFIJSAHNFUANFJSAHNFNAIJHNSAUF</Text>
                <ScrollView>
                    <View style={styles.blocoItens}>
                        <BlocoDesc titulo="N° do Inventário:" descriçao="957689"/>
                        <BlocoDesc titulo="Descrição:" descriçao="CADEIRA GIRATÓRIA"/>
                        <BlocoDesc titulo="Local:" descriçao="SALA C13"/>
                        <BlocoDesc titulo="Responsável:" descriçao="CARLOS"/>
                        <BlocoDesc titulo="Data de Registro" descriçao="05/03/2024"/>
                    </View>
                </ScrollView>
                <Footer color="#ffffff" icon1={<MaterialCommunityIcons name="camera-flip" size={24} color="gray" />} icon2 = {<FontAwesome5 name="list-ol" size={24} color="gray" />}/>
            </View>
        </>
        
    )
}
const styles = StyleSheet.create({

container:{
    flex: 1
},

blocoItens:{
    width: "100%",
    height: "100%",
    backgroundColor: "#fbfbfb"
}

})
export default DescItem