import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function CustomButton({
    title,
    buttonColor,
    textColor,
    handlePress,
}) {
    return (
        <TouchableOpacity
            onPress={handlePress}
            style={{
                backgroundColor: buttonColor,
                borderRadius: 15,
            }}
        >
            <Text
                style={{
                    alignSelf: "center",
                    color: textColor,
                    paddingVertical: 20,
                }}
            >{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;