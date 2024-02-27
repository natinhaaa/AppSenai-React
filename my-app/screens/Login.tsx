import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Inputs';
import Botao from '../components/Botao';

function Login() {
    return (
        <View>
            <Header color={"#000000"} subtitle={"Login"}></Header>
            <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>
            <StatusBar backgroundColor="black"/>
                <Input texto={"E-mail:"} input={"Insira seu e-mail"}></Input>
                <Input texto={"Senha:"} input={"Insira sua senha"}></Input>
                <Botao texto_botao={"Login"}></Botao>
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        display: "flex",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 15
    }
});

export default Login;