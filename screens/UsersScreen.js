import React from 'react';
import {View, Text} from 'react-native';

import {connect} from 'react-redux';

// Components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UsersButton from '../components/users/UsersButton';
import UsersList from '../components/users/UsersList';
import {Spinner} from 'native-base';
import {NavigationEvents} from 'react-navigation';

// Action Creators
import {removeUsers} from '../actions';

const UsersScreen = ({navigation, isLoading, users, removeUsers}) => {
  return (
    <View style={{flex: 1}}>
      <NavigationEvents onDidBlur={removeUsers} />
      <UsersButton />
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
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => ({
  removeUsers: () => dispatch(removeUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersScreen);
