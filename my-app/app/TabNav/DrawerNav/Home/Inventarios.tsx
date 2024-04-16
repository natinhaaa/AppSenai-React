import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Octicons, AntDesign, Feather } from '@expo/vector-icons';
import BlocoCadeira from '@comp/BlocoCadeira';
import { Ionicons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import { Link } from 'expo-router';


export default function Inventarios() {
    return (
    <>
        <ScrollView style={{flex: 1}}>
            <Link href="/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            <Link href="Home/DescItem">
                <BlocoCadeira />
            </Link>
            
        </ScrollView>
        <Link href="Home/AddItems" asChild>
            <TouchableOpacity>
                <Ionicons style={styles.adicionar} name="add-circle-sharp" size={55} color="red" />
            </TouchableOpacity>
        </Link>
        
    </>
    )
}

const styles = StyleSheet.create({

    adicionar: {
        position: "absolute",
        right: 20,
        bottom: 20
    }

})