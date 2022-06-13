import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ColorIcon({ title, styleColor }) {
    return (
        <View style={[styles.container, styleColor]}>
            <Text>
                {title}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        borderRadius: 50,
        height: 15,
        marginHorizontal: 1,
        width: 15,
    },
})



export default ColorIcon;
