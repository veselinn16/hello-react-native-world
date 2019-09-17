import React from 'react';
import {ListItem, Radio, Right, Left, Text} from 'native-base';

import {connect} from 'react-redux';
import {setTemporaryFilter} from '../../actions';

const FilterOption = ({filter, option, setTemporaryFilter}) => {
  return (
    <ListItem
      style={{width: '100%'}}
      onPress={() => {
        setTemporaryFilter(option);
      }}>
      <Left>
        <Text style={{color: '#fff'}}>{option}</Text>
      </Left>
      <Right>
        <Radio
          onPress={() => {
            setTemporaryFilter(option);
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
  filter: state.todosFilters.temporaryFilter,
});

const mapDispatchToProps = dispatch => ({
  setTemporaryFilter: filter => dispatch(setTemporaryFilter(filter)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterOption);
