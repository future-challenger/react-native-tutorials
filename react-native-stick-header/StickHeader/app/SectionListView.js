/*
 * Copy Right 2016 Uncle Charlie
 *
 * @flow
*/

import React, { Component } from 'react';
import {
  View,
  Text,
  ListView,
  StyleSheet
} from 'react-native';

export default class SectionListView extends Component {
  state: {dataSource: any};

  constructor(props: any) {
    super(props);

    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });

    this.state = {
      dataSource: ds.cloneWithRowsAndSections({
        'section1': ['1'],
        'section2': ['row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2', 'row 1', 'row 2']
      })
    };

    this._renderRow = this._renderRow.bind(this);
    this._renderSectionHeader = this._renderSectionHeader.bind(this);
  }

  _renderRow(data, sectionID, rowID) {
    let heightStyle = (sectionID === 'section1' && rowID === '0') ?
      {height: 100, backgroundColor: 'white'} :
      {}

    return (
      <View style={[styles.row, heightStyle]}>
        <Text>{data}</Text>
      </View>
    );
  }

  _renderSectionHeader(data, sectionID) {
    if (sectionID === 'section1') {
      return null
    }
    return (
      <View style={styles.section}>
        <View style={{flex: 1}}><Text>category 1</Text></View>
        <View style={{flex: 1}}><Text>category 2</Text></View>
        <View style={{flex: 1}}><Text>category 3</Text></View>
      </View>
    );
  }

  render() {
    return (
      <ListView style={styles.list}
        dataSource={this.state.dataSource}
        renderRow={this._renderRow}
        renderSectionHeader={this._renderSectionHeader}
        />
    );
  }
}

var styles = StyleSheet.create({
  list: {
    marginTop: 64,
  },
  row: {
    height: 50,
    backgroundColor: 'white'
  },
  section: {
    height: 30,
    backgroundColor: 'green',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
});
