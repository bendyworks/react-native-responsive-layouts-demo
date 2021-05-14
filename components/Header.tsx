import React, { useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';

const Header = () => {
  const [rotated, setRotated] = useState(false);
  const [width, setWidth] = useState(0)
  const checkLayout = (e:any) => {
    const {height, width} = e.nativeEvent.layout;
    setRotated((height > width));
    setWidth(height > width ? height - 10 : width - 10);
  }
  const img = require('../assets/images/b_logo.png');
  const imgStyle = rotated ? [styles.logo, styles.logoRotated, {width}] : [styles.logo, {width}];
  const containerStyle = rotated ? [styles.container, styles.containerRotated] : styles.container;

return (<View style={containerStyle} onLayout={checkLayout}>
    <Image source={img} style={imgStyle} />
  </View>);
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    overflow: 'hidden'
  },
  containerRotated: {
    justifyContent: 'center',
  },
  logo: {
    padding: '5%',
    resizeMode: 'contain',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  logoRotated: {
    transform: [{ rotate: '-90deg' }]
  }
});

export default Header;