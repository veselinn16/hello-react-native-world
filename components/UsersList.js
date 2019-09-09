import React, {Fragment} from 'react';
import {View, FlatList, Text} from 'react-native';

import UserButton from './UserButton';
import Heading from './Heading';

const UsersList = ({users, data, navigation}) => {
  return (
    <Fragment>
      <Heading text={'Users'} styles={{backgroundColor: '#555'}} />
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const evenIndex = data.indexOf(item) % 2 == 0 ? true : false;
          return (
            <UserButton
              user={item}
              navigation={navigation}
              evenIndex={evenIndex}
            />
          );
        }}
      />
    </Fragment>
  );
};

export default UsersList;
