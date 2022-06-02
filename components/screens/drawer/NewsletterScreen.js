import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function NewsletterScreen(props) {
    return (
        <View style={styles.container}>
            <Text>
                NewsletterScreen
            </Text>
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

export default NewsletterScreen;