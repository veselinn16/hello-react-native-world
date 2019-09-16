import React from 'react';
import {View, Button} from 'react-native';
import {Content} from 'native-base';
import FilterOption from './FilterOption';

import {applyTodosFilter} from '../../utils/helpers';
import {connect} from 'react-redux';

const FilterMenu = ({toggleModalVisibility, applyTodosFilter}) => {
  const goBackToListFilter = () => {
    applyTodosFilter();
    toggleModalVisibility();
  };

  const goBackToListNoFilter = () => {
    toggleModalVisibility();
  };

  return (
    <View
      style={{
        height: '40%',
        padding: 10,
        backgroundColor: '#555',
        justifyContent: 'space-between',
      }}>
      <View style={{backgroundColor: '#555', flex: 1}}>
        <Content>
          <FilterOption option={'Default'} />
          <FilterOption option={'Name'} />
          <FilterOption option={'Completed'} />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              backgroundColor: '#555',
              justifyContent: 'space-around',
            }}>
            <Button title="Cancel" onPress={goBackToListNoFilter} />
            <Button title="Save" onPress={goBackToListFilter} />
          </View>
        </Content>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  applyTodosFilter: () => dispatch(applyTodosFilter()),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilterMenu);
