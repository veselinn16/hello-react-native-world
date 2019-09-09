import React from 'react';
import {View, Text} from 'react-native';

const Heading = ({text, styles}) => (
  <View style={{padding: 10, ...styles}}>
    <Text style={{color: '#fff', textAlign: 'center', fontSize: 20}}>
      {text}
    </Text>
  </View>
);

export default Heading;
