import React from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import gravatar from 'gravatar-api'

import Constants from '../constants';
import Responsive from '../responsive';

var options = {
  email: 'roger.roelofs@gmail.com',
  parameters: { "size": "50", "rating": "pg" },
  secure: true
}
var avatar = gravatar.imageUrl(options);

const Caret = props => {
  let style = props.direction == 'up' ? {} : styles.caretRotated
  return (<Text style={[style, props.style]}>^</Text>)
}

const SecondaryMenu = () => {
  const onPress = (e) => {
    console.log('hi there')
  }
  return (<Pressable style={responsive.stylePicker('container')} onPress={onPress}>
    <Image source={{uri: avatar}} style={responsive.stylePicker('avatar')} />
    <Text style={responsive.stylePicker('name')}>Roger</Text>
    <Caret direction='up' style={responsive.stylePicker('caret')} />
  </Pressable>);
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatar: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    color: 'black'
  },
  caret: {

  },
  caretRotated: {
    transform: [{ rotate: '180deg' }]
  }
});

const stylesSM = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '20%',
    left: '10%',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: 'white'
  },
  name: {
    display: 'none',
  },
  caret: {
    display: 'none',
  }
});

const stylesMD = StyleSheet.create({
  container: {
    position: 'absolute',
    top: '15%',
    left: '6%',
    width: 75,
    height: 75,
    borderRadius: 37.5,
    backgroundColor: 'white'
  },
  avatar: {
    width: 75,
    height: 75,
    borderRadius: 37.5,
  },
  name: {
    display: 'none',
  },
  caret: {
    display: 'none',
  }
});

const stylesLG = StyleSheet.create({
  container: {
    position: 'absolute',
    right: '5%',
    bottom: '5%',
  }
});


const responsive = new Responsive(
  Constants.breakpoints,
  [stylesSM, stylesMD, stylesLG],
  styles
);

export default SecondaryMenu;
