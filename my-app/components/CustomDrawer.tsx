import { DrawerItemList } from "@react-navigation/drawer";
import { View, Text, Image, StyleSheet } from "react-native";
import { useColor } from "../temas/tema";
import { Link } from "expo-router";

export default function CustomDrawer(props: any) {
    const cores = useColor()
    const styles = StyleSheet.create({
        container: {
            paddingTop: 60,
            backgroundColor: cores.bgPrimary,
            flex: 1
        },
        perfil: {
            padding: 20,
            display: "flex",
            flexDirection: "row"
        },
        textos: {
            display: "flex",
            flexDirection: "column",
            paddingLeft: 15,
            paddingTop: 20,
            color: cores.textColorSecundary
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.perfil}>
                <Image source={require('../assets/flaviojosefo.png')} style={{width: 70, height: 70, borderRadius: 70}}/>
                <View style={[styles.textos]}>
                    <Text style={{ fontWeight: "bold", fontSize: 16, color: cores.colorTextPerfil }}>Flávio Josefo</Text>
                    <Text style={{color: cores.colorTextPerfil}}>flavio@gmail.com</Text>
                </View>
            </View>
            <DrawerItemList {...props} />
        </View>
    )
}