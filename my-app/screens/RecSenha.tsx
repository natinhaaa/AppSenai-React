import { View, Text, StyleSheet } from "react-native"
import { StatusBar } from "expo-status-bar"
import Input from "../components/Inputs"
import Botao from "../components/Botao"
import Header from "../components/Header"

function RecSenha () {
    return (
        <View>
            <Header color={"#011E83"} subtitle={"Recuperação de senha"}></Header>
            <Text style={styles.texto}>Insira seu e-mail para recuperar a senha!</Text>
            <StatusBar backgroundColor="black"/>
                <Input texto={"E-mail:"} placeholder={"Insira seu e-mail"}></Input>
                <Botao texto_botao={"Recuperar senha"}></Botao>
        </View>
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

export default RecSenha;