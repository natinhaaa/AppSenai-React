import { View, Text, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import Input from "@comp/Inputs"
import Botao from "@comp/Botao"
import Header from "@comp/Header"

export default function RecSenha () {
    return (
        <>
            <View>
                <Header color={"#011E83"} subtitle={"Recuperação de senha"}></Header>
                <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>
                <StatusBar backgroundColor="black"/>
                <Input texto={"E-mail:"} placeholder={"Insira seu e-mail"}></Input>
                <Botao texto_botao={"Recuperar senha"} href="TelasIniciais/Login"></Botao>
            </View>
        </>
        
    )
}

const styles = StyleSheet.create({
    texto: {
        display: "flex",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 15
    }
});