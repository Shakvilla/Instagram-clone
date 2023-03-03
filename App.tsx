import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.post}>
      {/* Header  */}
      {/* Content */}
      <Image
        source={{
          uri: 'https://images.unsplash.com/photo-1582876533492-51fd2f162272?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
        }}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  post: {},
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});

export default App;
