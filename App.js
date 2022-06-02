import "react-native-gesture-handler";

import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import Store from "./store/store.js";

import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from './store/store.js';

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native"

import Icon from "react-native-vector-icons/FontAwesome";
import { useNavigation } from '@react-navigation/native';

import StartScreen from './components/screens/StartScreen';
import LoginScreen from './components/screens/LoginScreen.js';
import RegisterScreen from './components/screens/RegisterScreen.js';
import HomeScreen from "./components/screens/HomeScreen.js"
import CustomButton from './components/reusable/CustomButton.js';

const Stack = createStackNavigator();

const StackNavigator = () => {
  const navigation = useNavigation()
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
      <Stack.Screen
        name='RegisterScreen'
        component={RegisterScreen}
        options={{
          headerShown: true,
          headerTitle: "",
          headerLeft: () =>
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <CustomButton
                title={
                  <Icon
                    name='arrow-left'
                    size={15}
                    onPress={() =>
                      navigation.navigate("LoginScreen")}
                  />}
              />
            </View>,
        }}
      />
      <Stack.Screen
        name='HomeScreen'
        component={HomeScreen}
        options={{
          headerTitle: "",
          headerShown: true,
          headerLeft: () =>
            <View
              style={{
                paddingHorizontal: 20,
              }}
            >
              <CustomButton
                title={
                  <Icon
                    name='arrow-left'
                    size={15}
                    onPress={() =>
                      navigation.navigate("LoginScreen")}
                  />}
              />
            </View>,
        }}
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