import { View, StyleSheet, ScrollView, TouchableOpacity, Text } from "react-native"
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Octicons, Feather, AntDesign } from '@expo/vector-icons';
import BlocoDesc from "@comp/BlocoDesc";
import { Link } from "expo-router";

export default function DescItem() {
    return (
        <>
            <View style={styles.container}>
                <ScrollView>
                    <View style={styles.blocoItens}>
                        <BlocoDesc titulo="N° do Inventário:" descriçao="957689"/>
                        <BlocoDesc titulo="Descrição:" descriçao="CADEIRA GIRATÓRIA"/>
                        <BlocoDesc titulo="Local:" descriçao="SALA C13"/>
                        <BlocoDesc titulo="Responsável:" descriçao="CARLOS"/>
                        <BlocoDesc titulo="Data de Registro" descriçao="05/03/2024"/>
                    </View>
                </ScrollView>
                <Link href="/TabNav/DrawerNav/Home/Editar" asChild>
                    <TouchableOpacity>
                        <MaterialCommunityIcons style={styles.editar} name="pencil-circle" size={55} color="red" />
                    </TouchableOpacity>
                </Link>
                
            </View>
        </>
        
    )
}
const styles = StyleSheet.create({

    container:{
        flex: 1
    },

    blocoItens:{
        height: 720,
        backgroundColor: "white"
    },

    editar: {
        position: "absolute",
        right: 20,
        bottom: 20
    }

})