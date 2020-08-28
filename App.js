import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CounterListScreen from './src/screens/CounterListScreen';
import CounterDetailScreen from './src/screens/CounterDetailScreen';
import CounterEditScreen from './src/screens/CounterEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

const App = createStackNavigator({
  Home:          { screen: CounterListScreen },
  CounterEdit:   { screen: CounterEditScreen },
  Signup:        { screen: SignupScreen },
  Login:         { screen: LoginScreen },
  CounterDetail: { screen: CounterDetailScreen },
}, {
  defaultNavigationOptions: {
    headerTitle: 'Counter',
    headerStyle: {
      backgroundColor: '#034078',
    },
    headerTitleStyle: {
      color: '#fff',
    },
  },
});

export default createAppContainer(App);
