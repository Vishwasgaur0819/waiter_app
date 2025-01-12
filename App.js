import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './src/navigation/RootStack'
import { Provider as PaperProvider } from 'react-native-paper'
import { AuthProvider } from './src/context/AuthContext'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import store from './src/store/store'
import colors from './src/styles/colors'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="#EDEBEC"
          barStyle={'dark-content'}
        />
        <ReduxProvider store={store} >
          <PaperProvider>
            <NavigationContainer>
              <AuthProvider>
                <RootStack />
              </AuthProvider>
            </NavigationContainer>
          </PaperProvider>
        </ReduxProvider>
      </SafeAreaView></SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor:colors.background,
  },
})