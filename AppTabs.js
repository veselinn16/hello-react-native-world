import React, {useState} from 'react';
import {View} from 'react-native';

// Components
import Boxes from './components/Boxes';
import Counter from './components/Counter';
import List from './components/List';
import ImageContainer from './components/ImageContainer';

// Screens
import DetailsScreen from './screens/DetailsScreen';

// Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Styles and Icons
import styles from './styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = props => {
  const [query, setQuery] = useState('');
  const [count, setCount] = useState('0');

  const changeNumber = newCount => {
    +newCount / 2 && setCount(newCount);
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

HomeScreen.navigationOptions = ({navigation}) => ({
  tabBarIcon: ({focused, horizontal, tintColor}) => {
    const {routeName} = navigation.state;
    let IconComponent = MaterialCommunityIcons;
    let iconName;
    if (routeName === 'Home') {
      iconName = `city-variant${focused ? '' : '-outline'}`;
    } else if (routeName === 'Settings') {
      iconName = `ios-options`;
    }

    return <IconComponent name={iconName} size={30} color={tintColor} />;
  },
});

const TabNavigator = createBottomTabNavigator(
  {
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
      style: {
        // height: 60,
        backgroundColor: '#333',
      },
      labelStyle: {
        fontSize: 11,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
