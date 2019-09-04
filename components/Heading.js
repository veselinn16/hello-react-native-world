import React from 'react';
import {View, Text} from 'react-native';

import styles from '../styles/styles';

const Heading = props => (
  <View style={styles.headingContainer}>
    <Text style={styles.heading}>My first React-native App</Text>
  </View>
);

export default Heading;
