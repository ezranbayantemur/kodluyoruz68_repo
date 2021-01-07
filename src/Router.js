import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {JobDetail, JobList, SavedJobs} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function createIconName(route, focused) {
  switch (route.name) {
    case 'Saved':
      return focused ? 'content-save-all' : 'content-save-all-outline';

    case 'Jobs':
      return focused ? 'briefcase' : 'briefcase-outline';

    default:
      break;
  }
}

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
      <Tab.Navigator
        initialRouteName="Jobs"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => {
            return (
              <Icon
                name={createIconName(route, focused)}
                size={25}
                color={color}
              />
            );
          },
        })}
        tabBarOptions={{
          activeTintColor: '#558b2f',
        }}>
        <Tab.Screen
          name="Saved"
          component={SavedJobs}
          options={{title: 'Kayıtlarım'}}
        />
        <Tab.Screen
          name="Jobs"
          component={JobStack}
          options={{title: 'İşler'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
