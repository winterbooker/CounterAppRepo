import React from 'react';
import { StyleSheet, View } from 'react-native';

import CounterList from '../components/CounterList';
import CircleButton from '../elements/CircleButton';

class CounterListScreen extends React.Component {
  handlePress() {
    const { params } = this.props.navigation.state;
    this.props.navigation.navigate('CounterEdit', { currentUser: params.currentUser });
  }

  render() {
    return (
      <View style={styles.container}>
        <CounterList navigation={this.props.navigation} />
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
