import { useEffect } from 'react'
import { useColorScheme } from 'react-native'


export interface Cores {
    bgPrimary: string
    bgSecundary: string
    bgInfo?: string
    textColorPrimary: string
    textColorSecundary: string
    bgPrimaryVariant?: string
    textColorPrimaryVariant: string
    bgHover: string
    bgButton?: string
    bgInput?: string
    colorTextInput?: string,
    borderInput?: string,
    //home
    colorTitle: string,
    colorTitle2: string,
    colorNav: string,
    colorBlocoCadeira: string,
    colorTextBloco: string,
    colorHeaderInvent: string,
    colorBorderBloco: string,
    colorTextPerfil: string
}


const light: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecundary: "#FF0000",
    bgInfo: "#011E83",
    textColorPrimary: '#011E83',
    textColorSecundary: '#000000',
    bgPrimaryVariant: '#F5F5F5',
    textColorPrimaryVariant: '#595959',
    bgHover: '#F39200',
    bgButton: '#101010',
    bgInput: '#F5F5F5',
    colorTextInput: "#595959",
    borderInput: "#F5F5F5",
    colorTitle: "#FFFFFF",
    colorTitle2: "#595959",
    colorNav: "#FFFFFF",
    colorBlocoCadeira: "#FFFFFF",
    colorTextBloco: "#000000",
    colorHeaderInvent: "#FFFFFF",
    colorBorderBloco: "#F5F5F5",
    colorTextPerfil: "#000000"
}
const dark: Cores = {
    // bloco pagina
    bgPrimary: "#240707",
    //bloco header
    bgSecundary: "#240707",
    // outros textos
    textColorPrimary: '#CBCBCB',
    textColorSecundary: '#FFFFFF',
    // texto acima do input
    textColorPrimaryVariant: '#FFFFFF',
    bgHover: '#FF0000',
    // cor botão
    bgButton: '#FF0000',
    // cor input
    bgInput: '#3A2828',
    colorTextInput: "#CBCBCB",
    borderInput: "#3A2828",
    colorTitle: "#FFFFFF",
    colorTitle2: "#FFFFFF",
    colorNav: "#000000",
    colorBlocoCadeira: "#3A2828",
    colorTextBloco: "#FFFFFF",
    colorHeaderInvent: "#3A2828",
    colorBorderBloco: "#4d3737",
    colorTextPerfil: "#FFFFFF"
    
}

export function useColor(){
    const colorScheme = useColorScheme()
    if (colorScheme === 'dark'){
        return dark
    }
    else{
        return light
    }
}