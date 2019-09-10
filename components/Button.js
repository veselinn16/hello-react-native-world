import React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/SimpleLineIcons';

const Button = ({resource, navigation, user}) => {
  const capitalizeString = string => string[0].toUpperCase() + string.slice(1);

  const determineRoute = () => capitalizeString(resource);

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
        onPress={() => navigation.navigate(determineRoute(), {user})}>
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

export default Button;
