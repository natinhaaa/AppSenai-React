import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, TouchableOpacity} from 'react-native';


function Footer({...props}) {
    return (
        <View style={[styles.container, {backgroundColor: props.color}]}>
            <StatusBar style="dark"/>
            <TouchableOpacity  style={styles.icon}>{props.icon1}</TouchableOpacity>
            <TouchableOpacity style={styles.icon}>{props.icon2}</TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width:"100%",
        height: "100%",
        flexDirection: "row",
        alignSelf: "center",
        justifyContent: "center",
        gap: 20,
        borderWidth: 1,
        borderTopColor: "#F5F5F5"
    },

    icon:{
        marginTop: 16,
        height: 30,
        width: 30
    }
});

    export default Footer