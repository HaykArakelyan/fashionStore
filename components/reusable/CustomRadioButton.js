import React, { useState } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';

function CustomRadioButton({
    activeBgColor = bgColor,
    activeTextColor,
    activeBorderColor,
    bgColor,
    borderColor,
    hadnlePress,
    isActive,
    text,
    textColor,
    setRender,
}) {

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            alignSelf: "center",
            // backgroundColor: isActive ? activeBgColor : bgColor,
            // borderColor: isActive ? activeBorderColor : borderColor,
            borderRadius: 50,
            borderStyle: "solid",
            // borderWidth: isActive ? 0 : 2,
            // height: isActive ? 26 : 30,
            justifyContent: "center",
            marginHorizontal: 3,
            // width: isActive ? 26 : 30,
        },
        text: {
            // color: isActive ? activeTextColor : textColor,
            fontSize: 12,
        }
    })


    return (
        <TouchableOpacity
            style={styles.container}
            onPress={() => {
                hadnlePress(text);
            }}
        >
            <Text style={styles.text}>
                {text}
            </Text>
        </TouchableOpacity>
    );
}

export default CustomRadioButton;