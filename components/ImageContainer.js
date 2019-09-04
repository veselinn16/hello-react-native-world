import React from 'react';
import {View, Image} from 'react-native';

const ImageContainer = props => (
  <View style={{flex: 0.5, justifyContent: 'center', alignItems: 'center'}}>
    <Image style={{width: 50, height: 50}} source={require('../pic.png')} />
  </View>
);

export default ImageContainer;
