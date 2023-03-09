import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
// import {FlashList} from '@shopify/flash-list';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
const CommentsScreen = () => {
  return (
    <View>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} />}
        // estimatedItemSize={250}
        style={styles.comment}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    padding: 10,
  },
});

export default CommentsScreen;
