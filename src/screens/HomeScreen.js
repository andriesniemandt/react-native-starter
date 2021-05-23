import React from "react";
import {Text, View, Button, TouchableOpacity, StyleSheet} from "react-native";

const HomeScreen = ({navigation}) => {

    return (
        <View>
            <Button
                onPress={() => navigation.navigate("List")}
                title={"List Component"}/>
            <Button
                onPress={() => navigation.navigate("Custom")}
                title={"Custom Component"}/>
            <Button
                onPress={() => navigation.navigate("Image")}
                title={"Image Demo"}/>
            <Button
                onPress={() => navigation.navigate("Counter")}
                title={"Counter Demo"}/>
            <Button
                onPress={() => navigation.navigate("Colours")}
                title={"Colours Demo"}/>
        </View>
    )
};

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default HomeScreen;