import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Spinner} from 'native-base';

// Components
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Heading from '../components/general/Heading';
import UserTodos from '../components/todos/UserTodos';
import WarningMessage from '../components/general/WarningMessage';
import FilterMenu from '../components/todos/FilterMenu';

// Action creators
import {toggleModalVisibility, cancelFilter} from '../actions';
import {getResource} from '../utils/helpers';

import {connect} from 'react-redux';

const TodosScreen = ({
  user,
  isLoading,
  todosObj,
  cancelFilter,
  getResource,
  modalVisibility,
  toggleModalVisibility,
}) => {
  useEffect(() => {
    if (user) getResource();
  }, [user]);

  // state object destructuring
  const {todos} = todosObj;

  const hideModalAndRemoveFilter = () => {
    cancelFilter();
    toggleModalVisibility();
  };

  return (
    <View style={{flex: 1}}>
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
            onPress={toggleModalVisibility}>
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
            <UserTodos todos={todos} />
          )
        ) : (
          <WarningMessage />
        )}
      </View>
      <Modal
        style={{flex: 1}}
        animationIn="slideInDown"
        animationOut="slideOutUp"
        isVisible={modalVisibility}
        onBackdropPress={hideModalAndRemoveFilter}
        onBackButtonPress={toggleModalVisibility}>
        <FilterMenu toggleModalVisibility={toggleModalVisibility} />
      </Modal>
    </View>
  );
};

TodosScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    let iconName = `checkbox-multiple-marked${focused ? '' : '-outline'}`;

    return <Icon name={iconName} size={30} color={tintColor} />;
  },
});

const mapStateToProps = state => ({
  user: state.user,
  todosObj: state.todos,
  modalVisibility: state.modalVisibility,
});

const mapDispatchToProps = dispatch => ({
  toggleModalVisibility: () => dispatch(toggleModalVisibility()),
  getResource: () => dispatch(getResource('todos')),
  cancelFilter: () => dispatch(cancelFilter()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TodosScreen);
