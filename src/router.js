import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {Map, Favorites, Friends} from './pages';

const Tab = createBottomTabNavigator();

function Router() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="FriendsScreen"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color}) => generateIcon(focused, color, route),
        })}
        tabBarOptions={{
          activeTintColor: 'tomato',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="MapScreen" component={Map} />
        <Tab.Screen name="FriendsScreen" component={Friends} />
        <Tab.Screen name="FavoritesScreen" component={Favorites} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default Router;

function generateIcon(focused, color, route) {
  let iconName;

  switch (route.name) {
    case 'MapScreen':
      iconName = focused ? 'map' : 'map-outline';
      break;
    case 'FriendsScreen':
      iconName = focused ? 'account-multiple' : 'account-multiple-outline';
      break;
    case 'FavoritesScreen':
      iconName = focused ? 'heart' : 'heart-outline';
      break;

    default:
      break;
  }

  // You can return any component that you like here!
  return <Icon name={iconName} color={color} size={25} />;
}
