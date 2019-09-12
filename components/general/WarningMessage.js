import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

const WarningMessage = props => (
  <View
    style={{
      flex: 9,
      backgroundColor: '#555',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
    <Icon name="warning" size={80} color="#777" />
    <View style={{width: '60%'}}>
      <Text
        style={{
          color: 'tomato',
          fontSize: 20,
          textAlign: 'center',
          marginTop: 15,
        }}>
        Please select a user and come back!
      </Text>
    </View>
  </View>
);

export default WarningMessage;
