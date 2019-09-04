import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ab2627',
  },
  headingContainer: {
    flex: 1,
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
    flexDirection: 'row-reverse',
    backgroundColor: '#fece35',
  },
  box: {
    width: '30%',
    height: '30%',
    backgroundColor: '#f3b900',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: '#f34000',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    padding: 10,
    borderRadius: 3,
    color: '#000',
    backgroundColor: '#fff',
  },
});

export default styles;
