import React, {Fragment} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// Components
import Heading from '../components/Heading';
import UserData from '../components/UserData';

// Icons
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

const posts = require('../test2.json');

const DetailsScreen = ({navigation}) => {
  const user = navigation.getParam('user');

  return (
    <View style={{flex: 1}}>
      {/* // <View> */}
      <Heading
        text={`Details about ${user ? user.name : 'User'}`}
        styles={{
          backgroundColor: '#222',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />

      {user ? (
        <Fragment>
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
              onPress={() => navigation.navigate('Users')}>
              <Icon name="arrow-left-bold" size={24} />
              <Text style={{color: '#000', fontSize: 17, marginLeft: 5}}>
                Back to users
              </Text>
            </TouchableOpacity>
          </View>
        </Fragment>
      ) : (
        <Fragment>
          <Text>Select User and Come back</Text>
        </Fragment>
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
