import React, {useState} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.postsScreen;

const Accordion = ({title, data}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <View style={styles.accordionContainer}>
      <TouchableOpacity
        style={styles.postContainer}
        onPress={() => setExpanded(!expanded)}>
        <Text style={styles.postTitle}>{title}</Text>
        <View style={styles.postIconContainer}>
          <Icon
            name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            style={styles.postIcon}
          />
        </View>
      </TouchableOpacity>
      {/* Show data if element is expanded */}
      {expanded && (
        <View style={styles.postBody}>
          <Text>{data}</Text>
        </View>
      )}
    </View>
  );
};

export default Accordion;
