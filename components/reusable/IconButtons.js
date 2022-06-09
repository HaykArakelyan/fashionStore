import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

import IconFA from "react-native-vector-icons/FontAwesome";

function IconsButtons({
    iconColor,
    iconName,
    style,
    title,
}) {
    return (
        <TouchableOpacity style={styles.button}>
            <IconFA
                name={iconName}
                size={15}
                color={iconColor}
                style={styles.buttonIcon}
            />
            <View style={styles.buttonTextContainer}>
                <Text style={[styles.buttonText, style]}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    button: {
        backgroundColor: "white",
        borderRadius: 15,
        flexDirection: "row",
        marginBottom: 20,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    buttonIcon: {
        alignSelf: "center",
    },
    buttonTextContainer: {
        flex: 1,
    },
    buttonText: {
        textAlign: "center",
    },
})

export default IconsButtons;