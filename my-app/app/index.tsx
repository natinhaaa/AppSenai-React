import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Inputs';
import Botao from '../components/Botao';
import { Link } from 'expo-router';


function Login() {
    return (
        <View>
            <StatusBar backgroundColor="black"/>
            <Header color={"#000000"} subtitle={"Login"}></Header>
            <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>
            <Input texto={"E-mail:"} placeholder={"Insira seu e-mail"}></Input>
            <Input texto={"Senha:"} placeholder={"Insira sua senha"}></Input>
            <Link href="/Inventarios" asChild>
                <Botao texto_botao={"Login"} onPress={Login}></Botao>
            </Link>
            
            <View style={styles.bloco}>
                <Link href="/Cadastro" asChild>
                    <TouchableOpacity>
                        <Text style={styles.texto2}>Cadastre-se</Text>
                    </TouchableOpacity>
                </Link>
                <Link href="/RecSenha" asChild>
                    <TouchableOpacity>
                        <Text style={styles.texto2}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </Link>

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