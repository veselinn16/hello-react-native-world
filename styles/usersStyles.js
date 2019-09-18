import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  usersContainer: {
    flex: 1,
  },
  userListContainer: {
    flex: 9,
    backgroundColor: '#555',
  },
  // UsersButton
  btnContainer: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  btn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  btnText: {
    fontSize: 17,
    marginRight: 7,
  },
  btnIcon: {
    marginRight: 10,
    color: '#000',
    fontSize: 24,
  },
  usersMessage: {
    color: '#fff',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 15,
  },
  // UsersList
  //UserButton
  userBtnContainer: {
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  userIconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  userIcon: {
    fontSize: 30,
    color: '#fff',
  },
  userDataContainer: {
    flex: 4,
  },
  userDetails: {
    fontSize: 15,
  },
  userBtn: {
    flex: 1,
  },
});
