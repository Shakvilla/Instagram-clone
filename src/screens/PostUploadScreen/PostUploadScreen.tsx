import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Camera, CameraType} from 'expo-camera';
import colors from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const PostUploadScreen = () => {
  const [hasCameraAccessPermission, setHasCameraAccessPermission] = useState<
    boolean | null
  >(null);
  const [type, setType] = useState(CameraType.back);

  useEffect(() => {
    const getPermission = async () => {
      const cameraPermission = await Camera.requestCameraPermissionsAsync();
      const microphonePermission =
        await Camera.requestMicrophonePermissionsAsync();

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

  function toggleCameraType() {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  }
  return (
    <View style={styles.page}>
      <Camera style={styles.camera} type={type} />
      <View style={[styles.buttonsContainer, {top: 25}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <MaterialIcons name="flash-off" size={30} color={colors.white} />
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        <View style={styles.circle} />
        <MaterialIcons
          name="flip-camera-ios"
          size={30}
          color={colors.white}
          onPress={toggleCameraType}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.black,
  },
  camera: {
    width: '100%',
    aspectRatio: 3 / 4,
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '100%',
    position: 'absolute',
  },

  circle: {
    width: 75,
    aspectRatio: 1,
    borderRadius: 75,
    backgroundColor: colors.white,
  },
});

export default PostUploadScreen;
