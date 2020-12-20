import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {NewsDetail, NewsList} from './pages';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="List" component={NewsList} />
        <Stack.Screen name="Detail" component={NewsDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
