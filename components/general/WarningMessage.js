import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.generalComponents;

const WarningMessage = props => (
  <View style={styles.warningContainer}>
    <Icon name="warning" style={styles.warningIcon} />
    <View style={styles.warningTextContainer}>
      <Text style={styles.warningText}>
        Please select a user and come back!
      </Text>
    </View>
  </View>
);

export default WarningMessage;
