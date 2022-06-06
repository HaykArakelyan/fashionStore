import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { useSelector } from "react-redux";

import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import HomeScreen from "./screens/HomeScreen.js";

import GoBackButton from "./screens/GoBackButton";

import { useNavigation } from "@react-navigation/native";

function StackNavigator() {
    const Stack = createStackNavigator();
    const navigation = useNavigation();

    const { isLoggedIn } = useSelector((state) => state.isLoggedIn)

    return (
        <Stack.Navigator
            initialRouteName={
                isLoggedIn
                    ? "HomeScreen"
                    : 'StartScreen'
            }
            screenOptions={{
                headerTitle: "",
                headerShown: navigation.canGoBack(),
                headerLeft:
                    navigation.canGoBack()
                        ? () => <GoBackButton />
                        : null
            }}
        >
            <Stack.Screen
                name='StartScreen'
                component={StartScreen}
            />
            <Stack.Screen
                name='LoginScreen'
                component={LoginScreen}
                key="LoginScreen"
            />
            <Stack.Screen
                name='RegisterScreen'
                component={RegisterScreen}
            />
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;