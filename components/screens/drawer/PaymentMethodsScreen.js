import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

function PaymentMethodsScreen(props) {
    return (
        <View style={styles.container}>
            <Text>
                PaymentMethodsScreen
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

export default PaymentMethodsScreen;