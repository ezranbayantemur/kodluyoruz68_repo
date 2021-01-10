import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Map, Favorites, Friends, Posts} from './pages';
import MainProvider from './context/MainProvider';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function MainStack() {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="FriendsScreen" component={Friends} />
      <Stack.Screen name="PostsScreen" component={Posts} />
    </Stack.Navigator>
  );
}

function Router() {
  return (
    <MainProvider>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="MainStack"
          screenOptions={({route}) => ({
            tabBarIcon: ({focused, color}) =>
              generateIcon(focused, color, route),
            tabBarLabel: () => null,
          })}
          tabBarOptions={{
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          }}>
          <Tab.Screen name="MapScreen" component={Map} />
          <Tab.Screen name="MainStack" component={MainStack} />
          <Tab.Screen name="FavoritesScreen" component={Favorites} />
        </Tab.Navigator>
      </NavigationContainer>
    </MainProvider>
  );
}

export default Router;

function generateIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'MapScreen':
      iconName = focused ? 'map' : 'map-outline';
      break;
    case 'MainStack':
      iconName = focused ? 'account-multiple' : 'account-multiple-outline';
      break;
    case 'FavoritesScreen':
      iconName = focused ? 'heart' : 'heart-outline';
      break;

    default:
      break;
  }

  // You can return any component that you like here!
  return <Icon name={iconName} color={color} size={30} />;
}
