import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SquaredcircleBackground({ title, titleColor, bgColor }) {

    const styles = StyleSheet.create({
        container: {
            alignItems: "center",
            backgroundColor: bgColor,
            borderRadius: 15,
            justifyContent: "center",
            padding: 10,
        },
        text: {
            color: titleColor,
        }
    })

    return (
        <TouchableOpacity>
            <View style={styles.container}>
                <Text style={styles.text}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>

    );
}

export default SquaredcircleBackground;