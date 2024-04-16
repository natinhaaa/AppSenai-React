import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, useColorScheme, TouchableOpacity } from 'react-native';
import Header from '@comp/Header';
import Input from '@comp/Inputs';
import Botao from '@comp/Botao';
import { Link } from 'expo-router';
import { useColor } from '../../temas/tema';

const cores = useColor()

export default function Login() {
    return (
        <>
            <View>
                <StatusBar backgroundColor="black"/>
                <Header color={cores.bgPrimary} subtitle={"Login"} />
                <Text style={styles.texto}>Faça Login para Acessar o Sistema!</Text>
                <Input texto={"E-mail:"} placeholder={"Insira seu e-mail"} />
                <Input texto={"Senha:"} placeholder={"Insira sua senha"}/>
                <Botao texto_botao="Login" href="TabNav/Scanner"/>
                
                <View style={styles.bloco}>
                    <Link href="TelasIniciais/Cadastro" asChild>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href="TelasIniciais/RecSenha" asChild>
                        <TouchableOpacity>
                            <Text style={styles.texto2}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </Link>

                </View>
            </View>
        </>
        
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