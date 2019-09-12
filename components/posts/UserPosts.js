import React from 'react';
import {View, FlatList, Text} from 'react-native';

import Accordion from './Accordion';

const UserPosts = ({posts}) =>
  posts.length > 0 ? (
    <FlatList
      data={posts}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item}) => <Accordion title={item.title} data={item.body} />}
    />
  ) : (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        marginTop: 15,
      }}>
      <Text style={{fontSize: 25, fontWeight: 'bold', color: 'tomato'}}>
        No Posts Found!
      </Text>
    </View>
  );

export default UserPosts;
