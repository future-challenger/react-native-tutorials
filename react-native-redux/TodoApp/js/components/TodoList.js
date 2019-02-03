/**
 * React Native Redux sample TodoApp
 * https://github.com/future-challenger/react-native-tutorials/tree/dev/react-native-redux/TodoApp
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {pathOr} from 'ramda';

const data = [{ key: 'Item 1' }, { key: 'Item 2' }];

export default class TodoList extends React.PureComponent {
  handlePress = () => {
    const { navigation } = this.props;
    navigation.push('Detail');
  }

  _renderRow = (data, sID, rID) => {
    const displayText = pathOr('N/A', ['item', 'key'], data);

    return (
      <View>
        <View style={styles.row}>
          <TouchableOpacity style={{ flex: 1 }} onPress={this.handlePress}>
            <Text style={styles.text}>{displayText}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  _renderSeparator = (
    sID: number,
    rID: number,
    highlighted: boolean,
  ) => {
    return (
      <View
        key={`${sID}-${rID}`}
        style={{
          height: 1,
          backgroundColor: '#D5D5D5',
        }}
      />
    );
  }

  render() {
    return (
      <FlatList
        style={styles.container}
        data={data}
        renderItem={this._renderRow}
        ItemSeparatorComponent={this._renderSeparator}
      />
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#F6F6F6',
  },
  thumb: {
    width: 64,
    height: 64,
  },
  text: {
    flex: 1,
  },
});
