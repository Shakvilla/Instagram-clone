import {View, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import styles from '../../screens/ProfileScreen/styles';
const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={styles.galleryImage}>
      <Image
        source={{uri: post.image || post.images[0]}}
        style={styles.gallery}
      />
    </View>
  );
};

export default FeedGridItem;
