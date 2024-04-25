import { View } from "react-native"
import { useColor } from "../../../temas/tema"
import { StyleSheet } from "react-native"

function Suporte(){
    const cores = useColor()
    const styles = StyleSheet.create({

        container:{
            backgroundColor: cores.bgPrimary,
            height: "100%"
        }
    
    })
    return(
        <View style={styles.container} />
        
    )
}

export default Suporte