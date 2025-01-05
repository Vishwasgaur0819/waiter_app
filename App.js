import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './src/navigation/RootStack'
import { Provider } from 'react-native-paper'
import { AuthProvider } from './src/context/AuthContext'

const App = () => {
  return (
    <Provider>
      <NavigationContainer>
        <AuthProvider>
          <RootStack />
        </AuthProvider>
      </NavigationContainer>
    </Provider>
  )
}

export default App

const styles = StyleSheet.create({})