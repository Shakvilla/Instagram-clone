import React, {useState} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import colors from './src/theme/colors';
import fonts from './src/theme/fonts';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const App = () => {
  const [isLiked, setIsLiked] = useState('');
  return (
    <View style={styles.post}>
      {/* Header  */}
      <View style={styles.header}>
        <Image
          source={{
            uri: 'https://images.unsplash.com/photo-1582876533492-51fd2f162272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
          }}
          style={styles.userAvatar}
        />
        <Text style={styles.userName}>monica</Text>
        <Entypo
          name="dots-three-horizontal"
          size={16}
          style={styles.threeDots}
        />
      </View>
      {/* Content */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1582876533492-51fd2f162272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
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
          <Text style={styles.boldText}>237 others</Text>
        </Text>
        {/* Post description */}
        <Text style={styles.text}>
          <Text style={styles.boldText}>monica </Text> Developers and UI & UX
          designers out there, say goodbye to tedious UI wireframing. Design
          stunning mobile app interfaces on your iPad using the drag & drop
          feature as well as the thousands of symbols available in the Mockup
          app
        </Text>

        {/* Comments */}
        <Text>View all 17 comments</Text>
        <View style={styles.comment}>
          <Text style={styles.commentText}>
            <Text style={styles.boldText}>lolapay </Text>
            feature as well as the thousands of symbols available in the Mockup
            app{' '}
          </Text>
          <AntDesign name={'hearto'} style={styles.icon} color={colors.black} />
        </View>
        {/* Posted date */}

        <Text style={styles.text}>04 March, 2023</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},

  image: {
    width: '100%',
    aspectRatio: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  userName: {
    fontWeight: fonts.weight.bold,
    color: colors.black,
  },
  threeDots: {
    marginLeft: 'auto',
  },
  iconContainer: {
    flexDirection: 'row',
    marginBottom: 5,
  },
  commentText: {
    color: colors.black,
    flex: 1,
    lineHeight: 18,
  },

  icon: {
    marginHorizontal: 5,
  },
  footer: {
    padding: 10,
  },
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
});

export default App;
