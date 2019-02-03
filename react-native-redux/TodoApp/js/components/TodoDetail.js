/**
 * React Native Redux sample TodoApp
 * https://github.com/future-challenger/react-native-tutorials/tree/dev/react-native-redux/TodoApp
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TodoDetail extends React.PureComponent {
  state: { completed: boolean };

  constructor(props: any) {
    super(props);

    this.state = {
      completed: this.props.completed,
    };
  }

  handlePress() {
    console.log('todo detail');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.text}</Text>
        <View>
          <TouchableOpacity onPress={this.handlePress}>
            <Text>{this.state.completed ? 'Completed' : 'Not completed'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
