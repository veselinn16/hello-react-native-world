import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import {NavigationEvents} from 'react-navigation';

import baseUrl from '../utils/constants';

import Heading from '../components/Heading';
import UserPosts from '../components/UserPosts';
import WarningMessage from '../components/WarningMessage';
import PostsInput from '../components/PostsInput';

const PostsScreen = ({navigation}) => {
  const [search, setSearch] = useState('');
  const [userPosts, setUserPosts] = useState([]);

  const user = navigation.getParam('user') || null;
  useEffect(() => {
    if (user) {
      fetch(`${baseUrl}/posts?userId=${user.id}`)
        .then(res => res.json())
        .then(posts => setUserPosts(posts));
    }
  }, [user]);

  const getUserPosts = async userId => {
    // filters out all the posts
    const res = await fetch(`${baseUrl}/posts?userId=${userId}`);
    const data = await res.json();
    // return posts.filter(post => post.userId === userId);
    return data;
  };

  const searchPosts = (function() {
    // iife closing over the initial array of user posts
    let initialUserPosts = [];
    if (user) {
      getUserPosts(user.id)
        .then(posts => {
          initialUserPosts = posts;
        })
        .catch(err => console.log(err));
    }

    return search => {
      // do nothing if there are no posts
      if (initialUserPosts.length === 0) return;
      if (search.length !== 0) {
        // if there is a search query
        setUserPosts(
          initialUserPosts.filter(
            // return only posts that contain the search query in the title as well as the body
            post => post.title.includes(search) && post.body.includes(search),
          ),
        );
      } else {
        setUserPosts(initialUserPosts);
      }
    };
  })();

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
      {user && (
        <PostsInput
          search={search}
          setSearch={setSearch}
          searchPosts={searchPosts}
        />
      )}

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
