/* eslint-disable react-native/no-inline-styles */
import {View, Image, useWindowDimensions} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';

interface ICarousel {
  images: string[];
}

const Carousel = ({images}: ICarousel) => {
  const {width} = useWindowDimensions();
  return (
    <>
      <FlashList
        data={images}
        horizontal
        pagingEnabled
        estimatedItemSize={359}
        renderItem={({item}) => (
          <Image source={{uri: item}} style={{width, aspectRatio: 1}} />
        )}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          position: 'absolute',
          bottom: 0,
          width: '100%',
        }}>
        <View
          style={{
            width: 10,
            aspectRatio: 1,
            borderRadius: 5,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            width: 10,
            aspectRatio: 1,
            borderRadius: 5,
            backgroundColor: 'red',
          }}
        />
        <View
          style={{
            width: 10,
            aspectRatio: 1,
            borderRadius: 5,
            backgroundColor: 'red',
          }}
        />
      </View>
    </>
  );
};

export default Carousel;
