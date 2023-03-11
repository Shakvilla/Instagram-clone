import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Camera} from 'expo-camera';

const PostUploadScreen = () => {
  const [hasCameraAccessPermission, setHasCameraAccessPermission] = useState<
    boolean | null
  >(null);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission = Camera.requestMicrophonePermissionsAsync();

      setHasCameraAccessPermission(
        cameraPermission.status === 'granted' &&
          microphonePermission.status === 'granted',
      );
    };
    getPermission();
  }, []);

  if (hasCameraAccessPermission === null) {
    return <Text>Loading</Text>;
  }

  if (hasCameraAccessPermission === false) {
    return <Text>No access to camera</Text>;
  }
  return (
    <View>
      <Text>PostUploadScreen</Text>
    </View>
  );
};

export default PostUploadScreen;
