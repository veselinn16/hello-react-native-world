import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';
import {toggleLoading} from '../actions';

// API
import baseUrl from '../utils/constants';

// Components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UsersButton from '../components/users/UsersButton';
import UsersList from '../components/users/UsersList';
import {Spinner} from 'native-base';
import {NavigationEvents} from 'react-navigation';

const UsersScreen = ({navigation, toggleLoading, isLoading}) => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    // activate spinner
    toggleLoading();
    try {
      const res = await fetch(`${baseUrl}/users`);
      const users = await res.json();
      setUsers(users);

      // deactivate spinner
      toggleLoading();
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

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = dispatch => ({
  toggleLoading: () => dispatch(toggleLoading()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersScreen);
