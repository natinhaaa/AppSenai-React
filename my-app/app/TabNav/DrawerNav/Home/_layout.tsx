import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useColor } from "../../../../temas/tema";
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

export default function Layout() {
    const cores = useColor();
    return (
        <>
            <Stack>
                <Stack.Screen name="Inventarios" options={{
                    headerLeft: () => (
                    <DrawerToggleButton />
                    ),
                    headerSearchBarOptions: {
                        placeholder: "Pesquisar"
                    },
                    headerTitleAlign: "center",
                    headerTitle: "Lista",
                    headerTintColor: cores.colorTitle2
                }}/>
                <Stack.Screen name="AddItems" options={{
                    headerRight: () => (
                        <Ionicons name="add-circle-outline" size={28} color="white" />
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
                        <Ionicons name="reload" size={24} color="white" />
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
                        <AntDesign name="checkcircle" size={24} color="white" />
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