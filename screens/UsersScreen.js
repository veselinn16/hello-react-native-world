import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
const data = require('../test.json');

// Components
import UsersButton from '../components/UsersButton';
import UsersList from '../components/UsersList';
import {NavigationEvents} from 'react-navigation';

const UsersScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);

  const getUsers = query => {
    setUsers(data);
  };

  const removeUsers = () => {
    setUsers([]);
  };

  return (
    <View style={{flex: 1}}>
      <NavigationEvents onDidBlur={removeUsers} />
      <UsersButton
        users={users}
        getUsers={getUsers}
        removeUsers={removeUsers}
      />
      <View style={{flex: 9, backgroundColor: '#555'}}>
        {users.length > 0 ? (
          <UsersList data={data} users={users} navigation={navigation} />
        ) : (
          <Text
            style={{
              color: '#fff',
              textAlign: 'center',
              marginTop: 10,
              fontSize: 15,
            }}>
            Users will appear here!
          </Text>
        )}
      </View>
    </View>
  );
};

UsersScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Users') {
      iconName = `account${focused ? '' : '-outline'}`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default UsersScreen;
