import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Provider } from 'react-redux';
import Store from "./store/store.js";

import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from './store/store.js';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"

import StartScreen from './components/screens/StartScreen';
import LoginScreen from './components/screens/LoginScreen.js';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName='StartScreen'
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
      />
    </Stack.Navigator>
  )
}

function App(props) {
  return (
    <Provider store={Store}>
      <PersistGate loading={null} persistor={Persistor}>
        <View style={styles.container}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;