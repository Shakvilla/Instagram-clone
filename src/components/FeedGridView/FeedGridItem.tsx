import {View, Image} from 'react-native';
import React from 'react';
import {IPost} from '../../types/models';
import styles from '../../screens/ProfileScreen/styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../theme/colors';
const FeedGridItem = ({post}: {post: IPost}) => {
  return (
    <View style={styles.galleryImage}>
      <Image
        source={{uri: post.image || post.images[0]}}
        style={styles.gallery}
      />
      {post.images && (
        <MaterialIcons
          name="collections"
          size={16}
          color={colors.white}
          style={{position: 'absolute', top: 5, right: 5}}
        />
      )}
    </View>
  );
};

export default FeedGridItem;
