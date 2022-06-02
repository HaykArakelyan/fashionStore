import "react-native-gesture-handler";

import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function OrdersScreen(props) {
    return (
        <View style={styles.container}>
            <Text>
                OrdersScreen
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

export default OrdersScreen;