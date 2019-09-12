import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationEvents} from 'react-navigation';
import {Spinner} from 'native-base';

// Todos
import baseUrl from '../utils/constants';

// Components
import Heading from '../components/general/Heading';
import UserTodos from '../components/todos/UserTodos';
import WarningMessage from '../components/general/WarningMessage';
import FilterMenu from '../components/todos/FilterMenu';

// Helper Functions
import compare from '../utils/helpers';

const TodosScreen = ({navigation}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [filter, setFilter] = useState('Default');
  const [isLoading, setLoading] = useState(false);
  const [userTodos, setUserTodos] = useState({
    defaultTodos: [],
    filteredTodos: [],
  });

  const user = navigation.getParam('user');

  useEffect(() => {
    if (user) {
      // activate spinner
      setLoading(true);
      fetch(`${baseUrl}/todos?userId=${user.id}`)
        .then(res => res.json())
        .then(todos => {
          setUserTodos({defaultTodos: todos, filteredTodos: todos});
          // deactivate spinner
          setLoading(false);
        });
    }
  }, [user]);

  const updateTodos = filteredTodos => {
    setUserTodos({
      defaultTodos: userTodos.defaultTodos,
      filteredTodos,
    });
  };

  const toggleModalVisibility = () => {
    setModalVisibility(!isModalVisible);
  };

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
    updateTodos(userTodos.defaultTodos);
  };

  const filterByName = () => {
    let sortedTodos = [...userTodos.defaultTodos];

    updateTodos(sortedTodos.sort(compare));
  };

  const filterByCompleted = () => {
    let filteredTodos = [];
    let unfinishedTodos = [];
    userTodos.defaultTodos.forEach(todo => {
      todo.completed ? filteredTodos.push(todo) : unfinishedTodos.push(todo);
    });
    unfinishedTodos.forEach(todo => filteredTodos.push(todo));

    updateTodos(filteredTodos);
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
      <View style={{flex: 9, backgroundColor: '#555'}}>
        {user ? (
          isLoading ? (
            <Spinner color="tomato" />
          ) : (
            <UserTodos todos={userTodos.filteredTodos} />
          )
        ) : (
          <WarningMessage />
        )}
      </View>
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
