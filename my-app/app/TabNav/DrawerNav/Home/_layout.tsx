import { Stack } from "expo-router";
import { DrawerToggleButton } from "@react-navigation/drawer";
import { useColor } from "../../../../temas/tema";

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
                    headerTitleAlign: 'center',
                    headerTitle: "Cadastro de Itens",
                    headerTintColor: cores.colorTitle,
                    headerStyle: {
                        backgroundColor: "#FF0000"
                    }
                }}/>
                <Stack.Screen name="DescItem" options={{
                    headerTitleAlign: 'center',
                    headerTitle: "Descrição do Item",
                    headerTintColor: cores.colorTitle
                }}/>
                <Stack.Screen name="Editar" options={{
                    headerTitleAlign: 'center',
                    headerTintColor: cores.colorTitle
                }}/>
            </Stack>
        </>
        
    )
}