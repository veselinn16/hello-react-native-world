import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Helpers
import {getResource} from '../../utils/helpers';

// Action Creators
import {removeUsers} from '../../actions';

import {connect} from 'react-redux';

const UsersButton = ({users, removeUsers, getResource}) => (
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
      onPress={users.length ? removeUsers : () => getResource('users')}>
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

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getResource: resource => dispatch(getResource(resource)),
  removeUsers: () => dispatch(removeUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersButton);
