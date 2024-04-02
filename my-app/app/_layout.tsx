import { Stack } from 'expo-router';

export default function Layout() {
    return (<Stack>
        <Stack.Screen name='index' options={{
            headerShown: false
        }}/>
        <Stack.Screen name='TelasIniciais/Cadastro' options={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitle: ""
        }}/>
        <Stack.Screen name='TelasIniciais/RecSenha' options={{
            headerTransparent: true,
            headerTintColor: "white",
            headerTitle: ""
        }}/>
        </Stack>
    )
}