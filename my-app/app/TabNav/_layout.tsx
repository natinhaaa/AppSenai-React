import { Tabs } from "expo-router";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';


export default function layout() {
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
                    tabBarInactiveTintColor: "#fff"
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