import React from 'react';
import { StyleSheet, View } from 'react-native';

import firebase from 'firebase';

import CounterList from '../components/CounterList';
import CircleButton from '../elements/CircleButton';

class CounterListScreen extends React.Component {
  state = {
    counterList: [],
  }

  componentDidMount() {
    const { currentUser } = firebase.auth();
    const db = firebase.firestore();
    db.collection(`users/${currentUser.uid}/counters`)
      .get()
      .then((snapshot) => {
        const counterList = [];
        snapshot.forEach((doc) => {
          console.log(doc);
          counterList.push({ ...doc.data(), key: doc.id });
        });
        this.setState({ counterList });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handlePress() {
    this.props.navigation.navigate('CounterEdit');
  }

  render() {
    return (
      <View style={styles.container}>
        <CounterList counterList={this.state.counterList} navigation={this.props.navigation} />
        <CircleButton
          onPress={this.handlePress.bind(this)}
        >
          +
        </CircleButton>
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
