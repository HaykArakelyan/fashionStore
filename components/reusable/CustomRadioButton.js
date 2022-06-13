import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
} from 'react-native';

function CustomRadioButton({
    hadnlePress,
    item,
    style,
    text,
    textStyle,
}) {
    return (
        <TouchableOpacity
            style={[{ backgroundColor: item }, styles.container, style]}
            onPress={() => {
                hadnlePress(item);
            }}
        >
            <Text style={[styles.text, textStyle]}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        alignSelf: "center",
        borderRadius: 50,
        borderStyle: "solid",
        height: 30,
        justifyContent: "center",
        marginHorizontal: 3,
        width: 30,
    },
    text: {
        fontSize: 12,
    }
})

export default CustomRadioButton;