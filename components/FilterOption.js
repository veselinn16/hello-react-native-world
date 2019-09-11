import React from 'react';
import {ListItem, Radio, Right, Left, Text} from 'native-base';

const FilterOption = ({option, isSelected}) => (
  <ListItem>
    <Left>
      <Text style={{color: '#fff'}}>{option}</Text>
    </Left>
    <Right>
      <Radio selected={isSelected} />
    </Right>
  </ListItem>
);

export default FilterOption;
