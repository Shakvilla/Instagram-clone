import {View, Text, StyleSheet, Image, Pressable} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IComment} from '../../types/models';

interface ICommentProps {
  comment: IComment;
}
const Comment = ({comment}: ICommentProps) => {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = () => {
    setIsLiked(value => !value);
  };

  return (
    <View style={styles.comment}>
      <Image
        source={{uri: comment.user.image}}
        style={styles.avatar}
        alt="user avatar"
      />
      <View style={styles.middleColumn}>
        <Text style={styles.commentText}>
          <Text style={styles.boldText}>{comment.user.username} </Text>
          {comment.comment}{' '}
        </Text>
        <View style={styles.footer}>
          <Text style={styles.footerText}>2d</Text>
          <Text style={styles.footerText}>34 likes</Text>
          <Text style={styles.footerText}>Reply</Text>
        </View>
      </View>

      <Pressable onPress={toggleLike} hitSlop={5}>
        <AntDesign
          name={isLiked ? 'heart' : 'hearto'}
          style={styles.icon}
          color={isLiked ? colors.accent : colors.black}
        />
      </Pressable>
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
    lineHeight: 18,
    marginHorizontal: 5,
  },

  icon: {
    marginHorizontal: 5,
  },
  avatar: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 25,
  },
  footer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  footerText: {
    marginHorizontal: 5,
  },
  middleColumn: {
    flex: 1,
  },
});
export default Comment;
