import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  detailsScreen: {
    flex: 1,
  },
  // <UserData>
  userDataContainer: {
    padding: 10,
    backgroundColor: '#555',
    flex: 9,
    justifyContent: 'center',
    alignItems: 'center',
  },
  userDataItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '85%',
  },
  userDataIcon: {
    fontSize: 30,
    color: '#ffc04c',
  },
  userDataText: {
    marginLeft: 10,
    color: '#fff',
    fontSize: 25,
  },
  // </UserData>
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    backgroundColor: '#555',
  },
  // <ResourceButton>
  buttonContainer: {
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 17,
    marginRight: 7,
  },
  buttonIcon: {
    fontSize: 24,
    color: '#000',
  },
  // </ResourceButton>
  goBackBtnContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#555',
  },
  goBackBtn: {
    backgroundColor: '#fff',
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
  },
  goBackBtnIcon: {
    fontSize: 24,
  },
  goBackBtnText: {
    color: '#000',
    fontSize: 17,
    marginLeft: 5,
  },
});
