import React from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

class CircleButton extends React.Component {
  render() {
    const { onPress } = this.props;

    return (
      <TouchableHighlight style={styles.container} onPress={onPress} underlayColor="transparent">
        <View style={styles.circleButton}>
          <Text style={styles.circleButtonTitle}>
            {this.props.children}
          </Text>
        </View>
      </TouchableHighlight>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 50,
    right: 40,
    width: 48,
    height: 48,
  },
  circleButton: {
    width: 60,
    height: 60,
    backgroundColor: '#EF233C',
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  circleButtonTitle: {
    fontSize: 30,
    lineHeight: 30,
    color: '#fff',
  },
});

export default CircleButton;
