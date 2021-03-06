import React, {useState} from 'react';
import {View, Button, StyleSheet, FlatList} from "react-native";


const ColourScreen = () => {
    const [colours, setColours] = useState([]);

    return <View>
        <Button title={"Add Colour"} onPress={() => {
            setColours([...colours, randomRGB()]);
        }}/>
        <FlatList
            keyExtractor={item => item}
            data={colours}
            renderItem={({item}) => {
                return <View style={{height: 100, width: 100, backgroundColor: item}}/>
            }}/>
    </View>
}

// Helper function
const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`
}

export default ColourScreen