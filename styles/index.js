import {StyleSheet} from 'react-native';
import usersStyles from './usersStyles';
import detailsStyles from './detailsStyles';
import generalComponentStyles from './general';
import todosStyles from './todosStyles';
import postsStyles from './postsStyles';

export default {
  usersScreen: usersStyles,
  detailsScreen: detailsStyles,
  todosScreen: todosStyles,
  postsScreen: postsStyles,
  generalComponents: generalComponentStyles,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#ab2627',
  },
  headingContainer: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
  },
  boxContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    // backgroundColor: '#fece35',
  },
  box: {
    width: '30%',
    // backgroundColor: '#f3b900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 2,
    // backgroundColor: '#f34000',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    borderRadius: 3,
    color: '#fff',
    margin: 10,
    backgroundColor: '#000',
  },
});

// export default stylesReal;
