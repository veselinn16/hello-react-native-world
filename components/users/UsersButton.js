import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UsersButton = ({users, removeUsers, getUsers}) => (
  <View
    style={{
      flex: 1,
      backgroundColor: '#333',
      justifyContent: 'center',
      alignItems: 'center',
      padding: 10,
    }}>
    <TouchableOpacity
      style={{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 5,
        borderRadius: 5,
      }}
      onPress={users.length ? removeUsers : getUsers}>
      <Text style={{fontSize: 17, marginRight: 7}}>
        {users.length ? 'Remove users' : 'Get users'}
      </Text>
      <Icon
        name={users.length ? 'account-remove' : 'account-arrow-right'}
        size={24}
        color="black"
        style={{marginRight: 10}}></Icon>
    </TouchableOpacity>
  </View>
);

export default UsersButton;
