'use strict';

import React, {
  Linking,
  Navigator,
  SegmentedControlIOS,
  StyleSheet,
  ToolbarAndroid,
  Text,
  View
} from 'react-native';

const Colour = require('../components/Colour');

const App = React.createClass({
  propTypes: {
    platform: React.PropTypes.string.isRequired
  },
  routes: {
    '/blue' : {
      name: 'blue'
    },
    '/red' : {
      name: 'red'
    }
  },
  componentDidMount() {
    if (this.props.platform === 'android') {
      var url = Linking.getInitialURL().then(url => {
        if (url) {
          const screen = url.replace(/.*?:\/\//g, "");
          this.navigator.push({name: screen});
        }
      });
    }
    else {
       Linking.addEventListener('url', this.handleDeepLink);
    }
  },
  componentWillUnmount() {
    if (this.props.platform === 'ios') {
      Linking.removeEventListener('url', this.handleDeepLink);
    }
  },
  navigator: {},
  handleDeepLink(event) {
    const screen = `${event.url.replace(/.*?:\/\//g, "")}`;
    this.navigator.push({name: screen});
  },
  setNavigator (navigator) {
    this.navigator = navigator;
  },
  getNav() {
    if (this.props.platform === 'ios') {
      return (
         <SegmentedControlIOS
            values={['Red', 'Blue']}
            onValueChange={this.onActionSelected} />
      );
    }
    else {
      return (
        <ToolbarAndroid
            style={styles.toolbar}
            title="Navigation"
            actions={[{title: 'Red', show: 'always'}, {title: 'Blue', show: 'always'}]}
            onActionSelected={this.onActionSelected} />
      );
    }
  },
  onActionSelected(position) {
    if (position === 0 || position == 'Red') {
      this.navigator.push({name: 'red'});
    }
    else {
       this.navigator.push({name: 'blue'});
    }
  },
  render() {
    return (
      <Navigator
        ref={this.setNavigator}
        navigationBar={this.getNav()}
        initialRoute={{name:'blue'}}
        renderScene={(route, navigator) => {
          return (
            <Colour background={route.name} />
          );
        }}
      />
    );
  }
});

var styles = StyleSheet.create({
  toolbar: {
    height: 56
  }
});

module.exports = App;
