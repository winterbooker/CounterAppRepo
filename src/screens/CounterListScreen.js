import React from 'react';
import { StyleSheet, View } from 'react-native';

import CounterList from '../components/CounterList';
import CircleButton from '../elements/CircleButton';

class CounterListScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <CounterList />
        <CircleButton>+</CircleButton>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
});

export default CounterListScreen;
