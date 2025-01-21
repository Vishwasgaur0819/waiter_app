import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';
import colors from '../styles/colors';

const Splash = ({ navigation }) => {

    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    console.log(isLoggedIn)

    useEffect(() => {
        const first = setTimeout(() => {
            if (isLoggedIn === true) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
                })
            } else if (isLoggedIn === false) {
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Login' }]
                })
            }
        }, 500)

        return () => {
            clearTimeout(first)
        }
    }, [isLoggedIn])

    return (
        <View style={styles.container} >
            {/* <View style={{ width: 250, height: 250, backgroundColor: 'white', borderRadius: 200, justifyContent: 'center', alignItems: 'center' }}> */}
                <Image
                    source={require('../assets/images/splash_logo.png')}
                    style={{}}
                    resizeMode='contained'
                />
            {/* </View> */}
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor:colors.splash_background },
    txtStyle: { textAlign: 'center', fontSize: 30 }
})