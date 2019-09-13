import React, {useState} from 'react';
import {Container, Content, Icon, Input, Item} from 'native-base';

import {searchPosts} from '../../actions';
import {connect} from 'react-redux';

const PostsInput = ({searchPosts}) => {
  const [search, setSearch] = useState('');

  const resetSearch = () => {
    setSearch('');
    searchPosts('');
  };

  return (
    <Container style={{flex: 1.5, padding: 5, backgroundColor: '#555'}}>
      <Content>
        <Item>
          <Input
            style={{color: '#fff'}}
            value={search}
            onChangeText={search => {
              setSearch(search);
              searchPosts(search);
            }}
            onSubmitEditing={({nativeEvent}) => {
              setSearch(nativeEvent.text);
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

const mapDispatchToProps = dispatch => ({
  searchPosts: query => dispatch(searchPosts(query)),
});

export default connect(
  null,
  mapDispatchToProps,
)(PostsInput);
