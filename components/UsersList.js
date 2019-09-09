import React, {Fragment} from 'react';
import {View, FlatList, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UsersList = ({users, data}) => (
  <Fragment>
    <View style={{padding: 10}}>
      <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
        Users
      </Text>
    </View>
    <FlatList
      data={users}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        const evenIndex = data.indexOf(item) % 2 == 0 ? true : false;
        return (
          <View
            style={{
              marginBottom: 5,
              paddingLeft: 10,
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: evenIndex ? '#999' : '#777',
            }}>
            <Icon
              name="account"
              size={30}
              color="white"
              style={{marginRight: 10}}></Icon>
            <View>
              <Text style={{fontSize: 15}}>User: {item.name}</Text>
              <Text style={{fontSize: 15}}>Username: {item.username}</Text>
            </View>
          </View>
        );
      }}
    />
  </Fragment>
);

export default UsersList;
