import React from 'react';
import {StyleSheet, View} from 'react-native';
import CommentsScreen from './src/screens/CommentsScreen/CommentsScreen';
import HomeScreen from './src/screens/HomeScreen';

const App = () => {
  return (
    <View style={styles.app}>
      {/* <HomeScreen /> */}
      <CommentsScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
