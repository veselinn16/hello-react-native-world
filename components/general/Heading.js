import React from 'react';
import {View, Text} from 'react-native';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.generalComponents;

const Heading = ({text, extraStyles, children}) => (
  <View style={{...styles.headingContainer, ...extraStyles}}>
    <Text style={styles.headingText}>{text}</Text>
    {children}
  </View>
);

export default Heading;
