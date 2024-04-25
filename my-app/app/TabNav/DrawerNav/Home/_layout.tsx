import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useColor } from "../../../../temas/tema";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Layout() {
    const cores = useColor();

    return (
        <>
            <Stack>
                <Stack.Screen name="Inventarios" options={{
                    headerLeft: () => (
                        <DrawerToggleButton tintColor={cores.colorTitle2}/>
                    
                    ),
                    headerSearchBarOptions: {
                        placeholder: "Pesquisar",
                        hintTextColor: cores.colorTitle2,
                        headerIconColor: cores.colorTitle2
                        
                    },
                    headerTitleAlign: "center",
                    headerTitle: "Lista",
                    headerTintColor: cores.colorTitle2,
                    headerStyle: {
                        backgroundColor: cores.colorHeaderInvent
                    }


                    

                }}/>
                <Stack.Screen name="AddItems" options={{
                    headerRight: () => (
                        <Link href="TabNav/DrawerNav/Home/Inventarios">
                            <Ionicons name="add-circle-outline" size={35} color="white" />
                        </Link>
                        
                    ),
                    headerTitleAlign: 'center',
                    headerTitle: "Cadastro de Itens",
                    headerTintColor: cores.colorTitle,
                    headerStyle: {
                        backgroundColor: "#FF0000"
                    }
                }}/>
                <Stack.Screen name="DescItem" options={{
                    headerRight: () => (
                        <Link href="TabNav/DrawerNav/Home/Inventarios">
                            <Ionicons name="reload" size={30} color="white" />
                        </Link>
                    ),
                    headerTitleAlign: 'center',
                    headerTitle: "Descrição do Item",
                    headerTintColor: cores.colorTitle,
                    headerStyle: {
                        backgroundColor: "#FF0000"
                    }
                }}/>
                <Stack.Screen name="Editar" options={{
                    headerRight: () => (
                        <Link href="TabNav/DrawerNav/Home/Inventarios">
                            <AntDesign name="checkcircle" size={28} color="white" />
                        </Link>
                    ),
                    headerTitleAlign: 'center',
                    headerTintColor: cores.colorTitle,
                    headerStyle: {
                        backgroundColor: "#FF0000"
                    }
                }}/>
            </Stack>
        </>
        
    )
}