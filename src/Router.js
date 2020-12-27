import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';

import {JobDetail, JobList, SavedJobs} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function JobStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="List" component={JobList} />
      <Stack.Screen name="Detail" component={JobDetail} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Jobs">
        <Tab.Screen name="Saved" component={SavedJobs} />
        <Tab.Screen name="Jobs" component={JobStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
