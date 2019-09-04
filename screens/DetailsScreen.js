import React from 'react';
import {View, Text, Button} from 'react-native';

const DetailsScreen = props => (
  <View style={{flex: 1, alignItems: 'center', justifyContent: 'space-around'}}>
    <Text>This is the Details Screen</Text>
    <Text>Nothing to see here!</Text>
    <View>
      <Button
        title="Back to Home Page"
        onPress={() => props.navigation.navigate('Home')}
      />
    </View>
  </View>
);

export default DetailsScreen;
