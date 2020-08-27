import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

class CounterList extends React.Component {
  render() {
    return (
      <View style={styles.counterList}>
        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>カウントしたいもの</Text>
          <View style={styles.counterNumber}>
            <Text style={styles.decrease}>-</Text>
            <Text style={styles.count}>23</Text>
            <Text style={styles.increase}>+</Text>
          </View>
        </View>

        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>カウントしたいもの</Text>
          <View style={styles.counterNumber}>
            <Text style={styles.decrease}>-</Text>
            <Text style={styles.count}>23</Text>
            <Text style={styles.increase}>+</Text>
          </View>
        </View>

        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>カウントしたいもの</Text>
          <View style={styles.counterNumber}>
            <Text style={styles.decrease}>-</Text>
            <Text style={styles.count}>23</Text>
            <Text style={styles.increase}>+</Text>
          </View>
        </View>

        <View style={styles.counterItem}>
          <Text style={styles.counterTitle}>カウントしたいもの</Text>
          <View style={styles.counterNumber}>
            <Text style={styles.decrease}>-</Text>
            <Text style={styles.count}>23</Text>
            <Text style={styles.increase}>+</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  counterList: {
    width: '100%',
    flex: 1,
    paddingTop: 90,
  },
  counterItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    backgroundColor: '#fff',
    paddingBottom: 25,
  },
  counterTitle: {
    fontSize: 18,
    marginBottom: 5,
    paddingTop: 10,
  },
  counterNumber: {
    fontSize: 20,
    backgroundColor: '#0C7489',
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  count: {
    color: '#fff',
    fontSize: 18,
    paddingLeft: 20,
    paddingRight: 20,
  },
  increase: {
    color: '#fff',
    fontSize: 18,
  },
  decrease: {
    color: '#fff',
    fontSize: 18,
  },
});

export default CounterList;
