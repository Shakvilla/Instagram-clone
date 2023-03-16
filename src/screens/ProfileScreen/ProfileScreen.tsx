// import {View, Image} from 'react-native';
import React from 'react';
import {useRoute, useNavigation} from '@react-navigation/native';
import FeedGridView from '../../components/FeedGridView/FeedGridView';
import ProfileHeader from './ProfileHeader';
import users from '../../assets/data/user.json';
const ProfileScreen = () => {
  const route = useRoute();
  const navigation = useNavigation();
  const {userId} = route.params;

  // navigation.setOptions({title: user.username});
  return (
    <FeedGridView data={users.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
