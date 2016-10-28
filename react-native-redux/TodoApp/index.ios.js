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
  ListView,
  TouchableOpacity,
  NavigationExperimental
} from 'react-native';

import EXNavigator from './js/common/EXNavigator';

type State = {
  filter: string,
  dataSource: any,
  navigationState: any,
};

const SHOW_ALL = 'SHOW_ALL';
const SHOW_ACTIVE = 'SHOW_ACTIVE';
const SHOW_COMPLETED = 'SHOW_COMPLETED';

const {
  CardStack: NavigationCardStack,
  StateUtils: NavigationStateUtils,
} = NavigationExperimental;

export default class TodoApp extends Component {
  state: State;
  renderFilter: (text: string, t: number) => ReactElement<{}>;
  _onNavigationChange: (type: string) => void;

  constructor() {
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      filter: SHOW_ALL,
      dataSource: ds.cloneWithRows(['item 1', 'item 2']),
      navigationState: {
        index: 0,
        routes: [{key: 'Initial Scene'}],
      }
    }

    this.renderFilter = (filterText, type) => <TouchableOpacity
      onPress={(type) => {
        switch(type) {
          case 0:
            this.setState({filter: SHOW_ALL});
            break;
          case 1:
            this.setState({filter: SHOW_ACTIVE});
            break;
          case 2:
            this.setState({filter: SHOW_COMPLETED});
            break;
          default:
            this.setState({filter: SHOW_ALL});
            break;
        }
      }}>
      <Text>{filterText}</Text>
    </TouchableOpacity>

    this._onNavigationChange = this._onNavigationChange.bind(this);
    this._exit = this._exit.bind(this);
  }

  _onNavigationChange(type) {
    let {navigationState} = this.state;

    switch(type) {
      case 'push':
        const route = {key: 'Route - ' + Date.now()};
        navigationState = NavigationStateUtils.push(navigationState, route);
        break;
      case 'pop':
        navigationState = NavigationStateUtils.pop(navigationState);
        break;
    }

    if (this.state.navigationState !== navigationState) {
      this.setState({navigationState});
    }
  }

  _exit(): void {
    this.props.onExit && this.props.onExit();
  }

  handleBackAction(): boolean {
    return this._onNavigationChange('pop');
  }

  render() {
    return (
      <View style={{flex: 1}}>
        <EXNavigator
          navigationState={this.state.navigationState}
          onNavigationChange={this._onNavigationChange}
          onExit={this._exit}
         />
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

AppRegistry.registerComponent('TodoApp', () => TodoApp);
