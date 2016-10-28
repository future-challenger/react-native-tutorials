/**
 * Copyright 2016 Uncle Charlie
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */

import React from 'react';
import {
  StyleSheet,
  NavigationExperimental
} from 'react-native';


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
        return ();
        break;
      default:

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
