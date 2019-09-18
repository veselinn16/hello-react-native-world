import React from 'react';

// Components
import {View, Text, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.todosScreen;

const UserTodos = ({todos}) => {
  return (
    <FlatList
      data={todos}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => {
        const index = todos.indexOf(item);
        return (
          <View
            style={{
              ...styles.todosList,
              backgroundColor: item.completed ? '#38cc4f' : '#ff7259',
            }}>
            <View style={styles.todoListItem}>
              <Text style={styles.todoListItemText}>{item.title}</Text>
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
