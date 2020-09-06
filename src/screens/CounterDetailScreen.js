import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

const dateString = (date) => {
  if (date == null) { return ''; }
  const dateObject = date.toDate();
  return dateObject.toISOString().split('T')[0];
};

class CounterDetailScreen extends React.Component {
  state = {
    counter: {},
  }

  UNSAFE_componentWillMount() {
    const { params } = this.props.navigation.state;
    this.setState({ counter: params.counter });
  }

  render() {
    const { counter } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.counterHeader}>
          <Text style={styles.counterHeaderTitle}>{counter.body.substring(0, 10)}</Text>
          <Text style={styles.counterHeaderDate}>{dateString(counter.createdOn)}</Text>
        </View>

        <TouchableHighlight style={styles.button} onPress={() => { this.props.navigation.navigate('Home'); }} underlayColor="#D11026">
          <Text style={styles.buttonTitle}>削除する</Text>
        </TouchableHighlight>
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
    marginBottom: 50,
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
  button: {
    backgroundColor: '#EF233C',
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

export default CounterDetailScreen;
