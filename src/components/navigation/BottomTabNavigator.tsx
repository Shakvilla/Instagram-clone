import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../../screens/HomeScreen';
import PostUploadScreen from '../../screens/PostUploadScreen';
import ProfileScreen from '../../screens/ProfileScreen';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import colors from '../../theme/colors';
import HomeStackNavigator from './HomeStackNavigator';
import ProfileScreenNavigator from './ProfileStackNavigator';
import {BottomTabNavigatorParamList} from './types';

const Tab = createBottomTabNavigator<BottomTabNavigatorParamList>();

const BottomTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.black,
      }}>
      <Tab.Screen
        name="HomeStack "
        component={HomeStackNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialIcons size={size} color={color} name="home-filled" />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialIcons size={size} color={color} name="search" />
          ),
        }}
      />
      <Tab.Screen
        name="Upload"
        component={PostUploadScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="plus-circle-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={PostUploadScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              size={size}
              color={color}
              name="heart-outline"
            />
          ),
        }}
      />
      <Tab.Screen
        name="MyProfile"
        component={ProfileScreenNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({color, size}) => (
            <FontAwesome size={size} color={color} name="user-circle" />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;
