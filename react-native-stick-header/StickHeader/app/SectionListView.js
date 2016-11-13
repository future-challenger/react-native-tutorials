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
} from 'react-native';ß

export default class SectionListView extends Component {
  constructor() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    });
  }

  render() {
    return (
      <ListView />
    );
  }
}
