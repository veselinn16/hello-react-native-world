import React, {useEffect} from 'react';
import {connect} from 'react-redux';

// Components
import {TouchableOpacity} from 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import Modal from 'react-native-modal';
import {Spinner} from 'native-base';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import Heading from '../components/general/Heading';
import UserTodos from '../components/todos/UserTodos';
import WarningMessage from '../components/general/WarningMessage';
import FilterMenu from '../components/todos/FilterMenu';

// Action creators
import {toggleModalVisibility, cancelFilter} from '../actions';
import {getResource} from '../utils/helpers';

// Style
import masterStyleSheet from '../styles';
const styles = masterStyleSheet.todosScreen;
const headingExtraStyles = {
  backgroundColor: '#222',
  flex: 1,
  flexDirection: 'row',
  justifyContent: 'center',
  alignItems: 'center',
};

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
    <View style={styles.todosScreen}>
      <Heading
        text={user ? `${user.name}'s Todos` : 'Unknown User'}
        extraStyles={headingExtraStyles}>
        {user && (
          <TouchableOpacity
            style={styles.todosBtn}
            onPress={toggleModalVisibility}>
            <Text style={styles.todosBtnText}>Sort</Text>
            <Icon name="sort" style={styles.todosBtnIcon} />
          </TouchableOpacity>
        )}
      </Heading>
      <View style={styles.todosContainer}>
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
        style={styles.modal}
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
