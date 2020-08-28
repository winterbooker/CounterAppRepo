import React from 'react';
import { StyleSheet, View } from 'react-native';

import Appbar from './src/components/Appbar';
import SignupScreen from './src/screens/SignupScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Appbar />
      <SignupScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F1E4',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
