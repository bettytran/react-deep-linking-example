'use strict';

import React, {
  StyleSheet,
  Text,
  View
} from 'react-native';

const Colour = React.createClass({
  propTypes: {
    background: React.PropTypes.string.isRequired
  },
  render: function() {
    return (
      <View style={styles[this.props.background]} />
    );
  }
});

let styles = StyleSheet.create({
  red: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red'
  },
  blue: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue'
  }
});

module.exports = Colour;
