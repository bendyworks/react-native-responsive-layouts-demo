import React, { useState } from 'react'
import { View, Text, Image, Pressable, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import Constants from '../constants';
import Responsive from '../responsive';

const img = require('../assets/images/b_logo.png');

type TabProps = { name:string, icon:string, key?:string }

const tabs:TabProps[] = [
  {name: 'Home', icon: 'home'},
  {name: 'Lost', icon: 'map'},
  {name: 'Found', icon: 'person'},
  {name: 'Settings', icon: 'settings'},
]

const Tab = ({icon, name}:TabProps) => {
  return (
    <Pressable style={responsive.stylePicker('tab')}>
      <Ionicons name={icon} size={24} color="black" style={{paddingBottom: 10}} />
      <Text style={responsive.stylePicker('name')} >{name}</Text>
    </Pressable>
  )
}

const Menu = () => {
  const [width, setWidth] = useState(3000)
  const onPress = (e) => {
    console.log('hi there')
  }
  const icons = tabs.map((tab, i) => (<Tab key={i} {...tab} />))
  const logo = (width < 300) ? <Image source={img} style={styles.image} /> : null;
  const checkLayout = (e:any) => {
    const {width: w} = e.nativeEvent.layout;
    if ( w != width ) {
      setWidth(w);
    }
  }


  return (<View style={responsive.stylePicker('container')} onLayout={checkLayout}>
    {logo}
    {icons}
  </View>);
}


const styles = StyleSheet.create({
  container: {
    flex: .15,
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: 'white',
  },
  tab: {
    alignSelf: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 35,
    resizeMode: 'contain',
    backgroundColor: 'black',
    marginBottom: 20
  },
  avatar: {
    resizeMode: 'contain',
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  name: {
    color: 'black',
    fontSize: 14
  },
  caret: {

  },
  caretRotated: {
    transform: [{ rotate: '180deg' }]
  }
});

const stylesSM = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  tab: {
    width: '25%',
  },
});

const stylesLG = StyleSheet.create({
  container: {
    flexDirection: 'column',
  },
  tab: {
    width: '100%',
    paddingVertical: 30
  },
  name: {
    fontSize: 24
  },
});


const responsive = new Responsive(
  Constants.breakpoints,
  [stylesSM, stylesSM, stylesLG],
  styles
);

export default Menu;
