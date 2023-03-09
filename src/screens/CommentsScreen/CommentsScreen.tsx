import {StyleSheet, View, FlatList} from 'react-native';
import React from 'react';
// import {FlashList} from '@shopify/flash-list';
import comments from '../../assets/data/comments.json';
import Comment from '../../components/Comment';
const CommentsScreen = () => {
  return (
    <View style={styles.comment}>
      <FlatList
        data={comments}
        renderItem={({item}) => <Comment comment={item} />}
        // estimatedItemSize={250}
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
