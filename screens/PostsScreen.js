import React from 'react';
import {View} from 'react-native';

// Components
import {NavigationEvents} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Heading from '../components/general/Heading';
import UserPosts from '../components/posts/UserPosts';
import WarningMessage from '../components/general/WarningMessage';
import PostsInput from '../components/posts/PostsInput';
import {Spinner} from 'native-base';

import {connect} from 'react-redux';

// Action Creators
import {getResource} from '../utils/helpers';
import {toggleLoading, searchPosts} from '../actions';

const PostsScreen = ({getResource, isLoading, user, postsObj}) => {
  return (
    <View style={{flex: 1}}>
      <NavigationEvents onWillFocus={user ? getResource : null} />
      <Heading
        text={user ? `${user.name}'s Posts` : 'Unknown User'}
        styles={{
          backgroundColor: '#222',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      {user && <PostsInput />}
      <View style={{flex: 9, backgroundColor: '#555'}}>
        {user ? (
          isLoading ? (
            <Spinner color="tomato" />
          ) : (
            <UserPosts posts={postsObj.posts} />
          )
        ) : (
          <WarningMessage />
        )}
      </View>
    </View>
  );
};

PostsScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    let iconName = `sticky-note${focused ? '' : '-o'}`;

    return <Icon name={iconName} size={30} color={tintColor} />;
  },
});

const mapStateToProps = state => ({
  user: state.user,
  isLoading: state.isLoading,
  postsObj: state.posts,
});

const mapDispatchToProps = dispatch => ({
  getResource: () => dispatch(getResource('posts')),
  toggleLoading: () => dispatch(toggleLoading()),
  searchPosts: query => dispatch(searchPosts(query)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostsScreen);
