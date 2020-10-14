import React from 'react';
import { Text, StyleSheet, View } from 'react-native'

const ComponentScreen = () => {
    const name = 'tohionatan'
    const greeting = <Text style={styles.nameTextStyle}>My name is {name}</Text>
    return (
        <View>
            <Text style={styles.textStyle}>This is my Copmpenent Screen</Text>
            {greeting}
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 40

    },
    nameTextStyle: {
        fontSize: 30
    }
})

export default ComponentScreen
