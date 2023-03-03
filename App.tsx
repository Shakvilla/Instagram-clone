import React from 'react';
import {View, Text} from 'react-native';
import colors from './src/theme/colors';
import font from './src/theme/fonts';
const App = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: colors.primary, fontSize: font.size.lg}}>
        Hello world
      </Text>
    </View>
  );
};

export default App;
