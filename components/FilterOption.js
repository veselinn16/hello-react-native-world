import React from 'react';
import {ListItem, Radio, Right, Left, Text} from 'native-base';

const FilterOption = ({option, isSelected, filters, setRadio}) => {
  const deactivateRadios = newFilters => {
    for (let filter in newFilters) {
      newFilters[filter] = false;
    }
  };

  const determineActiveRadio = () => {
    const newFilters = {...filters};
    if (!isSelected) {
      deactivateRadios(newFilters);
      newFilters[option] = !isSelected;
    } else {
      deactivateRadios(newFilters);
    }
    setRadio(newFilters);
  };

  return (
    <ListItem onPress={() => determineActiveRadio()}>
      <Left>
        <Text style={{color: '#fff'}}>{option}</Text>
      </Left>
      <Right>
        <Radio onPress={() => determineActiveRadio()} selected={isSelected} />
      </Right>
    </ListItem>
  );
};

export default FilterOption;
