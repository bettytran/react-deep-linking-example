'use strict';

import React from 'react';
import {
  Navigator, // Add Navigator here to import the Navigator component
  StyleSheet,
  Platform,
  Text,
  View,
  ToolbarAndroid,
  Linking
} from 'react-native';

const HomeView = require('../components/HomeView');
const AccountView = require('../components/AccountView');

const App = React.createClass({
  getInitialState() {
    return {
      routes: {
        home: {
          title: 'Home',
          component: HomeView
        },
        account: {
          title: 'My Account',
          component: AccountView
        }
      }
    };
  },
  componentDidMount() {
    if (Platform.OS === 'ios') {
      Linking.addEventListener('url', (e) => {
        const route = `${e.url.replace(/.*?:\/\//g, "")}`
        this._navigator.replace(this.state.routes[route]);
      });
    }
    else {
      const url = Linking.getInitialURL().then(url => {
        if (url) {
          const route = url.replace(/.*?:\/\//g, "");
          this._navigator.replace(this.state.routes[route]);
        }
      });
    }
  },
  render() {
    return (
      <Navigator
        ref={component => this._navigator = component}
        navigationBar={this.getNav()}
        initialRoute={this.state.routes.home}
        renderScene={(route, navigator) => <route.component {...route.props} navigator={navigator} />}
      />
    );
  },
  getNav() {
    if (Platform.OS === 'ios') {
      return (
        <SegmentedControlIOS
          values={[this.state.routes.home.title, this.state.routes.account.title]}
          onValueChange={value => {
            const route = value === 'Home' ? this.state.routes.home : this.state.routes.account;
            this.navigator.replace(route);
          }}
        />
      );
    }
    else {
      return (
        <ToolbarAndroid
          style={styles.toolbar}
          actions={[
            { title: this.state.routes.home.title, show: 'always' },
            { title: this.state.routes.account.title, show: 'always' }
          ]}
          onActionSelected={index => {
            const route = index === 0 ? this.state.routes.home : this.state.routes.account;
            this._navigator.replace(route);
          }}
        />
      );
    }
  }
});

var styles = StyleSheet.create({
  toolbar: {
    height: 56
  }
});

module.exports = App;
