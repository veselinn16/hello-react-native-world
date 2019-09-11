import React from 'react';
import {View, Button} from 'react-native';
import {Container, Content} from 'native-base';
import FilterOption from './FilterOption';

const FilterMenu = ({setFilter, toggleModalVisibility}) => {
  const goBackToList = () => {
    setFilter('test filter');
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
          <FilterOption option={'Default'} isActive={true} />
          <FilterOption option={'Name(Alphabetically)'} isActive={false} />
          <FilterOption option={'Completed'} isActive={false} />
          <View
            style={{
              flexDirection: 'row',
              marginTop: 15,
              backgroundColor: '#555',
              justifyContent: 'space-around',
            }}>
            <Button style={{width: 100}} title="Save" onPress={goBackToList} />
            <Button
              style={{width: 100}}
              title="Cancel"
              onPress={goBackToList}
            />
          </View>
        </Content>
      </View>
    </View>
  );
};

export default FilterMenu;
