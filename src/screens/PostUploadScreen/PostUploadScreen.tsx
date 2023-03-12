import {View, Text, StyleSheet, Pressable} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Camera, CameraType, FlashMode} from 'expo-camera';
import colors from '../../theme/colors';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const flashModes = [
  FlashMode.off,
  FlashMode.on,
  FlashMode.auto,
  FlashMode.torch,
];

const flashModeToIcon = {
  [FlashMode.off]: 'flash-off',
  [FlashMode.on]: 'flash-on',
  [FlashMode.auto]: 'flash-auto',
  [FlashMode.torch]: 'highlight',
};
const PostUploadScreen = () => {
  const [hasCameraAccessPermission, setHasCameraAccessPermission] = useState<
    boolean | null
  >(null);
  const [type, setType] = useState(CameraType.back);
  const [flash, setFlash] = useState(FlashMode.off);
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

  const toggleCameraType = () => {
    setType(current =>
      current === CameraType.back ? CameraType.front : CameraType.back,
    );
  };

  const toggleFlashMode = () => {
    const currIndex = flashModes.indexOf(flash);
    const nextIndex = currIndex === flashModes.length - 1 ? 0 : currIndex + 1;
    setFlash(flashModes[nextIndex]);
  };
  console.warn(flash);
  return (
    <View style={styles.page}>
      <Camera style={styles.camera} type={type} ratio="4:3" flashMode={flash} />
      <View style={[styles.buttonsContainer, {top: 25}]}>
        <MaterialIcons name="close" size={30} color={colors.white} />
        <Pressable onPress={toggleFlashMode}>
          <MaterialIcons
            name={flashModeToIcon[flash]}
            size={30}
            color={colors.white}
          />
        </Pressable>
        <MaterialIcons name="settings" size={30} color={colors.white} />
      </View>
      <View style={[styles.buttonsContainer, {bottom: 25}]}>
        <MaterialIcons name="photo-library" size={30} color={colors.white} />
        <View style={styles.circle} />
        <Pressable onPress={toggleCameraType}>
          <MaterialIcons
            name="flip-camera-ios"
            size={30}
            color={colors.white}
          />
        </Pressable>
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
