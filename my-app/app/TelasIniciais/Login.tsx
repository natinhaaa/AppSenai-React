import { StatusBar } from 'expo-status-bar';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Header from '@comp/Header';
import Input from '@comp/Inputs';
import Botao from '@comp/Botao';
import { Link } from 'expo-router';
import { useColor } from '../../temas/tema';

export default function Login() {
    const cores = useColor()
    return (
        <>
            <View style={[styles.container, { backgroundColor: cores.bgPrimary }]}>
                <StatusBar backgroundColor="black"/>
                <Header color={cores.bgSecundary} subtitle={"Login"} />
                <Text style={[styles.texto, { color: cores.textColorSecundary }]}>Faça Login para Acessar o Sistema!</Text>
                <Input cor={cores} texto={"E-mail:"} placeholder={"Insira seu e-mail"} />
                <Input cor={cores} texto={"Senha:"} placeholder={"Insira sua senha"}/>
                <Botao texto_botao="Login" href="TabNav/Scanner"/>
                
                <View style={styles.bloco}>
                    <Link href="TelasIniciais/Cadastro" asChild>
                        <TouchableOpacity>
                            <Text style={[styles.texto2, { color: cores.textColorPrimary }]}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </Link>
                    <Link href="TelasIniciais/RecSenha" asChild>
                        <TouchableOpacity>
                            <Text style={[styles.texto2, { color: cores.textColorPrimary }]}>Esqueceu a senha?</Text>
                        </TouchableOpacity>
                    </Link>

                </View>
            </View>
        </>
        
    );
}

const styles = StyleSheet.create({
    container: {
        height: 860
    },
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