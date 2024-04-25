import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { TouchableOpacity, View } from "react-native";
import { Link } from "expo-router";
import { useColor } from "../../temas/tema";


export default function layout() {
    const cores = useColor();
    return (
        <>
            <Tabs screenOptions={{
                tabBarShowLabel: false
            }}>
                <Tabs.Screen name="Scanner" options={{
                    tabBarStyle: {
                        backgroundColor: "red"
                    },
                    tabBarIcon: ({color, size}) => (
                        <Entypo name="camera" size={size} color={color} />
                    ),
                    tabBarInactiveTintColor: "#fff",
                    headerRight: () => (
                            <Link href="TelasIniciais/Login" style={{ marginRight: 15 }}>
                                <Ionicons name="reload" size={28} color="white" />
                            </Link>
                    ),
                    headerTitle: "Scanner",
                    headerTintColor: cores.colorTitle,
                    headerStyle: {
                        backgroundColor: "#FF0000"
                    }
                }}/>
                <Tabs.Screen name="DrawerNav" options={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: "red"
                    },
                    tabBarIcon: ({color, size}) => (
                        <FontAwesome5 name="list-ol" size={size} color={color} />
                    ),
                    tabBarInactiveTintColor: "#fff"
                }}/>
            </Tabs>
        </>
        
    )
}