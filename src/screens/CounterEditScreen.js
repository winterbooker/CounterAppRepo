import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableHighlight } from 'react-native';
import firebase from 'firebase';

class CounterEditScreen extends React.Component {
  state = {
    body: '',
  }

  handlePress() {
    const db = firebase.firestore();
    const { currentUser } = firebase.auth();
    db.collection(`users/${currentUser.uid}/counters`).add({
      body: this.state.body,
      createdOn: new Date(),
    })
      .then((docRef) => {
        console.log(docRef.id);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.counterHeaderDate}>start: 20/8/27</Text>
        <View style={styles.counterEditInput}>
          <TextInput
            style={styles.counterEditInputText}
            value={this.state.body}
            onChangeText={(text) => { this.setState({ body: text }); }}
          />
        </View>
        <TouchableHighlight style={styles.button} onPress={this.handlePress.bind(this)} underlayColor="#0096e0">
          <Text style={styles.buttonTitle}>作成する</Text>
        </TouchableHighlight>
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
    marginBottom: 50,
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
  button: {
    backgroundColor: '#00A6FB',
    height: 48,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    width: '70%',
    alignSelf: 'center',
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CounterEditScreen;
