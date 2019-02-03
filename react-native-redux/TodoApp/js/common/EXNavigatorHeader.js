/**
 * React Native Redux sample TodoApp
 * https://github.com/future-challenger/react-native-tutorials/tree/dev/react-native-redux/TodoApp
 * @flow
 */

import React from 'react';
import { NavigationExperimental } from 'react-native';
import PropTypes from 'prop-types';

const {
  // CardStack: NavigationCardStack,
  Header: NavigationHeader,
  // PropTypes: NavigationPropTypes,
  // StateUtils: NavigationStateUtils,
} = NavigationExperimental;

type Prop = {
  navigate: PropTypes.func.isRequired,
};

export default class EXNavigatorHeader extends React.Component<Prop, {}> {
  _back: () => void;

  _renderTitle: (props: Object) => React.Element<*>;

  constructor(props: any, context: any) {
    super(props, context);

    this._back = this._back.bind(this);
    this._renderTitle = this._renderTitle.bind(this);
  }

  _renderTitle(props) {
    return (
      <NavigationHeader.Title>{props.scene.route.key}</NavigationHeader.Title>
    );
  }

  _back() {
    const { navigate } = this.props;
    if (navigate) {
      navigate({ type: 'pop' });
    }
  }

  render() {
    return (
      <NavigationHeader
        {...this.props}
        renderTitleComponent={this._renderTitle}
        onNavigateBack={this._back}
      />
    );
  }
}
