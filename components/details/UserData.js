import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '85%',
  },
  para: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 25,
  },
});

const UserData = ({user}) => {
  return (
    <View
      style={{
        padding: 10,
        backgroundColor: '#555',
        flex: 9,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View style={styles.container}>
        <Icon name="account" size={30} color="#ffc04c" />
        <Text style={styles.para}>{user.name}</Text>
      </View>
      <View style={styles.container}>
        <MaterialIcon name="email" size={30} color="#ffc04c" />
        <Text style={styles.para}>{user.email}</Text>
      </View>
      <View style={styles.container}>
        <Icon name="briefcase" size={30} color="#ffc04c" />
        <Text style={styles.para}>{user.company.name}</Text>
      </View>
      <View style={styles.container}>
        <Icon name="web" size={30} color="#ffc04c" />
        <Text style={styles.para}>{user.website}</Text>
      </View>
      <View style={styles.container}>
        <Icon name="cellphone" size={30} color="#ffc04c" />
        <Text style={styles.para}>{user.phone}</Text>
      </View>
      <View style={styles.container}>
        <Icon name="domain" size={30} color="#ffc04c" />
        <Text
          style={
            styles.para
          }>{`${user.address.city}, ${user.address.street}`}</Text>
      </View>
    </View>
  );
};

export default UserData;
