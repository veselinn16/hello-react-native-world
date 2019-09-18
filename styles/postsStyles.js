import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  postsScreen: {flex: 1},
  // <PostsInput>
  inputContainer: {
    flex: 1.5,
    padding: 5,
    backgroundColor: '#555',
  },
  input: {
    color: '#fff',
  },
  inputIcon: {
    color: 'tomato',
    fontSize: 30,
  },
  // </PostsInput>
  mainContainer: {
    flex: 9,
    backgroundColor: '#555',
  },
  // <Accordion>
  accordionContainer: {
    backgroundColor: '#555',
  },
  postContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
    backgroundColor: '#fff',
    marginBottom: 3,
  },
  postTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    flex: 9,
  },
  postIconContainer: {
    flex: 1,
  },
  postIcon: {
    fontSize: 30,
    color: 'tomato',
  },
  postBody: {
    backgroundColor: '#e0e0e0',
    padding: 16,
    marginTop: -3,
    marginBottom: 3,
  },
  // </Accordion>
  postsWarningContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 15,
  },
  postsWarningText: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'tomato',
  },
  // <UserPosts>
  // </UserPosts>
});
