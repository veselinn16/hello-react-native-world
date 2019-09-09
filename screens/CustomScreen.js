import React, {useState} from 'react';

import Boxes from '../components/Boxes';
import Counter from '../components/Counter';
import List from '../components/List';
import ImageContainer from '../components/ImageContainer';

import {View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import styles from '../styles/styles';

const UsersScreen = props => {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState('0');

  const changeNumber = newCount => {
    +newCount / 2 && setCount(newCount);
    setQuery('');
  };

  const changeCount = bool => {
    bool ? setCount(`${+count + 1}`) : setCount(`${+count - 1}`);
  };

  return (
    <View style={styles.container}>
      <Boxes navigation={props.navigation} />
      <Counter
        query={query}
        changeNumber={changeNumber}
        setQuery={setQuery}
        changeCount={changeCount}
        count={count}
      />
      <List />
      <ImageContainer />
    </View>
  );
};

UsersScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = Icon;
    let iconName;
    if (routeName === 'Users') {
      iconName = `account${focused ? '' : '-outline'}`;
    } else if (routeName === 'Settings') {
      iconName = `ios-options`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

export default UsersScreen;
