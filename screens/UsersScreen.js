import React from 'react';
import {connect} from 'react-redux';

// Components
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import UsersButton from '../components/users/UsersButton';
import UsersList from '../components/users/UsersList';
import {Spinner} from 'native-base';

// Action Creators
import {removePosts, removeTodos, removeUser, resetSearch} from '../actions';
import {NavigationEvents} from 'react-navigation';

const UsersScreen = ({
  navigation,
  isLoading,
  users,
  removePosts,
  removeTodos,
  removeUser,
  resetSearch,
}) => {
  const removeExistingData = () => {
    removePosts();
    removeTodos();
    removeUser();
    resetSearch();
  };

  return (
    <View style={{flex: 1}}>
      <NavigationEvents onWillFocus={removeExistingData} />
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
    const iconName = `account${focused ? '' : '-outline'}`;

    return <Icon name={iconName} size={30} color={tintColor} />;
  },
});

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    users: state.users,
  };
};

const mapDispatchToProps = dispatch => ({
  removePosts: () => dispatch(removePosts()),
  removeTodos: () => dispatch(removeTodos()),
  removeUser: () => dispatch(removeUser()),
  resetSearch: () => dispatch(resetSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersScreen);
