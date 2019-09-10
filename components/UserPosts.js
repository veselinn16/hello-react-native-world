import React from 'react';
import {View, FlatList} from 'react-native';

import Accordion from './Accordion';

const UserPosts = ({posts}) => {
  return (
    <View style={{flex: 9}}>
      <FlatList
        data={posts}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => (
          <Accordion title={item.title} data={item.body} />
        )}
      />
    </View>
  );
};

export default UserPosts;
