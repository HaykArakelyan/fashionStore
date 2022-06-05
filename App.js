import React from 'react';
import { View, StyleSheet } from 'react-native';

import { Provider } from 'react-redux';
import Store from "./store/store.js";

import { PersistGate } from 'redux-persist/integration/react';
import { Persistor } from './store/store.js';

import { NavigationContainer } from "@react-navigation/native";

import StackNavigator from "./components/StackNavigator.js";

function App() {
  return (
    <Provider store={Store}>
      <PersistGate
        loading={null}
        persistor={Persistor}
      >
        <View style={styles.container}>
          <NavigationContainer>
            <StackNavigator />
          </NavigationContainer>
        </View>
      </PersistGate>
    </Provider >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default App;