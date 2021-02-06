import React, {useState, useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {LoginScreen, SignScreen, FeedScreen} from './screens';
import auth from '@react-native-firebase/auth';
import colors from './styles/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{header: () => null}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Sign" component={SignScreen} />
    </Stack.Navigator>
  );
};

const Router = () => {
  const [session, setSession] = useState(auth().currentUser);

  useEffect(() => {
    auth().onAuthStateChanged((user) => setSession(user));
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!session ? (
          <Stack.Screen
            name="Auth"
            component={AuthStack}
            options={{header: () => null}}
          />
        ) : (
          <Stack.Screen
            name="Feed"
            component={FeedScreen}
            options={{
              headerTintColor: colors.orange,
              headerLeft: () => (
                <Icon
                  onPress={() => auth().signOut()}
                  color={colors.orange}
                  name="location-exit"
                  size={25}
                />
              ),
            }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
