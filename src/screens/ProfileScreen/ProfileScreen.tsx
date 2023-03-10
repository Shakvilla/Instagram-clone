// import {View, Image} from 'react-native';
import React from 'react';

import FeedGridView from '../../components/FeedGridView/FeedGridView';
import ProfileHeader from './ProfileHeader';
import users from '../../assets/data/user.json';
const ProfileScreen = () => {
  return (
    <FeedGridView data={users.posts} ListHeaderComponent={ProfileHeader} />
  );
};

export default ProfileScreen;
