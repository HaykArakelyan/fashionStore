import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

function SquaredcircleBackground({ title, titleColor, styleBgColor }) {

    return (
        <TouchableOpacity>
            <View style={[styleBgColor, styles.container]}>
                <Text style={titleColor}>
                    {title}
                </Text>
            </View>
        </TouchableOpacity>

    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        borderRadius: 15,
        justifyContent: "center",
        padding: 10,
    },
})

export default SquaredcircleBackground;