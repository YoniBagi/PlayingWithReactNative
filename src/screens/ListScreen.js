import { WorldAlignment } from 'expo/build/AR';
import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

const ListScreen = () => {
    const friends = [
        { name: "Friend #1" },
        { name: "Friend #2" },
        { name: "Friend #3" },
        { name: "Friend #4" },
        { name: "Friend 5" }
    ];

    return <FlatList
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
            return <Text style={styles.titleStyle}>{item.name}</Text>
        }} />
    return <Text style={styles.titleStyle}>List Screen</Text>
}

const styles = StyleSheet.create({
    titleStyle: {
        fontSize: 10
    }
});

export default ListScreen;