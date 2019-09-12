import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationEvents} from 'react-navigation';

// Todos
const todos = require('../testTodos.json');

// Components
import Heading from '../components/Heading';
import UserTodos from '../components/UserTodos';
import WarningMessage from '../components/WarningMessage';
import FilterMenu from '../components/FilterMenu';

// Helper Functions
import compare from '../utils/helpers';

const TodosScreen = ({navigation}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [filter, setFilter] = useState('Default');
  const [userTodos, setUserTodos] = useState([]);

  const user = navigation.getParam('user');
  const getUserTodos = userId => {
    return todos.filter(todo => todo.userId === userId);
  };

  const toggleModalVisibility = () => {
    setModalVisibility(!isModalVisible);
  };

  useEffect(() => {
    user && setUserTodos(getUserTodos(user.id));
  }, [user]);

  const determineFilter = () => {
    if (filter === 'Completed') {
      filterByCompleted();
    } else if (filter === 'Name') {
      filterByName();
    } else {
      filterByDefault();
    }
  };

  const filterByDefault = () => {
    setUserTodos(getUserTodos(user.id));
  };

  const filterByName = () => {
    let sortedTodos = [...userTodos];

    setUserTodos(sortedTodos.sort(compare));
  };

  const filterByCompleted = () => {
    let filteredTodos = [];
    let unfinishedTodos = [];
    userTodos.forEach(todo => {
      todo.completed ? filteredTodos.push(todo) : unfinishedTodos.push(todo);
    });
    unfinishedTodos.forEach(todo => filteredTodos.push(todo));
    setUserTodos(filteredTodos);
  };

  const removeCurrentUser = () => navigation.setParams({user: null});

  return (
    <View style={{flex: 1}}>
      <NavigationEvents onDidBlur={removeCurrentUser} />
      <Heading
        text={user ? `${user.name}'s Todos` : 'Unknown User'}
        styles={{
          backgroundColor: '#222',
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {user && (
          <TouchableOpacity
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: '#fff',
              marginLeft: 10,
              padding: 5,
              borderRadius: 5,
            }}
            onPress={user ? toggleModalVisibility : null}>
            <Text style={{fontSize: 17, marginRight: 5}}>Sort</Text>
            <Icon name="sort" size={23} color="#000" />
          </TouchableOpacity>
        )}
      </Heading>
      {user ? <UserTodos todos={userTodos} /> : <WarningMessage />}
      <Modal
        style={{flex: 1}}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        onModalWillHide={determineFilter}
        isVisible={isModalVisible}
        onBackdropPress={toggleModalVisibility}
        onBackButtonPress={toggleModalVisibility}>
        <FilterMenu
          selectFilter={setFilter}
          toggleModalVisibility={toggleModalVisibility}
        />
      </Modal>
    </View>
  );
};

TodosScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Todos') {
      iconName = `checkbox-multiple-marked${focused ? '' : '-outline'}`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default TodosScreen;
