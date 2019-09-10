import React, {Fragment, useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// Components
import Heading from '../components/Heading';
import UserData from '../components/UserData';
import WarningMessage from '../components/WarningMessage';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {NavigationEvents} from 'react-navigation';

const posts = require('../test2.json');

const DetailsScreen = ({navigation}) => {
  const user = navigation.getParam('user');

  const removeCurrentUser = () => {
    // set the current user to null
    navigation.setParams({user: null});
  };

  const navigateBackToUsers = () => {
    removeCurrentUser();
    // return back to Users Screen
    navigation.navigate('Users');
  };

  return (
    <View style={{flex: 1}}>
      <Heading
        text={user ? `Details about ${user.name}` : 'Unknown User'}
        styles={{
          backgroundColor: '#222',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      {user ? (
        <Fragment>
          <NavigationEvents onDidBlur={removeCurrentUser} />
          <UserData user={user} />
          {/* REFACTOR TO USERBUTTON COMPONENT */}
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#555',
            }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#fff',
                padding: 5,
                borderRadius: 5,
                flexDirection: 'row',
              }}
              onPress={navigateBackToUsers}>
              <Icon name="arrow-left-bold" size={24} />
              <Text style={{color: '#000', fontSize: 17, marginLeft: 5}}>
                Back to users
              </Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      ) : (
        <WarningMessage />
      )}
    </View>
  );
};

DetailsScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Ionicons;
    let iconName;
    if (routeName === 'Details') {
      iconName = `ios-information-circle${focused ? '' : '-outline'}`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default DetailsScreen;
