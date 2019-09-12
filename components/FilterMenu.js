import React, {useState} from 'react';
import {View, Button} from 'react-native';
import {Content} from 'native-base';
import FilterOption from './FilterOption';

const FilterMenu = ({selectFilter, toggleModalVisibility}) => {
  const [filters, setFilter] = useState({
    Default: false,
    Name: false,
    Completed: false,
  });

  const goBackToListFilter = () => {
    for (let filter in filters) {
      if (filters[filter]) {
        selectFilter(filter);
      }
    }
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
          <FilterOption
            option={'Default'}
            setRadio={setFilter}
            filters={filters}
            isSelected={filters.Default}
          />
          <FilterOption
            option={'Name'}
            setRadio={setFilter}
            filters={filters}
            isSelected={filters.Name}
          />
          <FilterOption
            option={'Completed'}
            setRadio={setFilter}
            filters={filters}
            isSelected={filters.Completed}
          />

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

export default FilterMenu;
