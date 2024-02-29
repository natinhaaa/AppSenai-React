import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import BlocoCadeira from '../components/BlocoCadeira';


function Inventarios() {
    return (
        <ScrollView>
            <Navbar 
                icon1={[<TouchableOpacity><Octicons name="three-bars" size={24} color="black" /></TouchableOpacity>]}
                icon2={[<TouchableOpacity><AntDesign name="search1" size={24} color="black" /></TouchableOpacity>]}>
            </Navbar>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
            <BlocoCadeira/>
        </ScrollView>
    );
}

export default Inventarios;