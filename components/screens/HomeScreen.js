import React from 'react';

// import "react-native-gesture-handler";

import OrdersScreen from "./drawer/OrdersScreen.js"
import ChatScreen from "./drawer/ChatScreen.js";

import {
    View,
    StyleSheet,
    Text
} from 'react-native';

import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
    return (
        <Drawer.Navigator>
            <Drawer.Screen
                name='OrderScreen'
                component={OrdersScreen}
            />
        </Drawer.Navigator>
    )
}

function HomeScreen(props) {
    return (
        <NavigationContainer>
            <DrawerNavigator />
        </NavigationContainer>
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