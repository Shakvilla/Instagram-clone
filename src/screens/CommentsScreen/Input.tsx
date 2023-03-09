import {View, Image, StyleSheet, TextInput, Text} from 'react-native';
import React, {useState} from 'react';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';

const Input = () => {
  const [newComment, setNewComment] = useState('');
  const onPost = () => {
    console.warn('Posting the comment ', newComment);
    // sending the data to backend
    setNewComment('');
  };
  return (
    <View style={styles.inputRoot}>
      <Image
        source={{
          uri: 'https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/1.jpg',
        }}
        style={styles.image}
      />

      <TextInput
        placeholder="Write your comment"
        style={styles.input}
        value={newComment}
        onChangeText={setNewComment}
        multiline
      />

      <Text style={styles.button} onPress={onPost}>
        POST
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: 40,
    aspectRatio: 1,
    borderRadius: 20,
  },
  inputRoot: {
    flexDirection: 'row',
    padding: 5,
    borderColor: colors.lightgrey,
    borderWidth: 1,
    alignItems: 'flex-end',
  },
  input: {
    flex: 1,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderColor: colors.lightgrey,
    borderWidth: 1,
    borderRadius: 25,
    marginLeft: 5,
    paddingRight: 50,
  },
  button: {
    position: 'absolute',
    right: 15,
    top: 15,
    fontSize: fonts.size.sm,
    fontWeight: fonts.weight.full,
    color: colors.primary,
    alignItems: 'flex-end',
  },
});

export default Input;
