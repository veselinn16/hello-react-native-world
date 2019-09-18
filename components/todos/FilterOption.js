import React from 'react';
import {connect} from 'react-redux';

// Components
import {ListItem, Radio, Right, Left, Text} from 'native-base';

// Action creators
import {setTemporaryFilter} from '../../actions';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.todosScreen;

const FilterOption = ({filter, option, setTemporaryFilter}) => {
  return (
    <ListItem
      style={styles.optionsConatiner}
      onPress={() => {
        setTemporaryFilter(option);
      }}>
      <Left>
        <Text style={styles.optionText}>{option}</Text>
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
