import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../components/shared/Header'
import colors from '../styles/colors';
import FAIcon from 'react-native-vector-icons/FontAwesome'

const Notification = () => {
  return (
    <View style={styles.mainView}>
      <Header title='Notification' />
      <View style={styles.container}>
        <FAIcon name='bell-slash-o' color={colors.border} size={150} />
        
      </View>
    </View>
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
    justifyContent:'center',
    alignItems:'center'
  },
})