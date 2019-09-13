import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

import {getResource} from '../../utils/helpers';
import {connect} from 'react-redux';

const ResourceButton = ({resource, getResource, navigation}) => {
  const capitalizeString = () => resource[0].toUpperCase() + resource.slice(1);

  return (
    <View
      style={{
        backgroundColor: '#555',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
      }}>
      <TouchableOpacity
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 5,
          borderRadius: 5,
        }}
        onPress={() => {
          getResource(resource);
          navigation.navigate(capitalizeString());
        }}>
        <Text style={{fontSize: 17, marginRight: 7}}>{`See ${resource}`}</Text>
        <Icon
          name={resource === 'posts' ? 'notebook' : 'note'}
          size={24}
          color="black"
        />
      </TouchableOpacity>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  getResource: resource => dispatch(getResource(resource)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ResourceButton);
