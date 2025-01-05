import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
const Tab = createBottomTabNavigator();
const HomeBottomTabs = () => {
  return (
    <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconName;
                    if (route.name === 'Dashboard') {
                        iconName = 'home';
                    } else if (route.name === 'Orders') {
                        iconName = 'list';
                    } else if (route.name === 'Profile') {
                        iconName = 'user';
                    }
                    return <FAIcon name={iconName} size={size} color={color} />;
                },
                headerShown: false,
                tabBarActiveTintColor: 'tomato',
                tabBarInactiveTintColor: 'gray',
            })}
            
        >
            <Tab.Screen name="Dashboard" component={Home} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
  )
}

export default HomeBottomTabs

const styles = StyleSheet.create({})