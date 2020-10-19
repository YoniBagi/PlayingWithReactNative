import React from "react";
import {View} from "react-native";
import {Text, StyleSheet, Button} from "react-native";

const HomeScreen = ({navigation}) => {
    return (
        <View>
            <Text style={styles.text}>Hekko Work</Text>
            <Button
                title="Go to list screen"
                onPress={() => navigation.navigate('List')}/>

            <Button
                title="Go to Components"
                onPress={() => navigation.navigate('Components')}/>

            <Button
                title="Go to Images"
                onPress={() => navigation.navigate('ImageScreen')}/>
            <Button
                title="Go to Counter Screen"
                onPress={() => navigation.navigate('CounterScreen')}/>
            <Button
                title="Go to Color Screen"
                onPress={() => navigation.navigate('ColorScreen')}/>
            <Button
                title="Go To Change color Screen"
                onPress={() => navigation.navigate('ChangeColor')}/>
            <Button
                title="Go To Counter Screen with reducer"
                onPress={() => navigation.navigate('CounterScreenWithReducer')}/>
            <Button
                title="Go To Text Screen"
                onPress={() => navigation.navigate('TextScreen')}/>
            <Button
                title="Go To Boxes Screen"
                onPress={() => navigation.navigate('Boxes')}/>
        </View>
    );

};

const styles = StyleSheet.create({
    text: {
        fontSize: 30,
        marginBottom: 10
    }
});

export default HomeScreen;
