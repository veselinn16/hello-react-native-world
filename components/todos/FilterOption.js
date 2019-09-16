import React from 'react';
import {ListItem, Radio, Right, Left, Text} from 'native-base';

import {connect} from 'react-redux';
import {setFilter} from '../../actions';

const FilterOption = ({option, isSelected, filters, setFilter, setRadio}) => {
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
        <Radio
          onPress={() => {
            setFilter(option);
            determineActiveRadio();
          }}
          selected={isSelected}
          color="#fff"
          selectedColor="tomato"
        />
      </Right>
    </ListItem>
  );
};

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilterOption);
