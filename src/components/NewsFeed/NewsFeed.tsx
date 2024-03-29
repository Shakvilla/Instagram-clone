import React, {useState} from 'react';
import {View, Text, Image, Pressable} from 'react-native';
import colors from '../../theme/colors';
// import fonts from '../../theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import styles from './styles';
import Comment from '../Comment';
import {IPost} from '../../types/models';
import DoublePressable from '../DoublePressable';
import Carousel from '../Carousel';
import VideoPlayer from '../VideoPlayer';
import {useNavigation} from '@react-navigation/native';
import {FeedNavigationProp} from '../navigation/types';
interface INewsFeed {
  post: IPost;
  isVisible: boolean;
}
const NewsFeed = ({post, isVisible}: INewsFeed) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLiked, setIsLiked] = useState(false);
  const [isDescriptionExpanded, setIsDescriptionExpanded] = useState(false);

  const navigation = useNavigation<FeedNavigationProp>();

  // click to expand description
  const toggleIsDescriptionExpanded = () => {
    setIsDescriptionExpanded(value => !value);
  };

  // click to change like button to liked
  const toggleLike = () => {
    setIsLiked(value => !value);
  };

  //navigate to user profile
  const navigateToUser = () => {
    navigation.navigate('UserProfile', {userId: post.user.id});
  };

  // navigate to comments page
  const navigateToComments = () => {
    navigation.navigate('Comments', {postId: post.id});
  };

  let content = null;
  if (post.image) {
    content = (
      <DoublePressable onDoublePress={toggleLike}>
        <Image
          source={{
            uri: post.image,
          }}
          style={styles.image}
        />
      </DoublePressable>
    );
  } else if (post.images) {
    content = <Carousel images={post.images} onDoublePress={toggleLike} />;
  } else if (post.video) {
    content = (
      <DoublePressable>
        <VideoPlayer uri={post.video} paused={!isVisible} />
      </DoublePressable>
    );
  }
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

        <Text style={styles.userName} onPress={navigateToUser}>
          {post.user.username}
        </Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      {content}

      {/* Footer View */}
      <View style={styles.footer}>
        {/* icon container */}
        <View style={styles.iconContainer}>
          <Pressable onPress={toggleLike}>
            <AntDesign
              name={isLiked ? 'heart' : 'hearto'}
              size={24}
              style={styles.icon}
              color={isLiked ? colors.accent : colors.black}
            />
          </Pressable>

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
        <Text style={styles.text} numberOfLines={isDescriptionExpanded ? 0 : 3}>
          <Text style={styles.boldText}>{post.user.username} </Text>
          {post.description}
        </Text>
        <Text onPress={toggleIsDescriptionExpanded}>
          {isDescriptionExpanded ? 'less' : 'more'}
        </Text>

        {/* Comments */}
        <Text onPress={navigateToComments}>
          View all {post.nofComments} comments
        </Text>

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
