/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Image,
  useWindowDimensions,
  FlatList,
  ViewabilityConfig,
  ViewToken,
} from 'react-native';
import React, {useState, useRef} from 'react';
import colors from '../../theme/colors';
// import {FlashList} from '@shopify/flash-list';
import DoublePressable from '../DoublePressable';
// import {ViewToken} from '@shopify/flash-list';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig: ViewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const onViewableItemsChanged = useRef(
    ({viewableItems}: {viewableItems: Array<ViewToken>}) => {
      if (viewableItems.length > 0) {
        setActiveImageIndex(viewableItems[0].index || 0);
      }
    },
  );
  return (
    <>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        // estimatedItemSize={359}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          // position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingTop: 10,
          paddingBottom: 10,
          gap: 5,
        }}>
        {images.map((_, index) => (
          <View
            key={index}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImageIndex === index ? colors.primary : colors.lightgrey,
            }}
          />
        ))}
      </View>
    </>
  );
};

export default Carousel;
