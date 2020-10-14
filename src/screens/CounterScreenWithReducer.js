import React, {useReducer} from 'react'
import {View, Button, Text} from 'react-native'

const reducer = (state, action) => {
    return {...state, count: state.count + action.payload};
}

const CounterScreenWithReducer = () => {
    const [state, dispatch] = useReducer(reducer, {count: 0})

    return (
        <View>
            <Button title="Increase" onPress={() => dispatch({payload: 1})}/>
            <Button title="Decrease" onPress={() => dispatch({payload: 1})}/>
            <Text>Current Count: {state.count}</Text>
        </View>
    )

}
export default CounterScreenWithReducer