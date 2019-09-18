import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.detailsScreen;

const UserData = ({user}) => {
  return (
    <View style={styles.userDataContainer}>
      <View style={styles.userDataItemContainer}>
        <Icon name="account" style={styles.userDataIcon} />
        <Text style={styles.userDataText}>{user.name}</Text>
      </View>
      <View style={styles.userDataItemContainer}>
        <MaterialIcon name="email" style={styles.userDataIcon} />
        <Text style={styles.userDataText}>{user.email}</Text>
      </View>
      <View style={styles.userDataItemContainer}>
        <Icon name="briefcase" style={styles.userDataIcon} />
        <Text style={styles.userDataText}>{user.company.name}</Text>
      </View>
      <View style={styles.userDataItemContainer}>
        <Icon name="web" style={styles.userDataIcon} />
        <Text style={styles.userDataText}>{user.website}</Text>
      </View>
      <View style={styles.userDataItemContainer}>
        <Icon name="cellphone" style={styles.userDataIcon} />
        <Text style={styles.userDataText}>{user.phone}</Text>
      </View>
      <View style={styles.userDataItemContainer}>
        <Icon name="domain" style={styles.userDataIcon} />
        <Text
          style={
            styles.userDataText
          }>{`${user.address.city}, ${user.address.street}`}</Text>
      </View>
    </View>
  );
};

export default UserData;
