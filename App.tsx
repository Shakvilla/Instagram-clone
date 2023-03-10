import React from 'react';
import {StyleSheet, View} from 'react-native';
// import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import HomeScreen from './src/screens/HomeScreen';
// import ProfileScreen from './src/screens/ProfileScreen';

const App = () => {
  return (
    <View style={styles.app}>
      <HomeScreen />
      {/* <CommentsScreen /> */}
      {/* <ProfileScreen /> */}
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
