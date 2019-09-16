import React from 'react';
import {ListItem, Radio, Right, Left, Text} from 'native-base';

import {connect} from 'react-redux';
import {setFilter} from '../../actions';

const FilterOption = ({filter, option, setFilter}) => {
  return (
    <ListItem
      onPress={() => {
        setFilter(option);
      }}>
      <Left>
        <Text style={{color: '#fff'}}>{option}</Text>
      </Left>
      <Right>
        <Radio
          onPress={() => {
            setFilter(option);
          }}
          selected={option === filter}
          color="#fff"
          selectedColor="tomato"
        />
      </Right>
    </ListItem>
  );
};

const mapStateToProps = state => ({
  filter: state.todosFilter,
});

const mapDispatchToProps = dispatch => ({
  setFilter: filter => dispatch(setFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterOption);
