import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/AuthContext';

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
            <View style={{ width: 250, height: 250, backgroundColor: 'white', borderRadius: 200, justifyContent: 'center', alignItems: 'center' }}>
                <Image
                    source={require('../images/food1.png')}
                    style={{ width: 180, height: 180, top: -15 }}
                />
            </View>
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: 'rgb(109 132 109)' },
    txtStyle: { textAlign: 'center', fontSize: 30 }
})