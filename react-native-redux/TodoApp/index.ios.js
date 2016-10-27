/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ListView
} from 'react-native';

type State = {
  dataSource: any
};

export default class TodoApp extends Component {
  state: State;

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows(['item 1', 'item 2'])
    }
  }
  render() {
    return (
      // <View style={styles.container}>
        <ListView
          style={{flex: 1, marginTop: 20}}
          dataSource={this.state.dataSource}
          renderRow={(data, sID, rID) => {
            return (
              <View>
                <View style={styles.row}>
                  <Text style={styles.text}>
                    {data + ' - '}
                  </Text>
                </View>
              </View>
            );
          }}
          renderSeperator={(sID, rID, highlighted) => <View
            key={`${sID}-${rID}`}
            style={{
              height: 1,
              backgroundColor: highlighted ? 'black' : 'red',
            }}
          />}
        />
      // </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  row: {
    flex: 1,
    // flexDirection: 'row',
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

AppRegistry.registerComponent('TodoApp', () => TodoApp);
