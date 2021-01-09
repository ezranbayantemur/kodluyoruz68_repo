import React from 'react';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import reducer from './context/reducer';
import initialState from './context/store';
import {UserInput, UserList} from './pages';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <Provider store={createStore(reducer, initialState)}>
      <NavigationContainer>
        <Tab.Navigator initialRouteName="Input">
          <Tab.Screen name="List" component={UserList} />
          <Tab.Screen name="Input" component={UserInput} />
        </Tab.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default Router;
