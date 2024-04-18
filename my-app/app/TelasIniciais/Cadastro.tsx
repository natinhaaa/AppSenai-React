import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet } from 'react-native';
import Header from '@comp/Header';
import Input from '@comp/Inputs';
import Botao from '@comp/Botao';
import { useColor } from '../../temas/tema';
import { View } from 'react-native';

export default function Cadastro() {
    const cores = useColor()
    return (
        <>
            <ScrollView>
                <Header color={cores.bgSecundary} subtitle={"Cadastre-se"}></Header>
                <StatusBar backgroundColor="black"/>
                <View style={[{backgroundColor: cores.bgPrimary}]}>
                    <Input style={styles.input} texto={"Nome:"} placeholder={"Digite seu nome"}></Input>
                    <Input style={styles.input} texto={"Sobrenome:"} placeholder={"Digite seu sobrenome"}></Input>
                    <Input style={styles.input} texto={"E-mail:"} placeholder={"Digite seu e-mail"}></Input>
                    <Input style={styles.input} texto={"Senha:"} placeholder={"Digite uma senha"} secureTextEntry></Input>
                    <Input style={styles.input} texto={"Confirmar senha:"} placeholder={"Confirme a senha"} secureTextEntry></Input>
                </View>
                <Botao texto_botao={"Cadastre-se"} href="TelasIniciais/Login"></Botao>
            </ScrollView>
        </>
    );
}

const styles = StyleSheet.create({
    input: {
        maxWidth: 10,
        color: "white"
    }
})