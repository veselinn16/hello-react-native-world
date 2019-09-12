import React, {Fragment} from 'react';
import {FlatList} from 'react-native';

import UserButton from './UserButton';
import Heading from '../general/Heading';

const UsersList = ({users, navigation}) => {
  return (
    <Fragment>
      <Heading text={'Users'} styles={{backgroundColor: '#555'}} />
      <FlatList
        data={users}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) => {
          const evenIndex = users.indexOf(item) % 2 == 0 ? true : false;
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
