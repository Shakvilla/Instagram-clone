import {View, Image} from 'react-native';
import React, {memo} from 'react';
import styles from './styles';
import user from '../../assets/data/user.json';
import {FlashList} from '@shopify/flash-list';
import ProfileHeader from './ProfileHeader';
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
