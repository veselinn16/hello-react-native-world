import React from 'react';
import {View, FlatList} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationEvents} from 'react-navigation';

const posts = require('../testPosts.json');

import Heading from '../components/Heading';
import UserPosts from '../components/UserPosts';
import WarningMessage from '../components/WarningMessage';

const PostsScreen = ({navigation}) => {
  const user = navigation.getParam('user');

  const getUserPosts = userId => {
    return posts.filter(post => post.userId === userId);
  };

  const userPosts = user ? getUserPosts(user.id) : null;

  const removeCurrentUser = () => navigation.setParams({user: null});

  return (
    <View style={{flex: 1}}>
      <NavigationEvents onDidBlur={removeCurrentUser} />
      <Heading
        text={user ? `${user.name}'s Posts` : 'Unknown User'}
        styles={{
          backgroundColor: '#222',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      />
      {user ? <UserPosts posts={userPosts} /> : <WarningMessage />}
    </View>
  );
};

PostsScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Posts') {
      iconName = `sticky-note${focused ? '' : '-o'}`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default PostsScreen;
