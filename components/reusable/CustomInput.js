import React from 'react';
import {
    TextInput,
    StyleSheet,
} from 'react-native';

function CustomInput({
    placeholderText,
    inputColor,
    textColor,
    textSize = 14,
    isPassword,
    onFocusIn,
    onFocusOut,
    hasBorder,
    updateText,
}) {

    const styles = StyleSheet.create({
        textInput: {
            backgroundColor: inputColor,
            borderRadius: 15,
            paddingHorizontal: 20,
            paddingVertical: 10,
            color: textColor,
            fontSize: textSize,
            borderWidth: hasBorder ? 2 : 0,
            borderColor: "#FE7825",
            borderStyle: "solid"
        }
    })

    return (
        <TextInput
            placeholder={placeholderText}
            style={styles.textInput}
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


export default CustomInput;