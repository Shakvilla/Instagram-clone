import {View, Image, Text} from 'react-native';
import React from 'react';
import styles from './styles';
import user from '../../assets/data/user.json';
const ProfileScreen = () => {
  return (
    <View style={styles.root}>
      <View style={styles.headerRow}>
        {/* Profile image */}
        <Image source={{uri: user.image}} style={styles.avatar} />
        {/* Posts, followers, following numbers */}
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>243</Text>
          <Text>Posts</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>9219</Text>
          <Text>Followers</Text>
        </View>
        <View style={styles.numberContainer}>
          <Text style={styles.numberText}>101</Text>
          <Text>Following</Text>
        </View>
      </View>
      <Text style={styles.name}>{user.name}</Text>
      <Text>{user.bio}</Text>
    </View>
  );
};

export default ProfileScreen;
