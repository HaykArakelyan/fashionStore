import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

function CustomButton({
    buttonColor,
    handlePress,
    textColor,
    title,
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
                    paddingHorizontal: 20,
                    paddingVertical: 20,
                }}
            >{title}</Text>
        </TouchableOpacity>
    );
}

export default CustomButton;