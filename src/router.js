import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {UserInput, UserList} from './pages';
import UserProvider from './context/UserProvider';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Input">
          <Tab.Screen name="List" component={UserList} />
          <Tab.Screen name="Input" component={UserInput} />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
}

export default Router;
