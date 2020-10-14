import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import ImageDetails from './components/ImageDetails'

const ImageScreen = () => {
    return <View>
        <ImageDetails title='Forest' imageSource={require('../assets/forest.jpg')} scoreImage='7' />
        <ImageDetails title='Beach' imageSource={require('../assets/beach.jpg')} scoreImage='8' />
        <ImageDetails title='Mountain' imageSource={require('../assets/mountain.jpg')} scoreImage='9' />
    </View>
}

const styles = StyleSheet.create({})

export default ImageScreen