import React from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

function IconInput({ placeholder, iconName, iconColor }) {

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            backgroundColor: "white",
            borderRadius: 15,
            flex: 0.95,
            flexDirection: "row",
            paddingHorizontal: 20,
        },
        textInput: {
            color: "#979797",
            flex: 1,
            fontWeight: "500",
        }
    })

    return (
        <View style={styles.container}>
            <Icon
                color={iconColor}
                name={iconName}
                size={20}
            />
            <TextInput
                placeholder={placeholder}
                style={styles.textInput}
            />
        </View>
    );
}

export default IconInput;