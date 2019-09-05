import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from '../styles/styles';

const Boxes = props => {
  return (
    <View style={styles.boxContainer}>
      <View style={{flexDirection: 'row', height: '30%'}}>
        <View style={styles.box}>
          <Text>1</Text>
        </View>
        <View style={{...styles.box, backgroundColor: '#f6ce4c'}}>
          <Text>2</Text>
        </View>
        <View style={{...styles.box, backgroundColor: '#fbeab2'}}>
          <Text>3</Text>
        </View>
      </View>
      <View>
        <Button
          title="Go to Details Page"
          onPress={() =>
            props.navigation.navigate('Details', {
              itemId: 19,
              otherParam: 'Details Screen',
            })
          }
        />
      </View>
    </View>
  );
};

export default Boxes;
