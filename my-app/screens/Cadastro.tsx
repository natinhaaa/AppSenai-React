import { StatusBar } from 'expo-status-bar';
import { ScrollView } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Inputs';
import Botao from '../components/Botao';

function Cadastro() {
    return (
        <>
            <ScrollView>
                <Header color={"#FF0000"} subtitle={"Cadastre-se"}></Header>
                <StatusBar backgroundColor="black"/>
                    <Input texto={"Nome:"} placeholder={"Digite seu nome"}></Input>
                    <Input texto={"Sobrenome:"} placeholder={"Digite seu sobrenome"}></Input>
                    <Input texto={"E-mail:"} placeholder={"Digite seu e-mail"}></Input>
                    <Input texto={"Senha:"} placeholder={"Digite uma senha"} secureTextEntry></Input>
                    <Input texto={"Confirmar senha:"} placeholder={"Confirme a senha"} secureTextEntry></Input>
                    <Botao texto_botao={"Cadastre-se"}></Botao>
            </ScrollView>
        </>
    );
}

export default Cadastro;