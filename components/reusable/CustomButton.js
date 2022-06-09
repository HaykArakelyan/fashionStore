import React from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';

function CustomButton({
    handlePress,
    title,
    styleButton,
    styleText,
}) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={[
                styles.container,
                styleButton
            ]}
        >
            <Text
                style={[
                    styles.text,
                    styleText
                ]}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#979797",
        borderRadius: 15,
    },
    text: {
        alignSelf: "center",
        color: "#FFFFFF",
        paddingHorizontal: 20,
        paddingVertical: 20,
    }
})

export default CustomButton;