import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React, {useState} from 'react';
import {launchImageLibrary, Asset} from 'react-native-image-picker';
import {useForm, Controller, Control} from 'react-hook-form';

import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {IUser} from '../../types/models';

const URL_REGEX =
  /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/i;

type IEditableUserField = 'name' | 'username' | 'website' | 'bio';

type IEditableUser = Pick<IUser, IEditableUserField>;
interface ICustomInput {
  control: Control<IEditableUser, object>;
  label: string;
  name: IEditableUserField;
  multiline?: boolean;
  rules?: object;
}
const CustomInput = ({
  control,
  name,
  label,
  multiline = false,
  rules = {},
}: ICustomInput) => (
  <Controller
    control={control}
    name={name}
    rules={rules}
    render={({field: {onChange, value, onBlur}, fieldState: {error}}) => {
      return (
        <View style={styles.inputContainer}>
          <Text style={styles.label}>{label}</Text>
          <View style={{flex: 1}}>
            <TextInput
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              placeholder={label}
              style={[
                styles.input,
                {borderColor: error ? colors.accent : colors.lightgrey},
              ]}
              multiline={multiline}
            />
            {error && (
              <Text style={{color: colors.accent}}>
                {error.message || 'Error'}
              </Text>
            )}
          </View>
        </View>
      );
    }}
  />
);
const EditProfileScreen = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<null | Asset>(null);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>({
    defaultValues: {
      name: user.name,
      username: user.username,
      website: user.website,
      bio: user.bio,
    },
  });
  const onSubmit = (data: IEditableUser) => {
    console.log(data);
  };

  const onChangePhoto = () => {
    launchImageLibrary(
      {mediaType: 'photo'},
      ({didCancel, errorCode, errorMessage, assets}) => {
        if (!didCancel && !errorCode && assets && assets.length > 0) {
          setSelectedPhoto(assets[0]);
        }
      },
    );
  };

  // console.log(errors);
  return (
    <View style={styles.page}>
      <Image
        source={{uri: selectedPhoto?.uri || user.image}}
        style={styles.avatar}
      />
      <Text onPress={onChangePhoto} style={styles.textButton}>
        Change profile photo
      </Text>

      <CustomInput
        rules={{required: 'Name is required'}}
        name="name"
        control={control}
        label="Name"
      />
      <CustomInput
        rules={{
          required: 'Username is required',
          minLength: {
            value: 3,
            message: 'Username should be more than 3 characters',
          },
        }}
        name="username"
        control={control}
        label="Username"
      />
      <CustomInput
        rules={{
          // required: 'Website url is required ',
          pattern: {
            value: URL_REGEX,
            massage: 'Invalid url',
          },
        }}
        name="website"
        control={control}
        label="Website"
      />
      <CustomInput
        name="bio"
        control={control}
        label="Bio"
        multiline={true}
        rules={{
          maxLength: {
            value: 200,
            message: 'Bio should be less than 200 characters',
          },
        }}
      />

      <Text onPress={handleSubmit(onSubmit)} style={styles.textButton}>
        Submit
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    alignItems: 'center',
    padding: 10,
  },
  avatar: {width: '30%', aspectRatio: 1, borderRadius: 100},
  textButton: {
    color: colors.primary,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.semi,

    margin: 10,
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch',
  },
  input: {
    borderColor: colors.lightgrey,
    borderBottomWidth: 1,
  },
  label: {
    width: 80,
    fontSize: fonts.size.md,
    fontWeight: fonts.weight.bold,
  },
});

export default EditProfileScreen;
