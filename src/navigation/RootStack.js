import React, { useContext, useEffect } from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Splash from '../screens/Splash';
import Login from '../screens/Login';
import { AuthContext } from '../context/AuthContext';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Button } from 'react-native-paper';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import HomeBottomTabs from './HomeBottomTabs';
import TableView from '../screens/TableView';
import Header from '../components/shared/Header';


const Stack = createNativeStackNavigator();

function RootStack() {
    const { isLoggedIn } = useContext(AuthContext); // Get login state from context

    // useEffect(() => {
    //     if (isLoggedIn) {
    //         // If user is logged in, navigate directly to Home
    //         navigation.replace('Home');
    //     }
    // }, [isLoggedIn]);
    function LogoTitle({ children }) {
        // console.log("jhhjhjhjhj",props)
        return (
            <View style={{ alignItems: 'center' }} >
                <Text>POINT OF SALE</Text>
            </View>)
    }

    return (
        <Stack.Navigator screenOptions={{ headerShown: true }} initialRouteName={'Splash'} >

            <Stack.Screen
                name="Splash"
                component={Splash}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Home"
                component={HomeBottomTabs}
                options={({ navigation }) => ({
                    header: () => <Header title="POINT OF SALE" navigation={navigation} />
                })}
            />
            <Stack.Screen
                name="TableView"
                component={TableView}
                options={({ navigation }) => ({
                    header: () => <Header title="POINT OF SALE" navigation={navigation} />
                })}
            />
        </Stack.Navigator>
    );
}

export default RootStack;
