import React from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

class CounterEditScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterHeaderDate}>start: 20/8/27</Text>
        <View style={styles.counterEditInput}>
          <TextInput style={styles.counterEditInputText} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
  },
  counterHeaderDate: {
    fontSize: 14,
    marginTop: 120,
  },
  counterEditInput: {
    height: 150,
    width: 300,
    backgroundColor: '#FCD0A1',
    marginTop: 20,
    padding: 20,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    justifyContent: 'center',
  },
  counterEditInputText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});

export default CounterEditScreen;
