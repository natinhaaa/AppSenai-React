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
                    headerTitle: "Lista"
                }}/>
                <Stack.Screen name="AddItems" options={{
                    headerTitleAlign: 'center'
                }}/>
                <Stack.Screen name="DescItem" options={{
                    headerTitleAlign: 'center'
                }}/>
                <Stack.Screen name="Editar" options={{
                    headerTitleAlign: 'center'
                }}/>
            </Stack>
        </>
        
    )
}