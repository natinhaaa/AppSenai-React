import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cadastro from './screens/Cadastro';
import Login from './screens/Login';
import RecSenha from './screens/RecSenha';
import Load from './screens/Load';
import Inventarios from './screens/Inventarios';
import AddItems from './screens/AddItems';
import DescItem from './screens/DescItem';
import Scanner from './screens/Scanner';
import Editar from './screens/Editar';

export default function App() {
  return (
    <Editar />
  );
}