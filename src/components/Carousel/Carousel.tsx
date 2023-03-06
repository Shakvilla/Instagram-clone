/* eslint-disable react-native/no-inline-styles */
import {View, Image, useWindowDimensions} from 'react-native';
import React, {useState, useRef} from 'react';
import colors from '../../theme/colors';
import {FlashList} from '@shopify/flash-list';
import DoublePressable from '../DoublePressable';

interface ICarousel {
  images: string[];
  onDoublePress?: () => void;
}

const Carousel = ({images, onDoublePress = () => {}}: ICarousel) => {
  const {width} = useWindowDimensions();
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 51,
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveImageIndex(viewableItems[0].index);
    }
  });
  return (
    <>
      <FlashList
        data={images}
        renderItem={({item}) => (
          <DoublePressable onDoublePress={onDoublePress}>
            <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
          </DoublePressable>
        )}
        horizontal
        pagingEnabled
        estimatedItemSize={359}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
          paddingTop: 10,
          paddingBottom: 10,
          gap: 5,
        }}>
        {images.map((_, i) => (
          <View
            key={i}
            style={{
              width: 10,
              aspectRatio: 1,
              borderRadius: 5,
              backgroundColor:
                activeImageIndex === i ? colors.primary : colors.white,
            }}
          />
        ))}
      </View>
    </>
  );
};

export default Carousel;
