import { createStackNavigator } from "@react-navigation/stack";
import React from "react";

import { useSelector } from "react-redux";

import StartScreen from './screens/StartScreen';
import LoginScreen from './screens/LoginScreen.js';
import RegisterScreen from './screens/RegisterScreen.js';
import HomeScreen from "./screens/HomeScreen.js";

import GoBackButton from "./screens/GoBackButton";


function StackNavigator() {
    const Stack = createStackNavigator();

    const { isLoggedIn } = useSelector((state) => state.isLoggedIn)

    return (
        <Stack.Navigator
            initialRouteName={
                isLoggedIn
                    ? "HomeScreen"
                    : 'StartScreen'
            }
            screenOptions={{
                headerShown: false,
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
                options={{
                    headerShown: true,
                    headerTitle: "",
                    headerLeft: () => <GoBackButton />
                }}
            />
            <Stack.Screen
                name='HomeScreen'
                component={HomeScreen}
                options={{
                    headerTitle: "",
                    headerShown: true,
                    headerLeft: () => <GoBackButton />
                }}
            />
        </Stack.Navigator>
    )
}

export default StackNavigator;