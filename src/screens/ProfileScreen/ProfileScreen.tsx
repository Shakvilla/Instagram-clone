import {View, Image, Text, FlatList, StyleSheet} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import user from '../../assets/data/user.json';
import Button from '../../components/Button';
import {FlashList} from '@shopify/flash-list';
const ProfileHeader = () => {
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
      <View style={styles.buttonsRoot}>
        <Button
          text="Edit Profile"
          onPress={() => console.warn('Editing Profile')}
        />
        <Button
          text="Another Button"
          onPress={() => console.warn('Editing Profile')}
        />
      </View>
    </View>
  );
};

const ProfileScreen = () => {
  return (
    <View style={styles.gallery}>
      <FlashList
        data={user.posts}
        renderItem={({item}) => (
          //   <NewsFeed post={item} isVisible={activePostId === item.id} />
          <Image
            source={{uri: item.image || item.images[0]}}
            style={styles.galleryImage}
          />
        )}
        estimatedItemSize={100}
        keyExtractor={item => {
          return item.id;
        }}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListHeaderComponent={ProfileHeader}
      />
    </View>
  );
};

export default memo(ProfileScreen);
