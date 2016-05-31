'use strict';

import React  from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const HomeView = props => (
  <View style={styles.home} />
);

const styles = StyleSheet.create({
  home: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'red'
  }
});

module.exports = HomeView;
