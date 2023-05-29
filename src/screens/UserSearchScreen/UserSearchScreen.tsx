import {StyleSheet, View} from 'react-native';
import React from 'react';
import {FlashList} from '@shopify/flash-list';
import users from '../../assets/data/users.json';
import UserListItem from '../../components/UserListItem';

const UserSearchScreen = () => {
  return (
    <View style={styles.root}>
      <FlashList
        data={users}
        estimatedItemSize={18}
        renderItem={({item}) => <UserListItem user={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});

export default UserSearchScreen;
