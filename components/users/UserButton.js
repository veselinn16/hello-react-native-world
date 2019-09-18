import React, {useEffect} from 'react';
import {View, Text, Button} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {connect} from 'react-redux';

// Action Creators
import {setUser} from '../../actions';

// Styles
import styles from '../../styles/usersStyles';

const UserButton = ({navigation, setUser, evenIndex, user}) => {
  const showUserData = () => {
    setUser(user);
    navigation.navigate('Details');
  };

  return (
    <View
      style={{
        ...styles.userBtnContainer,
        backgroundColor: evenIndex ? '#999' : '#777',
      }}>
      <View style={styles.userIconContainer}>
        <Icon name="account" style={styles.userIcon} />
      </View>
      <View style={styles.userDataContainer}>
        <Text style={styles.userDetails}>User: {user.name}</Text>
        <Text style={styles.userDetails}>Username: {user.username}</Text>
      </View>
      <View style={styles.userBtn}>
        <Button title="select user" onPress={showUserData} />
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  setUser: user => dispatch(setUser(user)),
});

export default connect(
  null,
  mapDispatchToProps,
)(UserButton);
