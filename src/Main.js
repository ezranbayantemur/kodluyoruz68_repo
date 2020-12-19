import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {FriendScreen, HomeScreen} from './pages';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ffa726',
          inactiveTintColor: '#cfd8dc',
        }}>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'Ana Sayfa'}}
        />
        <Tab.Screen
          name="Friends"
          component={FriendScreen}
          options={{title: 'Arkadaşlar'}}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;
