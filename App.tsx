import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions, SafeAreaView, PixelRatio } from 'react-native';

import Constants from './constants';
import Responsive from './responsive';
import Header from './components/header';
import SecondaryMenu from './components/secondary_menu';
import Menu from './components/menu';

const Content = () => {
  const font_scale = PixelRatio.getFontScale()
  const textStyle = { fontSize: 20 * font_scale }
  return (<View style={responsive.stylePicker('content')}>
    <Text style={textStyle} >Content</Text>
  </View>);
}

export default function App() {
  const width = useWindowDimensions().width;
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={responsive.stylePicker('container')}>
      <StatusBar style="dark" />
      {width < 1000 ? <Header /> : null}
      <Content />
      <Menu />
      <SecondaryMenu />
      </View>
    </SafeAreaView>
  );
}

const stylesSM = StyleSheet.create({
  container: {
    backgroundColor: 'red',
  },
  content: {
    flex: .85,
  },
});

const stylesMD = StyleSheet.create({
  container: {
    backgroundColor: 'green',
    // flexDirection: 'row'
  },
  content: {
    flex: .8,
  },
});

const stylesLG = StyleSheet.create({
  container: {
    backgroundColor: 'yellow',
    flexDirection: 'row-reverse'
  },
  content: {
    flex: .85,
  },
  menu: {
    flex: .15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  header: {
    backgroundColor: 'white',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    backgroundColor: '#ffffff99',
    flex: .7,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menu: {
    backgroundColor: 'white',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  secondaryMenu: {
    backgroundColor: 'transparent',
    flex: .1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 32
  }
});

const responsive = new Responsive(
  Constants.breakpoints,
  [stylesSM, stylesMD, stylesLG],
  styles
);

/*
const stylePicker = (label: string) => {
  const {width} = useWindowDimensions();
  let styling = [];
  if ( styles[label] ) {
    styling.push(styles[label]);
  }
  let i = widthPX.findIndex(w => {
    return ( width <= w );
  });
  if ( i === -1 ) i = styleObj.length - 1;
  const picked = styleObj[i];
  // console.log(width, i, widthPX[i], picked);
  if ( picked && picked[label] ) {
    styling.push(picked[label]);
  }
  return styling;
};
*/
