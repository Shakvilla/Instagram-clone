import React from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import NewsFeed from './src/components/NewsFeed/';

const post = {
  id: 1,
  createdAt: '4 March, 2023',
  image:
    'https://images.unsplash.com/photo-1582876533492-51fd2f162272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
  description:
    'Developers and UI & UX designers out there, say goodbye to tedious UI wire-framing. Design stunning mobile app interfaces on your iPad using the drag & drop  feature as well as the thousands of symbols available in the Mockup  app',
  user: {
    image:
      'https://images.unsplash.com/photo-1582876533492-51fd2f162272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
    username: 'monica',
  },

  nofComments: 11,
  nofLikes: 33,
  comments: [
    {
      id: '1',
      comment: 'Hello there',
      user: {
        username: 'monica',
      },
    },
    {
      id: '2',
      comment: 'This a very good material',
      user: {
        username: 'shakvilla',
      },
    },
  ],
};

const App = () => {
  return (
    <ScrollView style={styles.app}>
      <NewsFeed post={post} />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
