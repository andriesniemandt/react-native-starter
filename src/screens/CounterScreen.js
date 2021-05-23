import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from "react-native";


const CounterScreen = () => {
    const [currentCount, setCurrentCount] = useState(0)

    const increment = () => {
        setCurrentCount(currentCount + 1);
    }

    const decrement = () => {
        setCurrentCount(currentCount - 1);
    }

    return <View>
        <Text>Current Count: {currentCount}</Text>
        <Button title={"Increment"} onPress={increment} />
        <Button title={"Decrement"} onPress={decrement} />
    </View>
}

export default CounterScreen