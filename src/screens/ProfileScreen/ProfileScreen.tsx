/* eslint-disable @typescript-eslint/no-unused-vars */
// import {View, Image} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import ProfileHeader from './ProfileHeader';
import users from '../../assets/data/user.json';
import {
  UserProfileNavigationProp,
  UserProfileRouteProp,
  MyProfileNavigationProp,
  MyProfileRouteProp,
} from '../../components/navigation/types';
const ProfileScreen = () => {
  const route = useRoute<UserProfileRouteProp | MyProfileRouteProp>();
  const navigation = useNavigation<
    UserProfileNavigationProp | MyProfileNavigationProp
  >();
  const userId = route.params?.userId;

  // navigation.setOptions({title: user.username});
  return (
    <FeedGridView data={users.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
