import React, {useState} from 'react';
import {Container, Content, Icon, Input, Item} from 'native-base';

import {updateSearch, searchPosts, resetSearch} from '../../actions';
import {connect} from 'react-redux';
import {NavigationEvents} from 'react-navigation';

const PostsInput = ({search, updateSearch, searchPosts, resetQuery}) => {
  const resetSearch = () => {
    resetQuery();
    searchPosts('');
  };

  return (
    <Container style={{flex: 1.5, padding: 5, backgroundColor: '#555'}}>
      <NavigationEvents onWillBlur={resetQuery} />
      <Content>
        <Item>
          <Input
            style={{color: '#fff'}}
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
            style={{color: 'tomato', fontSize: 30}}
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
