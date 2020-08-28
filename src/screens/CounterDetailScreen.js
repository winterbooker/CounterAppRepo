import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CounterDetailScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
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
    backgroundColor: '#FCD0A1',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
    marginRight: 50,
    marginLeft: 50,
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  counterHeaderTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    paddingBottom: 8,
  },
  counterHeaderDate: {

  },
  counterDelete: {
    backgroundColor: '#EF233C',
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
