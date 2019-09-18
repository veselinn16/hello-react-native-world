import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  todosScreen: {
    flex: 1,
  },
  // < inside ofHeading>
  todosBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginLeft: 10,
    padding: 5,
    borderRadius: 5,
  },
  todosBtnText: {
    fontSize: 17,
    marginRight: 5,
  },
  todosBtnIcon: {
    fontSize: 23,
    color: '#000',
  },
  // </ inside of Heading>
  todosContainer: {
    flex: 9,
    backgroundColor: '#555',
  },
  // <UserTodos>
  todosList: {
    marginVertical: 2,
    padding: 10,
    height: 50,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  todoListItem: {
    maxWidth: '80%',
  },
  todoListItemText: {
    fontSize: 15,
  },
  // </UserTodos>
  // <Modal>
  modal: {
    flex: 1,
  },
  // <FilterMenu>
  filterMenuConatiner: {
    height: '40%',
    padding: 10,
    backgroundColor: '#777',
    justifyContent: 'space-between',
  },
  filterMenu: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  // <FilterOption>
  optionsConatiner: {
    width: '100%',
  },
  optionText: {
    color: '#fff',
  },
  // </FilterOption>
  buttonsContainer: {
    flexDirection: 'row',
    marginTop: 15,
    width: '80%',
    justifyContent: 'space-between',
  },
  buttonContainer: {
    width: '40%',
  },
  // </FilterMenu>
  // </Modal>
});
