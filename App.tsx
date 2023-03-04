import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import NewsFeed from './src/components/NewsFeed/';
import posts from './src/assets/data/post.json';
import {FlashList} from '@shopify/flash-list';

const App = () => {
  return (
    <ScrollView style={styles.app}>
      {/* <FlashList data={posts} renderItem={item => <NewsFeed post={item} />} /> */}
      <FlashList
        data={posts}
        renderItem={({item}) => <NewsFeed post={item} />}
        estimatedItemSize={20}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
