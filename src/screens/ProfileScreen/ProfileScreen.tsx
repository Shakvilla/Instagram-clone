// import {View, Image} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import ProfileHeader from './ProfileHeader';
import users from '../../assets/data/user.json';
import {
  ProfileNavigationProp,
  MyProfileNavigationProp,
} from '../../components/navigation/types';
const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation<
    ProfileNavigationProp | MyProfileNavigationProp
  >();
  const userId = route.params?.userId;

  // navigation.setOptions({title: user.username});
  return (
    <FeedGridView data={users.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
