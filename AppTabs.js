import React, {Component, useState} from 'react';
import {View} from 'react-native';

// Components
// import Heading from './components/Heading';
import Boxes from './components/Boxes';
import Counter from './components/Counter';
import List from './components/List';
import ImageContainer from './components/ImageContainer';

// Screens
import DetailsScreen from './screens/DetailsScreen';

// Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import styles from './styles/styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

class HomeScreen extends Component {
  state = {
    query: '',
    count: '0',
  };

  static navigationOptions = ({navigation}) => ({
    tabBarIcon: ({focused, horizontal, tintColor}) => {
      const {routeName} = navigation.state;
      let IconComponent = MaterialCommunityIcons;
      let iconName;
      if (routeName === 'Home') {
        iconName = `city-variant${focused ? '' : '-outline'}`;
      } else if (routeName === 'Settings') {
        iconName = `ios-options`;
      }

      // You can return any component that you like here!
      return <IconComponent name={iconName} size={35} color={tintColor} />;
    },
  });

  setQuery = query => {
    this.setState({query});
  };

  changeNumber = newCount => {
    +newCount / 2 && this.setState({count: newCount});
  };

  changeCount = bool => {
    bool
      ? this.setState({count: `${+this.state.count + 1}`})
      : this.setState({count: `${+this.state.count - 1}`});
  };
  render() {
    return (
      <View style={styles.container}>
        {/* <Heading /> */}
        <Boxes navigation={this.props.navigation} />
        <Counter
          query={this.state.query}
          changeNumber={this.changeNumber}
          setQuery={this.setQuery}
          changeCount={this.changeCount}
          count={this.state.count}
        />
        <List />
        <ImageContainer />
      </View>
    );
  }
}

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
        height: 60,
        backgroundColor: '#333',
      },
      labelStyle: {
        fontSize: 13,
      },
    },
  },
);

export default createAppContainer(TabNavigator);
