import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './src/navigation/RootStack'
import { Provider } from 'react-native-paper'
import { AuthProvider } from './src/context/AuthContext'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const App = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <StatusBar
          animated={true}
          backgroundColor="white"
          barStyle={'dark-content'}
        />
        <Provider>
          <NavigationContainer>
            <AuthProvider>
              <RootStack />
            </AuthProvider>
          </NavigationContainer>
        </Provider>
      </SafeAreaView></SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ECF0F1',
  },
})