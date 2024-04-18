import { useEffect } from 'react'
import { useColorScheme } from 'react-native'

interface Cores {
    bgPrimary: string
    bgSecundary: string
    bgInfo?: string
    textColorPrimary: string
    textColorSecondary: string
    bgPrimaryVariant?: string
    textColorPrimaryVariant: string
    bgHover: string
    bgButton?: string
}


const light: Cores = {
    bgPrimary: "#FFFFFF",
    bgSecundary: "#FF0000",
    bgInfo: "#011E83",
    textColorPrimary: '#101010',
    textColorSecondary: '#FFFFFF',
    bgPrimaryVariant: '#F5F5F5',
    textColorPrimaryVariant: '#595959',
    bgHover: '#F39200',
    bgButton: '#101010'
}
const dark: Cores = {
    bgPrimary: "#240707",
    bgSecundary: "#240707",
    textColorPrimary: '#ffffff',
    textColorSecondary: '##D9D9D9',
    bgInfo: '#FFFFFF',
    bgPrimaryVariant: '#3A2828',
    textColorPrimaryVariant: '#CBCBCB',
    bgHover: '#F39200',
    bgButton: '#FF0000'
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