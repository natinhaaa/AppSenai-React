import CustomDrawer from '@comp/CustomDrawer'
import { Drawer } from 'expo-router/drawer';
import { MaterialCommunityIcons, Ionicons, FontAwesome6 } from '@expo/vector-icons';
import { useColor } from '../../../temas/tema';
import { Link } from 'expo-router';
import { View } from 'react-native';

export default function layout() {
    const cores = useColor()
    return (
        <Drawer drawerContent={(...props) => (
            CustomDrawer(...props)
        )}>
            <Drawer.Screen name="Home" options={{
                headerShown: false,
                drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                drawerIcon: () => (
                    <FontAwesome6 name="user-large" size={24} color={cores.textColorPrimaryVariant} />
                )
            }} />

            <Drawer.Screen name="Perfil" options={{
                headerShown: true,
                drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                drawerIcon: () => (
                    <MaterialCommunityIcons name="account" size={24} color={cores.textColorPrimaryVariant} />
                )
            }} />

            <Drawer.Screen name="Sobre" options={{
                    headerShown: true,
                    drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                    drawerIcon: () => (
                        <Ionicons name="information-circle" size={24} color={cores.textColorPrimaryVariant} />
                    )
                }}
            />

            <Drawer.Screen name="Suporte" options={{
                    headerShown: true,
                    drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                    drawerIcon: () => (
                        <Ionicons name="chatbox-ellipses" size={24} color={cores.textColorPrimaryVariant} />
                    )
                }}
            />
            <Drawer.Screen name="Sair" options={{
                    headerShown: true,
                    drawerLabelStyle: { color: cores.textColorPrimaryVariant },
                    drawerIcon: () => (
                        <Ionicons name="exit" size={24} color={cores.textColorPrimaryVariant} />
                    )
                }}
            />
            
        </Drawer>
    )
}