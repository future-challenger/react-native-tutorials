/**
 * React Native Redux sample TodoApp
 * https://github.com/future-challenger/react-native-tutorials/tree/dev/react-native-redux/TodoApp
 * @flow
 */

import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

export default class TodoDetail extends React.Component {
  state: { completed: boolean };

  constructor(props: any) {
    super(props);

    this.state = {
      completed: this.props.completed,
    };
  }
  lintError(){}
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Text>{this.props.text}</Text>
        <View>
          <TouchableOpacity onPress={() => console.log('todo detail ')}>
            <Text>{this.state.completed ? 'Completed' : 'Not completed'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
