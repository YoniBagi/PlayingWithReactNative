import React from 'react'
import { Button, View, Text } from 'react-native'

const ColorCounter = ({ nameColor, onIncrease, onDecrease }) => {
    return <View>
        <Text>{nameColor}</Text>
        <Button title={`More ${nameColor}`} onPress={() => { onIncrease() }} />
        <Button title={`Less ${nameColor}`} onPress={() => { onDecrease() }} />
    </View>
}

export default ColorCounter
