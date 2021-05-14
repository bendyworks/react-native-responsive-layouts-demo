import React from 'react'
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native'

import Responsive from './responsive'

import Header from './components/header'

const breakpoints = [600, 1000, 9999999]
const overrideStyles = [
  StyleSheet.create({
    container: {
      backgroundColor: 'red',
    },
    content: {
      flex: .8,
    },
  }),
  StyleSheet.create({
    container: {
      backgroundColor: 'green',
    },
    content: {
      flex: .85,
    },
  }),
  StyleSheet.create({
    container: {
      backgroundColor: 'yellow',
      flexDirection: 'row-reverse'
    },
    content: {
      flex: .9,
    },
  })
]

const baseStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
  content: {
    alignItems: 'center',
    justifyContent: 'center',
  }
})

const responsive = new Responsive(
  breakpoints,
  overrideStyles,
  baseStyles
)

export default function App() {
  const width = useWindowDimensions().width
  return (
    <View style={responsive.stylePicker('container')}>
      {width < breakpoints[1] ? <Header /> : null}
      <View style={responsive.stylePicker('content')}>
        <Text>Content</Text>
      </View>
    </View>
  )
}