import React from 'react'
import {Text, StyleSheet} from 'react-native'

const CustomComponent = () => {
    return <Text style={styles.textStyle}>Custom Component</Text>
}

const styles = StyleSheet.create({
    textStyle: {
        color: "red",
        fontSize: 30
    }
})

export default CustomComponent