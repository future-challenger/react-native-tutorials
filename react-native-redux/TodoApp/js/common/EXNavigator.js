/**
 * React Native Redux sample TodoApp
 * https://github.com/future-challenger/react-native-tutorials/tree/dev/react-native-redux/TodoApp
 * @flow
 */

import React from 'react';
import { View, StyleSheet, NavigationExperimental } from 'react-native';

import TodoList from '../components/TodoList';
import TodoDetail from '../components/TodoDetail';
import EXNavigatorHeader from './EXNavigatorHeader';

const {
  Header: NavigationHeader,
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

type Action = {
  key?: string,
  type?: string,
};

type NavStateType = {
  index: number,
  key: string,
  routes: Array<*>,
};

function createReducer(initialState: NavStateType) {
  return (currentState: NavStateType = initialState, action: Action) => {
    switch (action.type) {
      case 'push':
        return NavigationStateUtils.push(currentState, { key: action.key });
      case 'pop':
        return currentState.index > 0
          ? NavigationStateUtils.pop(currentState)
          : currentState;
      default:
        return currentState;
    }
  };
}

const navigationReducer = createReducer({
  index: 0,
  key: 'APP',
  routes: [{ key: 'Home' }],
});

export default class EXNavigator extends React.Component {
  state: { navigationState: NavStateType };
  _renderScene: (sceneProps: Object) => ?React.Element<*>;
  _handleAction: (action: Action) => boolean;
  _handleBackAction: () => boolean;
  _renderRoute: (key: string) => React.Element<*>;
  _renderHeader: (sceneProps: Object) => React.Element<*>;

  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      navigationState: navigationReducer(undefined, {}),
    };

    this._renderScene = this._renderScene.bind(this);
    this._handleAction = this._handleAction.bind(this);
    this._handleBackAction = this._handleBackAction.bind(this, { type: 'pop' });
    this._renderRoute = this._renderRoute.bind(this);
    this._renderHeader = this._renderHeader.bind(this);
  }

  _handleAction(action) {
    const newState = navigationReducer(this.state.navigationState, action);
    if (newState == this.state.navigationState) {
      return false;
    }

    this.setState({ navigationState: newState });

    return true;
  }

  _handleBackAction(): boolean {
    return this._handleAction({ type: 'pop' });
  }

  _renderRoute(key) {
    const component = this.props.renderRoute(key);
    return React.cloneElement(component, { navigate: this._handleAction });
  }

  _renderScene(sceneProps) {
    const component = this._renderRoute(sceneProps.scene.route.key);
    return <View style={{ flex: 1 }}>{component}</View>;
  }

  _renderHeader(sceneProps) {
    let attrs = Object.assign({}, sceneProps, { navigate: this._handleAction });
    return <EXNavigatorHeader {...attrs} />;
  }

  render() {
    return (
      <NavigationCardStack
        onNavigateBack={this._handleBackAction}
        navigationState={this.state.navigationState}
        renderScene={this._renderScene}
        renderHeader={this._renderHeader}
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
