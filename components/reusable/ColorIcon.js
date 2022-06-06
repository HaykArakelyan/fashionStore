import React from 'react';
import { View, StyleSheet } from 'react-native';

function ColorIcon({ color }) {
    const styles = StyleSheet.create({
        container: {
            backgroundColor: color,
            borderRadius: 50,
            height: 15,
            margin: 5,
            width: 15,
        },
    })

    return (
        <View
            style={styles.container}
        />
    );
}


export default ColorIcon;