import { Stack } from "expo-router";

export default function Layout() {
    return (
        <Stack screenOptions={{
            headerTransparent: true,
            headerTintColor: 'white',
            headerTitle: "",
            statusBarStyle: 'light'
            
        }}>
            <Stack.Screen name="index" options={{
                statusBarColor: "#000000"
            }}></Stack.Screen>

            <Stack.Screen name="Cadastro" options={{
                statusBarColor: "#FF0000"
            }}></Stack.Screen>

            <Stack.Screen name="RecSenha" options={{
                statusBarColor: "#011E83"
            }}></Stack.Screen>
            <Stack.Screen name="drawer" options={{
                headerShown: false
            }}></Stack.Screen>
            

        </Stack>
    )
}