import React from 'react';
import NewsFeed from '../../components/NewsFeed';
import posts from '../../assets/data/post.json';
import {FlashList} from '@shopify/flash-list';

const HomeScreen = () => {
  return (
    <FlashList
      data={posts}
      renderItem={({item}) => <NewsFeed post={item} />}
      estimatedItemSize={20}
      keyExtractor={item => {
        return item.id;
      }}
      showsVerticalScrollIndicator={false}
    />
  );
};

export default HomeScreen;
