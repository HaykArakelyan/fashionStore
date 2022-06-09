import React from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

function CustomInput({
    placeholderText,
    isPassword,
    onFocusIn,
    onFocusOut,
    updateText,
    style,
}) {

    return (
        <TextInput
            placeholder={placeholderText}
            style={[styles.textInput, style]}
            secureTextEntry={isPassword}
            onFocus={onFocusIn}
            onBlur={onFocusOut}
            onChangeText={(text) => {
                if (updateText !== undefined) {
                    updateText(text)
                }
            }}
        >

        </TextInput>
    );
}

const styles = StyleSheet.create({
    textInput: {
        backgroundColor: "white",
        borderColor: "#FE7825",
        borderRadius: 15,
        borderStyle: "solid",
        color: "#979797",
        paddingHorizontal: 20,
        paddingVertical: 10,
    }
})


export default CustomInput;