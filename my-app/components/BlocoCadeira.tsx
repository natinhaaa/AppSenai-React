import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router';
import { useColor } from '../temas/tema';

const BlocoCadeira = ({...props})=>{
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
            marginLeft: 15,
            width: 380
        },
    
        numero: {
            fontWeight: "bold",
            marginBottom: 5
        }
    
    })
    return (
            <View style={[styles.container, {backgroundColor: cores.colorBlocoCadeira}]}>
                    <View style={styles.conteudo}>
                        <Text style={[styles.numero, {color: cores.colorTextBloco}]}>{props.numerocadeira}</Text>
                        <Text style={[{color: cores.colorTextBloco}]}>{props.textocadeira}</Text>
                    </View>
            </View>
        
    );
}

export default BlocoCadeira;