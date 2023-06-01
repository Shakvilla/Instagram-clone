import React from 'react';
// import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/components/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from 'aws-amplify-react-native';

Amplify.configure(config);
const App = () => {
  return (
    // <SafeAreaProvider>
    <Navigation />
    // </SafeAreaProvider>
  );
};

export default withAuthenticator(App);
