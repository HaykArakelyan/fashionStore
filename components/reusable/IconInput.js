import React from 'react';
import { View, StyleSheet, TextInput } from 'react-native';

import IconFA from "react-native-vector-icons/FontAwesome";

function IconInput({ placeholder, iconName, iconColor }) {
    return (
        <View style={styles.container}>
            <IconFA
                color={iconColor}
                name={iconName}
                size={20}
            />
            <View>
                <TextInput
                    placeholder={placeholder}
                    style={styles.textInput}
                />
            </View>
        </View>
    );
}


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

export default IconInput;