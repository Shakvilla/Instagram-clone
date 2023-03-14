import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from '../../screens/HomeScreen';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen';
import {Image} from 'react-native';
import logo from '../../assets/images/instagram.png';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="UserProfile"
        screenOptions={{header: HeaderTitle, headerTitleAlign: 'center'}}>
        <Stack.Group>
          <Stack.Screen name="Feed" component={HomeScreen} />
          <Stack.Screen
            name="UserProfile"
            component={ProfileScreen}
            options={{title: 'Profile'}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HeaderTitle = () => {
  return (
    <Image
      source={logo}
      resizeMode="contain"
      style={{width: 150, height: 40}}
    />
  );
};

export default Navigation;