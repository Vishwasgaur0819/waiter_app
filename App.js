import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import RootStack from './src/navigation/RootStack'
import { Provider as PaperProvider } from 'react-native-paper'
import { AuthProvider } from './src/context/AuthContext'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import { Provider as ReduxProvider } from 'react-redux'
import colors from './src/styles/colors'
import KOT from './src/screens/KOT'
import AllOrders from './src/screens/AllOrders'
import Profile from './src/screens/Profile'
import { store, persistor } from './src/store/store'
import { PersistGate } from 'redux-persist/integration/react'

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
          <PersistGate loading={null} persistor={persistor}>
            <PaperProvider>
              <NavigationContainer>
                <AuthProvider>
                  <RootStack />
                </AuthProvider>
              </NavigationContainer>
            </PaperProvider>
          </PersistGate>
        </ReduxProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
})