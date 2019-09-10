// Screens
import DetailsScreen from './screens/DetailsScreen';
import UsersScreen from './screens/UsersScreen';
import TodosScreen from './screens/TodosScreen';
import PostsScreen from './screens/PostsScreen';

// Navigation
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

const TabNavigator = createBottomTabNavigator(
  {
    Users: UsersScreen,
    Details: DetailsScreen,
    Todos: TodosScreen,
    Posts: PostsScreen,
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
