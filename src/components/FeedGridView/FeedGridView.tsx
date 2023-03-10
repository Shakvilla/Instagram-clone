import {View, Image} from 'react-native';
import React, {memo} from 'react';
import styles from '../../screens/ProfileScreen/styles';

import {FlashList} from '@shopify/flash-list';
import {IPost} from '../../types/models';
import FeedGridItem from './FeedGridItem';

interface INewFeedGrid {
  data: IPost[];
  ListHeaderComponent?:
    | React.ComponentType<any>
    | React.ReactElement
    | null
    | undefined;
}

const FeedGridView = ({data, ListHeaderComponent}: INewFeedGrid) => {
  return (
    <View style={styles.gallery}>
      <FlashList
        data={data}
        renderItem={({item}) => (
          //   <NewsFeed post={item} isVisible={activePostId === item.id} />

          <FeedGridItem post={item} />
        )}
        estimatedItemSize={135}
        keyExtractor={item => {
          return item.id;
        }}
        showsVerticalScrollIndicator={false}
        numColumns={3}
        ListHeaderComponent={ListHeaderComponent}
      />
    </View>
  );
};

export default memo(FeedGridView);
