import React from 'react';
import {connect} from 'react-redux';

// Components
import {View} from 'react-native';
import {NavigationEvents} from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Heading from '../components/general/Heading';
import UserPosts from '../components/posts/UserPosts';
import WarningMessage from '../components/general/WarningMessage';
import PostsInput from '../components/posts/PostsInput';
import {Spinner} from 'native-base';

// Action Creators
import {getResource} from '../utils/helpers';
import {toggleLoading, searchPosts} from '../actions';

// Styles
import masterStyleSheet from '../styles';
const styles = masterStyleSheet.postsScreen;

const PostsScreen = ({getResource, isLoading, user, postsObj}) => {
  return (
    <View style={styles.postsScreen}>
      <NavigationEvents onWillFocus={user ? getResource : null} />
      <Heading
        text={user ? `${user.name}'s Posts` : 'Unknown User'}
        extraStyles={{
          backgroundColor: '#222',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      {user && <PostsInput />}
      <View style={styles.mainContainer}>
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
