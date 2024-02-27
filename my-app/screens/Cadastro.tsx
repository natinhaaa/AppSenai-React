import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from '../components/Header';
import Input from '../components/Inputs';
import Botao from '../components/Botao';

function Cadastro() {
    return (
        <View>
            <Header color={"#FF0000"} subtitle={"Cadastre-se"}></Header>
            <StatusBar backgroundColor="black"/>
                <Input texto={"Nome:"} input={"Digite seu nome"}></Input>
                <Input texto={"Sobrenome:"} input={"Digite seu sobrenome"}></Input>
                <Input texto={"E-mail:"} input={"Digite seu e-mail"}></Input>
                <Input texto={"Senha:"} input={"Digite uma senha"}></Input>
                <Input texto={"Confirmar senha:"} input={"Confirme a senha"}></Input>
                <Botao texto_botao={"Cadastre-se"}></Botao>
        </View>
    );
}

export default Cadastro;