import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

import { Provider } from 'react-redux';
import { store } from "./store/store.js"

import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from './store/store.js';

import StartScreen from './components/screens/StartScreen';

function App(props) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <View style={styles.container}>
          <StartScreen />
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