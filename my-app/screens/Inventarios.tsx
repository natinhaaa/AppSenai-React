import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Octicons, AntDesign, Feather } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import BlocoCadeira from '../components/BlocoCadeira';
import Footer from '../components/Footer';
import { Ionicons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';



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
            <Ionicons style={styles.adicionar} name="add-circle-sharp" size={55} color="red" />
            <Footer color="#FF0000" icon1={<MaterialCommunityIcons name="camera-flip-outline" size={24} color="white" />} icon2={<Foundation name="list-number" size={24} color="white" />}/>
        </>
    );
}

const styles = StyleSheet.create({

    adicionar: {
        position: "absolute",
        right: 20,
        bottom: 80
    }

})

export default Inventarios;