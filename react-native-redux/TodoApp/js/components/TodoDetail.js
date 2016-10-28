import React from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';

export default class TodoDetail extends React.Component {
  constructor(props) {
    suepr(props);

    this.state = {
      completed: this.props.completed
    };
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <Text>{this.props.text}</Text>
        <View>
          <TouchableOpacity onPress={}>
            <Text>{this.state.completed ? 'Completed' : 'Not completed'}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
