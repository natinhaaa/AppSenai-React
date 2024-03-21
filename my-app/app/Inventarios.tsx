import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Octicons, AntDesign, Feather } from '@expo/vector-icons';
import Navbar from '../components/Navbar';
import BlocoCadeira from '../components/BlocoCadeira';
import Footer from '../components/Footer';
import { Ionicons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';


function Inventarios() {
    return (
    <>
        <Navbar color="white" icon1={<AntDesign name="arrowleft" size={24} color="black" />} cortexto="black" texto="Lista" icon2={<AntDesign name="pluscircleo" size={24} color="black" />}/> 

        <ScrollView style={{flex: 1}}>
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
        <TouchableOpacity>
            <Ionicons style={styles.adicionar} name="add-circle-sharp" size={55} color="red" />
        </TouchableOpacity>
        <Footer color="#FF0000" icon1={<MaterialCommunityIcons name="camera-flip-outline" size={24} color="white" />} icon2={<Foundation name="list-number" size={24} color="white" />}/>
    </>
);
}

const styles = StyleSheet.create({

    adicionar: {
        position: "absolute",
        right: 20,
        bottom: 20
    }

})

export default Inventarios;