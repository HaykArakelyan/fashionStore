import React from 'react';
import {
    View,
    StyleSheet,
    Text,
    TouchableOpacity
} from 'react-native';

import Icon from "react-native-vector-icons/FontAwesome";

function SocialButtons({
    title,
    iconName,
    iconColor,
    titleColor
}) {

    const styles = StyleSheet.create({
        button: {
            backgroundColor: "white",
            borderRadius: 15,
            flexDirection: "row",
            justifyContent: "space-between",
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
            color: titleColor
        },
    })


    return (
        <TouchableOpacity style={styles.button}>
            <Icon
                name={iconName}
                size={15}
                color={iconColor}
                style={styles.buttonIcon}
            />
            <View style={styles.buttonTextContainer}>
                <Text style={styles.buttonText}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>
    );
}

export default SocialButtons;