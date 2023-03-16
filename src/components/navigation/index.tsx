import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProfileScreen from '../../screens/ProfileScreen';
import {Image} from 'react-native';
import logo from '../../assets/images/instagram.png';
import BottomTabNavigator from './BottomTabNavigator';

const Stack = createNativeStackNavigator();
const Navigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: true}}>
        <Stack.Screen name="Home" component={BottomTabNavigator} />
        {/* <Stack.Screen
          name="Feed"
          component={HomeScreen}
          options={{header: HeaderTitle, headerTitleAlign: 'center'}}
        /> */}
        <Stack.Screen
          name="UserProfile"
          component={ProfileScreen}
          options={{title: 'Profile'}}
        />
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
