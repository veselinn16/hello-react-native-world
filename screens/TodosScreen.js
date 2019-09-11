import React, {useState, useEffect} from 'react';
import {View, Button, Text} from 'react-native';
import Modal from 'react-native-modal';
import {
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationEvents} from 'react-navigation';

// Todos
const todos = require('../testTodos.json');

// Components
import Heading from '../components/Heading';
import UserTodos from '../components/UserTodos';
import WarningMessage from '../components/WarningMessage';
import FilterMenu from '../components/FilterMenu';

const TodosScreen = ({navigation}) => {
  const [isModalVisible, setModalVisibility] = useState(false);
  const [filter, setFilter] = useState('');

  useEffect(() => console.log(filter), [filter]);

  const user = navigation.getParam('user');
  const getUserTodos = userId => {
    return todos.filter(todo => todo.userId === userId);
  };

  const toggleModalVisibility = () => {
    setModalVisibility(!isModalVisible);
  };

  const userTodos = user ? getUserTodos(user.id) : null;

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
      </Heading>
      {user ? <UserTodos todos={userTodos} /> : <WarningMessage />}
      <Modal
        style={{flex: 1}}
        hideModalContentWhileAnimating={true}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        isVisible={isModalVisible}
        onBackdropPress={toggleModalVisibility}
        onBackButtonPress={toggleModalVisibility}>
        <FilterMenu
          setFilter={setFilter}
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
