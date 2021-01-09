import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {UserInput, UserList} from './pages';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Input">
        <Tab.Screen name="List" component={UserList} />
        <Tab.Screen name="Input" component={UserInput} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;
