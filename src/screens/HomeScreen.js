import React from "react";
import {Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
        <View>
            <Button
                onPress={() => navigation.navigate("List")}
                title={"List Component"}/>
            <TouchableOpacity onPress={() => navigation.navigate("Custom")}>
                <Text>Custom Component</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;