import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import colors from '../../theme/colors';
// import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';

interface INewsFeed {
  post: IPost;
}
const NewsFeed = (props: INewsFeed) => {
  const {post} = props;
  console.log('props', post);
  const [isLiked, setIsLiked] = useState('');
  return (
    <View style={styles.post}>
      {/* Header  */}
      <View style={styles.header}>
        <Image
          source={{
            uri: post.user.image,
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>{post.user.username}</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      <Image
        source={{
          uri: post.image,
        }}
        style={styles.image}
      />

      {/* Footer View */}
      <View style={styles.footer}>
        {/* icon container */}
        <View style={styles.iconContainer}>
          <AntDesign
            name={isLiked ? 'heart' : 'hearto'}
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Ionicons
            name="chatbubble-outline"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="send"
            size={24}
            style={styles.icon}
            color={colors.black}
          />
          <Feather
            name="bookmark"
            size={24}
            style={{marginLeft: 'auto'}}
            color={colors.black}
          />
        </View>

        <Text style={styles.text}>
          Liked by <Text style={styles.boldText}>shakvilla</Text> and{' '}
          <Text style={styles.boldText}>{post.nofLikes} others</Text>
        </Text>
        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.boldText}>{post.user.username} </Text>
          {post.description}
        </Text>

        {/* Comments */}
        <Text>View all {post.nofComments} comments</Text>

        {/* Posted date */}
        {post.comments.map(comment => (
          <Comment comment={comment} key={comment.id} />
        ))}

        <Text style={styles.text}>{post.createdAt}</Text>
      </View>
    </View>
  );
};

export default NewsFeed;
