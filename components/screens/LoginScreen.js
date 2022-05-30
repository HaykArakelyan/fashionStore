import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';

function LoginScreen(props) {
    return (
        <View style={styles.container}>
            <ImageBackground>

            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
})

export default LoginScreen;