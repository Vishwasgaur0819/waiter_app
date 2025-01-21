import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/shared/Header'
import colors from '../styles/colors'

const Notification = () => {
  return (
    <View style={styles.mainView}>
      <Header title='Notification' />
      <View style={styles.container}></View></View>
  )
}

export default Notification

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    width: '93%',
    alignSelf: 'center',
  },
})