import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// API
import baseUrl from '../utils/constants';

// Components
import UsersButton from '../components/UsersButton';
import UsersList from '../components/UsersList';
import {Spinner} from 'native-base';
import {NavigationEvents} from 'react-navigation';

const UsersScreen = ({navigation}) => {
  const [users, setUsers] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getUsers = async () => {
    // activate spinner
    setLoading(true);
    try {
      const res = await fetch(`${baseUrl}/users`);
      const users = await res.json();
      setUsers(users);

      // deactivate spinner
      setLoading(false);
    } catch (err) {
      console.log(err);
    }
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
          <UsersList users={users} navigation={navigation} />
        ) : isLoading ? (
          <Spinner color="tomato" />
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
