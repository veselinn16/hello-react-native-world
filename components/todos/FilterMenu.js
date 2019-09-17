import React from 'react';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
import {Content} from 'native-base';
import FilterOption from './FilterOption';

// Action creators
import {applyTodosFilter} from '../../utils/helpers';
import {cancelFilter} from '../../actions';

const FilterMenu = ({
  toggleModalVisibility,
  applyTodosFilter,
  cancelFilter,
}) => {
  const goBackToListFilter = () => {
    applyTodosFilter();
    toggleModalVisibility();
  };

  const goBackToListNoFilter = () => {
    cancelFilter();
    toggleModalVisibility();
  };

  return (
    <View
      style={{
        height: '40%',
        padding: 10,
        backgroundColor: '#777',
        justifyContent: 'space-between',
      }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Content
          contentContainerStyle={{
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
          }}>
          <FilterOption option={'Default'} />
          <FilterOption option={'Name'} />
          <FilterOption option={'Completed'} />

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              width: '80%',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '40%'}}>
              <Button
                color="tomato"
                title="Cancel"
                onPress={goBackToListNoFilter}
              />
            </View>
            <View style={{width: '40%'}}>
              <Button title="Save" onPress={goBackToListFilter} />
            </View>
          </View>
        </Content>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => ({
  applyTodosFilter: () => dispatch(applyTodosFilter()),
  cancelFilter: () => dispatch(cancelFilter()),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilterMenu);
