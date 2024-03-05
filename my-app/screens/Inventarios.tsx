import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, Text } from 'react-native';
import { Octicons, AntDesign, Feather } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import BlocoCadeira from '../components/BlocoCadeira';
import Footer from '../components/Footer';


function Inventarios() {
    return (
        <>
            <Navbar>
                <TouchableOpacity>
                    <Octicons name="three-bars" size={24} color="black" />
                </TouchableOpacity>
                <Text>Lista</Text>
                <TouchableOpacity>
                    <Feather name="search" size={24} color="black" />
                </TouchableOpacity>
            </Navbar>
            <ScrollView>
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
                <BlocoCadeira />
            </ScrollView>
            <Footer />
        </>
    );
}

export default Inventarios;