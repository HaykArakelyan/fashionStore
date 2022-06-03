import React from 'react';

import {
    View,
    StyleSheet,
    Text,
} from 'react-native';


function HomeScreen(props) {
    return (
        <View>
            <Text>
                HomeScreen
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "red"
    },
})

export default HomeScreen;