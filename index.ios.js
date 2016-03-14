/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

const App = require('./components/App');

var deepLinkingExample = React.createClass({
  render: function() {
    return (
      <App platform="ios" />
    );
  }
});

AppRegistry.registerComponent('deepLinkingExample', () => deepLinkingExample);
