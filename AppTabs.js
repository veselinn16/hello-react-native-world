// Screens
import DetailsScreen from './screens/DetailsScreen';
import UsersScreen from './screens/UsersScreen';
import TodosScreen from './screens/TodosScreen';
import PostsScreen from './screens/PostsScreen';

import React from 'react';
import store from './store';
import {Provider} from 'react-redux';

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
        backgroundColor: '#333',
      },
      labelStyle: {
        fontSize: 11,
      },
    },
  },
);

const Navigation = createAppContainer(TabNavigator);

const AppContainer = () => (
  <Provider store={store}>
    <Navigation />
  </Provider>
);

export default AppContainer;
