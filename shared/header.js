import React from 'react'
import { StyleSheet, View, Text, Image , ImageBackground} from 'react-native'
import { globalStyles } from '../styles/global'



export default function Header({title}){
    return(
        <ImageBackground  source={require("../assets/game_bg.png")} style={styles.header}>
            <Image source={require("../assets/heart_logo.png")} style={globalStyles.headerImage} />
            <Text style={styles.headerText}>{title}</Text>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    header:{
        width: '100%',
        height: '100%',
        flexDirection : 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#333',
        letterSpacing: 1,
        fontFamily: 'nunito-bold',
      },
})