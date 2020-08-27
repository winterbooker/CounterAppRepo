import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.appbar}>
        <Text style={styles.appbarTitle}>Counter</Text>
      </View>

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

      <View style={styles.counterAddButton}>
        <Text style={styles.counterAddButtonTitle}>+</Text>
      </View>
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
  counterAddButton: {
    position: 'absolute',
    bottom: 50,
    right: 40,
    width: 48,
    height: 48,
    backgroundColor: '#EF233C',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  counterAddButtonTitle: {
    fontSize: 24,
    lineHeight: 24,
    color: '#fff',
  },
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
  appbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 90,
    paddingTop: 35,
    backgroundColor: '#EF233C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  appbarTitle: {
    color: '#fff',
    fontSize: 18,
  },
});
