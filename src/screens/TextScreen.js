import React, {useState} from'react'
import {View, Text, TextInput, StyleSheet} from 'react-native'
import {color} from "react-native-reanimated";

const TextScreen = () => {
    const [name, setName] = useState('')
    const [password, setPassword] = useState('')

    return <View>
        <TextInput onChangeText = {(newValue) => {setName(newValue)}} style = {styles.input} />
        <Text>My name is: {name}</Text>
        <Text>Enter Password:</Text>
        <TextInput style = {styles.input} onChangeText = {(newValue) => {setPassword(newValue)}}/>
        {password.length < 5 ? <Text style = { styles.errorPassword }>Password must be longer that 5</Text> : null}
    </View>
}

const styles = StyleSheet.create({
    viewStyle:{
      flexDirection: 'row'
    },
    input: {
        margin: 10,
        borderColor: 'black',
        borderWidth: 1,
        padding: 20
    },
    errorPassword:{
        color: 'red'
    }
})

export default TextScreen