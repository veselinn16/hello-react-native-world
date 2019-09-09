// Screens
import DetailsScreen from './screens/DetailsScreen';
import UsersScreen from './screens/UsersScreen';

// Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator(
  {
    // Home: DetailsScreen,
    // Details: HomeScreen,
    Users: UsersScreen,
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
