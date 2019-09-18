import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Helpers
import {getUsers} from '../../utils/helpers';

// Action Creators
import {removeUsers} from '../../actions';

import styles from '../../styles/usersStyles';

const UsersButton = ({users, removeUsers, getUsers}) => (
  <View style={styles.btnContainer}>
    <TouchableOpacity
      style={styles.btn}
      onPress={users.length ? removeUsers : getUsers}>
      <Text style={styles.btnText}>
        {users.length ? 'Remove users' : 'Get users'}
      </Text>
      <Icon
        name={users.length ? 'account-remove' : 'account-arrow-right'}
        style={styles.btnIcon}></Icon>
    </TouchableOpacity>
  </View>
);

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = dispatch => ({
  getUsers: () => dispatch(getUsers()),
  removeUsers: () => dispatch(removeUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(UsersButton);
