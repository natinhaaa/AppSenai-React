import { StatusBar } from 'expo-status-bar';
import { ScrollView, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { Octicons, AntDesign, Feather } from '@expo/vector-icons';
import BlocoCadeira from '@comp/BlocoCadeira';
import { Ionicons, MaterialCommunityIcons, Foundation } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { useColor } from '../../../../temas/tema';


export default function Inventarios() {
    const cores = useColor()
    const styles = StyleSheet.create({

        adicionar: {
            position: "absolute",
            right: 20,
            bottom: 20
        },
        container: {
            backgroundColor: cores.bgPrimary
        }
    
    })
    return (
    <>
        <ScrollView style={[styles.container]}>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            <Link href="/TabNav/DrawerNav/Home/DescItem">
                <BlocoCadeira numerocadeira={"956389"} textocadeira={"CADEIRA  SENAI"} />
            </Link>
            
        </ScrollView>
        <Link href="/TabNav/DrawerNav/Home/AddItems" asChild>
            <TouchableOpacity>
                <Ionicons style={styles.adicionar} name="add-circle-sharp" size={55} color="red" />
            </TouchableOpacity>
        </Link>
        
    </>
    )
}