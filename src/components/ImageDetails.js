import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'

const ImageDetails = (props) => {
    return <View>
        <Image source={props.imageSource} />
        <Text>{props.title}</Text>
        <Text>{props.scoreImage}</Text>
    </View>
}

const styles = StyleSheet.create({})

export default ImageDetails