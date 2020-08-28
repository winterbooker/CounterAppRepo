import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CounterListScreen from './src/screens/CounterListScreen';
import CounterDetailScreen from './src/screens/CounterDetailScreen';
import CounterEditScreen from './src/screens/CounterEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Login:         { screen: LoginScreen },
  Signup:        { screen: SignupScreen },
  Home:          { screen: CounterListScreen },
  CounterEdit:   { screen: CounterEditScreen },
  CounterDetail: { screen: CounterDetailScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Counter',
    headerTintColor: '#fff',
    headerBackTitle: null,
    headerStyle: {
      backgroundColor: '#034078',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
