import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';

import Navigation from './src/components/navigation';
import {Amplify} from 'aws-amplify';
import config from './src/aws-exports';
import {withAuthenticator} from '@aws-amplify/ui-react-native';

Amplify.configure(config);
const App = () => {
  return (
    <SafeAreaProvider>
      <Navigation />
    </SafeAreaProvider>
  );
};

const signUpConfig = {
  hideAllDefaults: true,
  signUpFields: [
    {
      label: 'Name',
      key: 'name',
      required: true,
      displayOrder: 1,
      type: 'string',
      placeholder: 'Name',
    },
  ],
};
export default withAuthenticator(App, {signUpConfig});
