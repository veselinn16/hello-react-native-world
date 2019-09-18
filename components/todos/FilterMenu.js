import React from 'react';
import {connect} from 'react-redux';
import {View, Button} from 'react-native';
import {Content} from 'native-base';
import FilterOption from './FilterOption';

// Action creators
import {applyTodosFilter} from '../../utils/helpers';
import {cancelFilter} from '../../actions';

// Styles
import masterStyleSheet from '../../styles';
const styles = masterStyleSheet.todosScreen;

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
    <View style={styles.filterMenuConatiner}>
      <View
        style={{
          flex: 1,
          justifyContent: 'space-between',
        }}>
        <Content contentContainerStyle={styles.filterMenu}>
          <FilterOption option={'Default'} />
          <FilterOption option={'Name'} />
          <FilterOption option={'Completed'} />

          <View style={styles.buttonsContainer}>
            <View style={styles.buttonContainer}>
              <Button
                color="tomato"
                title="Cancel"
                onPress={goBackToListNoFilter}
              />
            </View>
            <View style={styles.buttonContainer}>
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
