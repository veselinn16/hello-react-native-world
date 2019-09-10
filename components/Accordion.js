import React, {useState} from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Accordion = ({title, data}) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <View style={{backgroundColor: '#555'}}>
      <TouchableOpacity
        style={styles.row}
        onPress={() => setExpanded(!expanded)}>
        <Text style={styles.title}>{title}</Text>
        <View style={{flex: 1}}>
          <Icon
            name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'}
            size={30}
            color="tomato"
          />
        </View>
      </TouchableOpacity>
      {/* Show data if element is expanded */}
      {expanded && (
        <View style={styles.child}>
          <Text>{data}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 9,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 3,
  },
  child: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginTop: -3,
    marginBottom: 3,
  },
});

export default Accordion;
