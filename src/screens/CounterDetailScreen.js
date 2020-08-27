import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Appbar from '../components/Appbar';

class CounterDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Appbar />
        <View style={styles.counterHeader}>
          <Text style={styles.counterHeaderTitle}>カウントしたいもの</Text>
          <Text style={styles.counterHeaderDate}>start: 20/8/27</Text>
        </View>

        <View style={styles.counterDelete}>
          <Text style={styles.counterDeleteText}>削除</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
  },
  counterHeader: {
    height: 150,
    backgroundColor: '#CAD8DE',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 150,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 25,
  },
  counterHeaderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  counterHeaderDate: {

  },
  counterDelete: {
    backgroundColor: '#F24236',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 60,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 15,
  },
  counterDeleteText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CounterDetailScreen;
