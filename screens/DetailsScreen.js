import React, {Fragment, useEffect, useState} from 'react';
import {View, Text, Button, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {TextInput, TouchableOpacity} from 'react-native-gesture-handler';
const data = require('../test.json');
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import baseURL from '../utils/constants';

const DetailsScreen = ({navigation}) => {
  // const [query, setQuery] = useState('');
  const [users, setUsers] = useState([]);

  const getUsers = query => {
    setUsers(data);
  };

  const removeUsers = () => {
    setUsers([]);
  };

  return (
    <View style={{flex: 1}}>
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
            name={users.length ? 'account-minus' : 'account-arrow-right'}
            size={24}
            color="black"
            style={{marginRight: 10}}></Icon>
        </TouchableOpacity>
      </View>
      <View style={{flex: 9, backgroundColor: '#555'}}>
        {users.length > 0 ? (
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
                      <Text style={{fontSize: 15}}>
                        Username: {item.username}
                      </Text>
                    </View>
                  </View>
                );
              }}
            />
          </Fragment>
        ) : (
          <Text>Users will appear here!</Text>
        )}
      </View>
    </View>
  );
};

DetailsScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Details') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    } else if (routeName === 'Settings') {
      iconName = `ios-options`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default DetailsScreen;
