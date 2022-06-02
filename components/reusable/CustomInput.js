import React from 'react';
import { TextInput } from 'react-native';

function CustomInput({
    placeholderText,
    inputColor,
    textColor,
    textSize = 14,
    isPassword,
    onFocusIn,
    onFocusOut,
    hasBorder,
    updatePassword,
}) {
    return (
        <TextInput
            placeholder={placeholderText}
            style={{
                backgroundColor: inputColor,
                borderRadius: 15,
                paddingHorizontal: 20,
                paddingVertical: 10,
                color: textColor,
                fontSize: textSize,
                borderWidth: hasBorder ? 2 : 0,
                borderColor: "#FE7825",
                borderStyle: "solid"
            }}
            secureTextEntry={isPassword}
            onFocus={onFocusIn}
            onBlur={onFocusOut}
            onChangeText={(text) => {
                if (updatePassword !== undefined) {
                    updatePassword(text)
                }
            }}
        >

        </TextInput>
    );
}

export default CustomInput;