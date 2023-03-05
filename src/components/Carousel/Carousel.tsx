import {Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

interface ICarousel {
  images: string[];
}

const Carousel = ({images}: ICarousel) => {
  const {width} = useWindowDimensions();
  return (
    <FlashList
      data={images}
      horizontal
      pagingEnabled
      estimatedItemSize={359}
      renderItem={({item}) => (
        <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
      )}
    />
  );
};

export default Carousel;
