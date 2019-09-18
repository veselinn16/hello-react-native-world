import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // <Heading>
  headingContainer: {
    padding: 10,
  },
  headingText: {color: '#fff', textAlign: 'center', fontSize: 20},
  // </Heading>
  // <WarningMessage>
  warningContainer: {
    flex: 9,
    backgroundColor: '#555',
    justifyContent: 'center',
    alignItems: 'center',
  },
  warningIcon: {
    fontSize: 80,
    color: '#777',
  },
  warningTextConatiner: {
    width: '60%',
  },
  warningText: {
    color: 'tomato',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 15,
  },
  // </WarningMessage>
});
