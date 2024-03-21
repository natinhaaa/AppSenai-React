import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Inputs';
import Botao from '../components/Botao';

function Login() {
    return (
        <View>
            <Header color={"#000000"} subtitle={"Login"}></Header>
            <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>
            <StatusBar backgroundColor="black"/>
            <Input texto={"E-mail:"} placeholder={"Insira seu e-mail"}></Input>
            <Input texto={"Senha:"} placeholder={"Insira sua senha"}></Input>
            <Botao texto_botao={"Login"}></Botao>
            <View style={styles.bloco}>
                <TouchableOpacity>
                    <Text style={styles.texto2}>Cadastre-se</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Text style={styles.texto2}>Esqueceu a senha?</Text>
                </TouchableOpacity>
            </View>
            
            
        </View>
    );
}

const styles = StyleSheet.create({
    texto: {
        display: "flex",
        alignSelf: "center",
        marginTop: 25,
        marginBottom: 15
    },

    bloco: {
        flexDirection: "row",
        justifyContent: "space-between",
        margin: 40,
        marginTop: 0
    },

    texto2: {
        color: "#011E83"
    }
});

export default Login;