import React from 'react';
import {FlatList, Text} from 'react-native';

const List = props => (
  <FlatList
    style={{flex: 5}}
    data={[
      {text: 'List Item 1'},
      {text: 'List Item 2'},
      {text: 'List Item 3'},
      {text: 'List Item 4'},
      {text: 'List Item 5'},
      {text: 'List Item 6'},
      {text: 'List Item 7'},
      {text: 'List Item 8'},
      {text: 'List Item 9'},
    ]}
    renderItem={({item, index}) => {
      return <Text id={index}>{item.text}</Text>;
    }}
    keyExtractor={(item, index) => index.toString()}
  />
);

export default List;
