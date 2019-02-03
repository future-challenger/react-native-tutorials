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
  TouchableOpacity,
} from 'react-native';

import AppNavigator from './js/AppNavigator';

export default class TodoApp extends Component {
  constructor() {
    super();
  }

    // this.renderFilter = (filterText, type) => <TouchableOpacity
    //   onPress={(type) => {
    //     switch(type) {
    //       case 0:
    //         this.setState({filter: SHOW_ALL});
    //         break;
    //       case 1:
    //         this.setState({filter: SHOW_ACTIVE});
    //         break;
    //       case 2:
    //         this.setState({filter: SHOW_COMPLETED});
    //         break;
    //       default:
    //         this.setState({filter: SHOW_ALL});
    //         break;
    //     }
    //   }}>
    //   <Text>{filterText}</Text>
    // </TouchableOpacity>

    // this._renderRoute = this._renderRoute.bind(this);
  // }

  // _renderRoute(key) {
  //   switch(key) {
  //     case 'Home':
  //       return <TodoList />;
  //     case 'Detail':
  //       return <TodoDetail />;
  //     default:
  //       return <TodoList />;
  //   }
  // }

  render() {
    return (
      <View style={{flex: 1}}>
        <AppNavigator />
      </View>
    );
  }
}

/*
<ListView
  style={styles.container}
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
  renderSeparator={(sID, rID, highlighted) => <View
    key={`${sID}-${rID}`}
    style={{
      height: 1,
      backgroundColor: 'black',
    }}/>
  }
/>

<View style={{height: 50,
  borderTopWidth: 1,
  borderTopColor: '#303030',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between'}}>
  <View style={{flex: 1, alignItems: 'center'}}>{this.renderFilter('All', 0)}</View>
  <View style={{flex: 1, alignItems: 'center'}}>{this.renderFilter('Active', 1)}</View>
  <View style={{flex: 1, alignItems: 'center'}}>{this.renderFilter('Completed', 2)}</View>
</View>
*/

const todoItems = [
  {
    id: 0,
    text: '',
    completed: false
  },
  {
    id: 1,
    text: '',
    completed: false
  },
  {
    id: 2,
    text: '',
    completed: false
  },
  {
    id: 3,
    text: '',
    completed: false
  },
  {
    id: 4,
    text: '',
    completed: false
  }
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
    marginTop: 20,
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

