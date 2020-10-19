import React from 'react'
import {View, StyleSheet} from 'react-native'

const BoxesScreen = () => {
    return (
        <View style={styles.viewParent}>
            <View style={styles.viewOneStyle}/>
            <View style={styles.viewTwoStyle}/>
            <View style={styles.viewThreeStyle}/>
        </View>
    )
}

const styles = StyleSheet.create({
    viewParent:{
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    viewOneStyle:{
        height: 100,
        width: 100,
        backgroundColor: 'red',
    },
    viewTwoStyle:{
        height: 100,
        width: 100,
        backgroundColor: 'green',
        marginTop: 100
    },
    viewThreeStyle:{
        height: 100,
        width: 100,
        backgroundColor: 'red'
    }
})

export default BoxesScreen