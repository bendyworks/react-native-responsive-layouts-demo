import React, { useState } from 'react';
import { StyleSheet, View, Image, LayoutChangeEvent } from 'react-native';

const Header = () => {
  const img = require('../assets/images/b_logo.png');

  return (
    <View style={styles.container}>
      <Image source={img} style={styles.logo} />
    </View>)
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden'
  },
  logo: {
    resizeMode: 'contain',
    height: '100%',
    width: '100%'
  },
});

export default Header;