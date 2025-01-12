import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Notification from '../screens/Notification';
import AllOrders from '../screens/AllOrders';
import Cart from '../screens/Cart';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';
const Tab = createBottomTabNavigator();

const CartBadge=()=>{


    
    return(
        <View style={{
            width: 18, height: 18,
            borderRadius: 40, justifyContent: 'center',
            alignItems: 'center', position: 'absolute',
            right:-12,
            top:-10,
            backgroundColor:'red'
        }} >
            <Text style={{fontSize:8,fontWeight:'bold',color:'white'}} >{0}</Text>
        </View>
    )
}
const HomeBottomTabs = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
                        iconName = 'home';
                    } else if (route.name === 'AllOrders') {
                        iconName = 'list';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    } else if (route.name === 'Notification') {
                        iconName = 'bell'
                    } else if (route.name === 'Cart') {
                        iconName = 'shopping-bag'
                    }
                    return (
                        <View>
                            {iconName == 'shopping-bag' && <CartBadge/>}
                            <FAIcon name={iconName} size={size - 3} color={color} />
                        </View>
                    )

                },
                headerShown: false,
                tabBarActiveTintColor: colors.splash_background,
                tabBarInactiveTintColor: 'gray',
            })}
            initialRouteName='Dashboard'

        >
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Notification" component={Notification} />
            <Tab.Screen name="Dashboard" component={Home} />
            <Tab.Screen name="AllOrders" options={{ title: 'All Orders' }} component={AllOrders} />
            <Tab.Screen name="Cart" component={Cart} />
        </Tab.Navigator>
    )
}

export default HomeBottomTabs

const styles = StyleSheet.create({})