import {Drawer} from 'expo-router/drawer'
import CustomDrawer from '@comp/CustomDrawer'
import { MaterialIcons } from '@expo/vector-icons';

// pagina ao lado, puxar pro lado pra visualizar

export default function layout() {
    return (
        <>
            <Drawer drawerContent={(...props) => (
                CustomDrawer(...props)
            )}>
                <Drawer.Screen name="Home" options={{ headerShown: false, drawerIcon: ({size, color}) =>(
                    <MaterialIcons name="home" size={size} color={color} />
                )  }} />
            </Drawer>
        </>
    
    )
}