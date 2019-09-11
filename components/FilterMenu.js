import React, {useState, useEffect} from 'react';
import {View, Button} from 'react-native';
import {Container, Content} from 'native-base';
import FilterOption from './FilterOption';

const FilterMenu = ({selectFilter, toggleModalVisibility}) => {
  const [filters, setFilter] = useState({
    Default: false,
    Name: false,
    Completed: false,
  });
  //   const [defaultFilter, setDefaultFilter] = useState(false);
  //   const [nameFilter, setNameFilter] = useState(false);
  //   const [completedFilter, setCompletedFilter] = useState(false);

  const goBackToListFilter = () => {
    for (let filter in filters) {
      if (filters[filter]) {
        selectFilter(filter);
      }
    }
    toggleModalVisibility();
  };

  const goBackToListNoFilter = () => {
    setFilter({
      Default: true,
      Name: false,
      Completed: false,
    });
    selectFilter('Default');
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
          {/* <FilterOption
            option={'Default'}
            setRadio={setDefaultFilter}
            isSelected={defaultFilter}
          />
          <FilterOption
            option={'Name(Alphabetically)'}
            setRadio={setNameFilter}
            isSelected={nameFilter}
          />
          <FilterOption
            option={'Completed'}
            setRadio={setCompletedFilter}
            isSelected={completedFilter}
          /> */}

          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              backgroundColor: '#555',
              justifyContent: 'space-around',
            }}>
            <Button title="Save" onPress={goBackToListFilter} />
            <Button title="Cancel" onPress={goBackToListNoFilter} />
          </View>
        </Content>
      </View>
    </View>
  );
};

export default FilterMenu;
