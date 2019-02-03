/**
 * @flow
 */

import { createStackNavigator, createAppContainer } from 'react-navigation';

import TodoList from './components/TodoList';
import TodoDetail from './components/TodoDetail';

const AppNavigator = createStackNavigator({
  Home: {
    screen: TodoList,
  },
  Detail: {
    screen: TodoDetail,
  },
});

export default createAppContainer(AppNavigator);
