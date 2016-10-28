/**
 * React Native Redux sample TodoApp
 * https://github.com/future-challenger/react-native-tutorials/tree/dev/react-native-redux/TodoApp
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  NavigationExperimental
} from 'react-native';

import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetail';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

export default class EXNavigator extends React.Component {
  _renderScene: (sceneProps: Object) => ?React.Element<*>;

  constructor(props: any, context: any) {
    super(props, context);

    this._onPushRoute = this.props.onNavigationChange.bind(null, 'push');
    this._onPopRoute = this.props.onNavigationChange.bind(null, 'pop');
    this._renderScene = this._renderScene.bind(this);
  }

  _renderScene(sceneProps: Object): ?React.Element<*> {
    const key = sceneProps.scene.route.key;
    switch (key) {
      case 'home':
        return <TodoList />;
      case 'detail':
        return <TodoDetail />;
      default:
        return <TodoList />;
    }
  }

  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._onPopRoute}
        navigationState={this.props.navigationState}
        renderScene={this._renderScene}
        style={styles.navigator}
      />
    );
  }
}

const styles = StyleSheet.create({
  navigator: {
    flex: 1,
  },
});
