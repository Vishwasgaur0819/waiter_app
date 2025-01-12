import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native-paper';
import FAIcon from 'react-native-vector-icons/Ionicons';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Profile = ({navigation}) => {

    const handleLogout = async () => {
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('@offlineData');
        navigation.replace('Login');
        // Implement logout logic here
      }

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }} >
            <FAIcon name='person-outline' size={100} />
            <Text style={{ textAlign: 'center' }} >Profile</Text>
            <Button style={{width:'60%'}} mode="contained" onPress={handleLogout}>
                Logout
            </Button>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({})