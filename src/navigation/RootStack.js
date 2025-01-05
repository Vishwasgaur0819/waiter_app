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
                options={{
                    headerTitle: (props) => <LogoTitle {...props} title='POINT OF SALE' />,
                    headerRight: () => <TouchableOpacity><FAIcon name='bell-o' size={20} /></TouchableOpacity>,
                    headerLeft: () => <FAIcon name='bars' size={20} />
                }}
            />
            <Stack.Screen
                name="TableView"
                component={TableView}
                options={{
                    headerTitle: (props) => <LogoTitle {...props} title='POINT OF SALE' />,
                    headerRight: () => <TouchableOpacity><FAIcon name='bell-o' size={20} /></TouchableOpacity>,
                    headerLeft: (props) => <TouchableOpacity ><FAIcon name='home' size={25} /></TouchableOpacity>
                }}
            />
        </Stack.Navigator>
    );
}

export default RootStack;
