import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserButton = ({navigation, evenIndex, user}) => {
  return (
    <View
      style={{
        marginBottom: 5,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: evenIndex ? '#999' : '#777',
      }}>
      <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
        <Icon name="account" size={30} color="white" />
      </View>
      <View style={{flex: 4}}>
        <Text style={{fontSize: 15}}>User: {user.name}</Text>
        <Text style={{fontSize: 15}}>Username: {user.username}</Text>
      </View>
      <View style={{flex: 1}}>
        <Button
          title="go to user"
          onPress={() => navigation.navigate('Details', {user})}
        />
      </View>
    </View>
  );
};

export default UserButton;
