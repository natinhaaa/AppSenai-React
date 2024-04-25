import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useColor } from '../temas/tema';

const BlocoDesc = ({...props}) => {
    const cores = useColor()
    const styles = StyleSheet.create({

        container: {
            height: 70,
            width: "100%",
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-between",
            borderBottomWidth: 1,
            borderBottomColor: cores.colorBorderBloco
        },
    
        conteudo: {
            marginLeft: 10
        },
    
        title: {
            fontWeight: "bold",
            marginBottom: 5,
            color: cores.colorTextBloco
        }
    
    })

    return (
        <View style={styles.container}>
            <View style={styles.conteudo}>
                <Text style={styles.title}>{props.titulo}</Text>
                <Text style={[{color: cores.colorTextBloco}]}>{props.descriçao}</Text>
            </View>
        </View>
    );
}


export default BlocoDesc;