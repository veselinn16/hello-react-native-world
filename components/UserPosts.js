import React from 'react';
import {View, FlatList, Text} from 'react-native';

import Accordion from './Accordion';

const UserPosts = ({posts}) => {
  return (
    <View style={{flex: 9, backgroundColor: '#555'}}>
      {posts.length > 0 ? (
        <FlatList
          data={posts}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <Accordion title={item.title} data={item.body} />
          )}
        />
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 15,
          }}>
          <Text style={{fontSize: 25, fontWeight: 'bold', color: 'tomato'}}>
            No Posts Found!
          </Text>
        </View>
      )}
    </View>
  );
};

export default UserPosts;
