import React, {useRef, useState, memo} from 'react';
import {ViewabilityConfig, FlatList, ViewToken} from 'react-native';
import NewsFeed from '../../components/NewsFeed';
import posts from '../../assets/data/post.json';
// import {FlashList} from '@shopify/flash-list';

const HomeScreen = () => {
  const [activePostId, setActivePostId] = useState<string | null>(null);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActivePostId(viewableItems[0].item.id);
      }
    },
  );
  return (
    <FlatList
      data={posts}
      renderItem={({item}) => (
        <NewsFeed post={item} isVisible={activePostId === item.id} />
      )}
      // estimatedItemSize={732}
      keyExtractor={item => {
        return item.id;
      }}
      showsVerticalScrollIndicator={false}
      viewabilityConfig={viewabilityConfig}
      onViewableItemsChanged={onViewableItemsChanged.current}
    />
  );
};

export default memo(HomeScreen);
