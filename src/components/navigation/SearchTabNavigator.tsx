import {SafeAreaView} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CommentsScreen from '../../screens/CommentsScreen/CommentsScreen';
import HomeScreen from '../../screens/HomeScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import colors from '../../theme/colors';
import {SearchTabNavigatorParamList} from './types';
import UserSearchScreen from '../../screens/UserSearchScreen';

const Tab = createMaterialTopTabNavigator<SearchTabNavigatorParamList>();

function SearchTabNavigator() {
  const insets = useSafeAreaInsets();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: {paddingTop: insets.top},
        tabBarActiveTintColor: colors.primary,
      }}>
      <Tab.Screen name="Users" component={UserSearchScreen} />
      <Tab.Screen name="Posts" component={CommentsScreen} />
    </Tab.Navigator>
  );
}

export default SearchTabNavigator;
