import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/components/navigation';

const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

export default App;
