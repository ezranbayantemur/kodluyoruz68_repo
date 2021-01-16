import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import auth from '@react-native-firebase/auth';

import {Login, Sign} from './pages/auth';
import {Todo} from './pages/todo';

const Stack = createStackNavigator();

const hasSession = auth().currentUser;

function AuthStack() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Sign" component={Sign} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={hasSession ? 'Todo' : 'Auth'}
        screenOptions={{header: () => null}}>
        <Stack.Screen name="Auth" component={AuthStack} />
        <Stack.Screen name="Todo" component={Todo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
