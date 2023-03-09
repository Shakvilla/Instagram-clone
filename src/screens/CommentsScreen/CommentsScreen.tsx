import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
// import {FlashList} from '@shopify/flash-list';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
import Input from './Input';
const CommentsScreen = () => {
  return (
    <View style={styles.commentPage}>
      <FlatList
        data={comments}
        renderItem={({item}) => (
          <Comment comment={item} includeDetails={true} />
        )}
        // estimatedItemSize={250}
        style={styles.comment}
      />
      <Input />
    </View>
  );
};

const styles = StyleSheet.create({
  comment: {
    padding: 10,
  },
  commentPage: {
    flex: 1,
  },
});

export default CommentsScreen;
