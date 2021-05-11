import React from 'react'
import {FlatList, Text, StyleSheet} from "react-native";

const ListScreen = () => {
    const friends = [
        {name: "Piet", age: 22},
        {name: "Jan", age: 55},
        {name: "Gert", age: 33},
        {name: "Stef", age: 24},
    ]

    return (
        <FlatList
            keyExtractor={friend => friend.name}
            data={friends}
            renderItem={({item}) => {
                return <Text>{item.name} - Age: {item.age}</Text>
            }}>
        </FlatList>
    )
}

export default ListScreen