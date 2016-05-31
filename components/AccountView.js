'use strict';

import React  from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const AccountView = props => (
  <View style={styles.account} />
);

const styles = StyleSheet.create({
  account: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'blue'
  }
});

module.exports = AccountView;
