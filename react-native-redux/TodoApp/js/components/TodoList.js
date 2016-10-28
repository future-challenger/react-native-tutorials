/**
 * React Native Redux sample TodoApp
 * https://github.com/future-challenger/react-native-tutorials/tree/dev/react-native-redux/TodoApp
 * @flow
 */

import React from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';

type State = {
  dataSource: any
};

export default class TodoList extends React.Component {
  state: State;
  _renderRow: (data: string, sID: number, rID: number) => ReactElement<*>;
  _renderSeparator: (sID: number, rID: number, highlighted: boolean) => ReactElement<*>;

  constructor(props: any) {
    super(props);

    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows()
    };

    this._renderRow = this._renderRow.bind(this);
    this._renderSeparator = this._renderSeparator.bind(this);
  }

  _renderRow(data, sID, rID) {
    return (
      <View>
        <View style={styles.row}>
          <Text style={styles.text}>
            {data + ' - '}
          </Text>
        </View>
      </View>
    );
  }

  _renderSeparator(sID: number, rID: number, highlighted: boolean): ReactElement<*> {
    return (
      <View
        key={`${sID}-${rID}`}
        style={{
          height: 1,
          backgroundColor: 'black',
        }}
      />
    );
  }

  render() {
    return (
      <ListView
        style={styles.container}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSeparator={this._renderSeparator}
      />
    );
  }
}

TodoList.propTypes = {

};

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
