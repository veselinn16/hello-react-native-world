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
import {createStackNavigator} from 'react-navigation-stack';

import styles from './styles/styles';

class HomeScreen extends Component {
  state = {
    query: '',
    count: '0',
  };

  static navigationOptions = {
    title: 'Home Screen',
    // for Styling of navigation bar
    headerStyle: {
      backgroundColor: '#000',
    },
    headerTintColor: '#fff',
    // headerTitleStyle: {
    //   fontWeight: 'bold',
    // },
  };

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

// const HomeScreen = props => {
//   const [query, setQuery] = useState('');
//   const [count, setCount] = useState('0');

//   const changeNumber = newCount => {
//     +newCount / 2 && setCount(newCount);
//   };

//   const changeCount = bool => {
//     bool ? setCount(`${+count + 1}`) : setCount(`${+count - 1}`);
//   };

//   const navigationOptions = {
//     title: 'Home Screen',
//   };

//   return (
//     <View style={styles.container}>
//       <Heading />
//       <Boxes navigation={props.navigation} />
//       <Counter
//         query={query}
//         changeNumber={changeNumber}
//         setQuery={setQuery}
//         changeCount={changeCount}
//         count={count}
//       />
//       <List />
//       <ImageContainer />
//     </View>
//   );
// };

const AppNavigator = createStackNavigator(
  {
    // this object is for the routes
    // Home: {
    //   screen: Home,
    // },
    Home: HomeScreen,
    Details: DetailsScreen,
  },
  {
    // options object
    headerMode: 'none',
    initialRouteName: 'Home',
  },
);

const AppContainer = createAppContainer(AppNavigator);

export default () => <AppContainer />;
