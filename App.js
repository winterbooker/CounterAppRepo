import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import firebase from 'firebase';

import CounterListScreen from './src/screens/CounterListScreen';
import CounterDetailScreen from './src/screens/CounterDetailScreen';
import CounterEditScreen from './src/screens/CounterEditScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SignupScreen';

import ENV from './env.json';

const firebaseConfig = {
  apiKey:            ENV.FIREBASE_API_KEY,
  authDomain:        ENV.FIREBASE_AUTH_DOMAIN,
  databaseURL:       ENV.FIREBASE_DB_URL,
  projectId:         ENV.FIREBASE_PRJ_ID,
  storageBucket:     ENV.FIREBASE_STORAGE,
  messagingSenderId: ENV.FIREBASE_SENDER_ID,
};
firebase.initializeApp(firebaseConfig)

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
