import React from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import styles from '../styles/styles';

const Counter = ({query, changeCount, changeNumber, setQuery, count}) => (
  <View style={styles.buttonContainer}>
    <TextInput
      style={{
        borderColor: 'red',
        backgroundColor: '#fff',
        borderRadius: 3,
      }}
      placeholder="Change number"
      value={query}
      blurOnSubmit={true}
      onSubmitEditing={({nativeEvent}) => changeNumber(nativeEvent.text)}
      onChangeText={query => setQuery(query)}
    />
    <Text>*Note: Only numbers are valud inputs</Text>
    <View style={{flexDirection: 'row'}}>
      <TouchableOpacity onPress={() => changeCount(false)}>
        <Text style={styles.button}>Decrease Number</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => changeCount(true)}>
        <Text style={styles.button}>Increase Number</Text>
      </TouchableOpacity>
    </View>
    <Text>{count}</Text>
  </View>
);

export default Counter;
