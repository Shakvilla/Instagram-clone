import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}
const Comment = ({comment}: ICommentProps) => {
  return (
    <View style={styles.comment}>
      <Text style={styles.commentText}>
        <Image
          source={{uri: comment.user.image}}
          style={styles.avatar}
          alt="user avatar"
        />
        <Text style={styles.boldText}>{comment.user.username} </Text>
        {comment.comment}{' '}
      </Text>
      <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: fonts.size.default,
    color: colors.black,
    lineHeight: 18,
  },
  boldText: {
    fontWeight: fonts.weight.bold,
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
    marginHorizontal: 5,
  },

  icon: {
    marginHorizontal: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    aspectRatio: 1,
    borderRadius: 25,
  },
});
export default Comment;
