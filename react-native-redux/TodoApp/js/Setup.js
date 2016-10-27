/**
 * Copyright 2016 Uncle Charlie
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
 * THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
 * DEALINGS IN THE SOFTWARE
 *
 * @flow
 */

import React from 'react';
import {
  createStore,
  combineReducers
} from 'redux';
import { Provider } from 'react-redux';


import TodoApp from 'TodoApp';
import Reducers from './reducers';
// import configureStore from './store/configureStore';

function configureStore() {

}

function setup(): ReactClass<{}> {

  class Root extends React.Component {
    constructor() {
      suepr();

      this.state = {
        isLoading: false,
        store: configureStore(() => this.setState({isLoading: false})),
      };
    }

    render() {
      return (
        <Provider store={this.state.store}>
          <TodoApp />
        </Provider>
      );
    }
  }

  return Root;
}

export default setup;
