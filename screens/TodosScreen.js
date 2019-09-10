import React from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

// Todos
const todos = require('../testTodos.json');

// Component
import Heading from '../components/Heading';
import UserTodos from '../components/UserTodos';
import WarningMessage from '../components/WarningMessage';

const TodosScreen = ({navigation}) => {
  const user = navigation.getParam('user');

  const getUserTodos = userId => {
    return todos.filter(todo => todo.userId === userId);
  };

  const userTodos = user ? getUserTodos(user.id) : null;

  return (
    <View style={{flex: 1}}>
      <Heading
        text={user ? `${user.name}'s Todos` : 'Unknown User'}
        styles={{
          backgroundColor: '#222',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
        }}
      />
      {user ? <UserTodos todos={userTodos} /> : <WarningMessage />}
    </View>
  );
};

TodosScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Todos') {
      iconName = `sticky-note${focused ? '' : '-o'}`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default TodosScreen;
