import React from 'react';
import {connect} from 'react-redux';

// Components
import {Keyboard} from 'react-native';
import {Container, Content, Icon, Input, Item} from 'native-base';
import {NavigationEvents} from 'react-navigation';

// Action creators
import {updateSearch, searchPosts, resetSearch} from '../../actions';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.postsScreen;

const PostsInput = ({search, updateSearch, searchPosts, resetQuery}) => {
  const resetSearch = () => {
    Keyboard.dismiss();
    resetQuery();
    searchPosts('');
  };

  return (
    <Container style={styles.inputContainer}>
      <NavigationEvents onWillBlur={resetQuery} />
      <Content>
        <Item>
          <Input
            style={styles.input}
            value={search}
            onChangeText={search => {
              updateSearch(search);
              searchPosts(search);
            }}
            onSubmitEditing={({nativeEvent}) => {
              updateSearch(nativeEvent.text);
              searchPosts(nativeEvent.text);
            }}
            placeholder="Search Posts"
            placeholderTextColor="#fff"
          />
          <Icon
            style={styles.inputIcon}
            onPress={resetSearch}
            active
            name="cross"
            type="Entypo"
          />
        </Item>
      </Content>
    </Container>
  );
};

const mapStateToProps = state => ({
  search: state.search,
});

const mapDispatchToProps = dispatch => ({
  searchPosts: query => dispatch(searchPosts(query)),
  updateSearch: query => dispatch(updateSearch(query)),
  resetQuery: () => dispatch(resetSearch()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsInput);
