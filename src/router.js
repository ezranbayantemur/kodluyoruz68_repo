import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Main, Detail, Cart} from './pages';
import AppProvider from './context/Provider';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const ProductsStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Main" component={Main} />
      <Stack.Screen name="Detail" component={Detail} />
    </Stack.Navigator>
  );
};

const Router = () => {
  return (
    <AppProvider>
      <NavigationContainer>
        <Tab.Navigator
          tabBarOptions={{
            activeTintColor: 'purple',
          }}>
          <Tab.Screen name="Products" component={ProductsStack} />
          <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
      </NavigationContainer>
    </AppProvider>
  );
};

export default Router;
