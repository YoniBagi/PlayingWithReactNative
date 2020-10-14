import React, { useState } from 'react'
import { View, Button, Text, StyleSheet } from 'react-native'
import ColorCounter from '../components/ColorCounter'

const COLOR_INCREMENT = 15;

const ChangeColor = () => {
    const [redColor, setRedColor] = useState(255)
    const [greenColor, setGreenColor] = useState(255)
    const [blueColor, setBlueColor] = useState(255)

    const setColor = (color, change) => {
        switch (color) {
            case 'red': {
                redColor + change < 256 && redColor + change > 0 ? setRedColor(redColor + change) : null
                return;
            }
            case 'green': {
                greenColor + change < 256 && greenColor + change > 0 ? setGreenColor(greenColor + change) : null
                return;
            }
            case 'blue': {
                blueColor + change < 256 && blueColor + change > 0 ? setBlueColor(blueColor + change) : null
                return;
            }
        }
    }
    return <View>
        <ColorCounter
            nameColor='Red'
            onIncrease={() => setColor('red', COLOR_INCREMENT)}
            onDecrease={() => setColor('red', -1 * COLOR_INCREMENT)} />

        <ColorCounter
            nameColor='Green'
            onIncrease={() => setColor('green', COLOR_INCREMENT)}
            onDecrease={() => setColor('green', -1 * COLOR_INCREMENT)} />

        <ColorCounter
            nameColor='Blue'
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={() => setColor('blue', -1 * COLOR_INCREMENT)} />

        <View style={{ height: 100, width: 100, backgroundColor: `rgb(${redColor}, ${greenColor}, ${blueColor})` }} />
        <Text style={styles.titleStyle}>RGB: {redColor}, {greenColor}, {blueColor}</Text>
    </View>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 20
    }
})

export default ChangeColor