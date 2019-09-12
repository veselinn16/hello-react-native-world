import React, {useEffect, Fragment} from 'react';
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UserTodos = ({todos}) => {
  // useEffect(() => console.log(todos));
  determineTopMargin = index => {
    if (index === 0) return 0;
    return 2;
  };

  determineBottomMargin = index => {
    if (index === todos.length - 1) return 0;
    return 2;
  };

  return (
    <FlatList
      data={todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        const index = todos.indexOf(item);
        return (
          <View
            style={{
              marginTop: determineTopMargin(index),
              marginBottom: determineBottomMargin(index),
              padding: 10,
              height: 50,
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: item.completed ? '#38cc4f' : '#ff7259',
            }}>
            <View style={{maxWidth: '80%'}}>
              <Text style={{fontSize: 15}}>{item.title}</Text>
            </View>
            <Icon
              name={item.completed ? 'check' : 'close'}
              size={30}
              color={item.completed ? 'green' : 'red'}
            />
          </View>
        );
      }}
    />
  );
};

export default UserTodos;
