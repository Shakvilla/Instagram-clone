import {View, Text, Image, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import user from '../../assets/data/user.json';
import colors from '../../theme/colors';
import fonts from '../../theme/fonts';
import {useForm, Controller, Control} from 'react-hook-form';
import {IUser} from '../../types/models';

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
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<IEditableUser>();
  const onSubmit = (data: IEditableUser) => {
    console.log(data);
  };

  console.log(errors);
  return (
    <View style={styles.page}>
      <Image source={{uri: user.image}} style={styles.avatar} />
      <Text style={styles.textButton}>Change profile photo</Text>

      <CustomInput
        rules={{required: 'Name is required'}}
        name="name"
        control={control}
        label="Name"
      />
      <CustomInput
        rules={{required: 'Username is required'}}
        name="username"
        control={control}
        label="Username"
      />
      <CustomInput
        rules={{required: 'Website url is required '}}
        name="website"
        control={control}
        label="Website"
      />
      <CustomInput name="bio" control={control} label="Bio" multiline={true} />

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
