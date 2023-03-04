import {View, StyleSheet} from 'react-native';
import NewsFeed from './src/components/NewsFeed';

const App = () => {
  return (
    <View style={styles.app}>
      <NewsFeed />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {flex: 1},
});

export default App;
