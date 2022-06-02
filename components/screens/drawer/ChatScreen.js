import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function ChatScreen(props) {
    return (
        <View style={styles.container}>
            <Text>ChatScreen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default ChatScreen;