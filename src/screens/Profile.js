import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { Button, TextInput } from 'react-native-paper';
import FAIcon from 'react-native-vector-icons/FontAwesome';
import AsyncStorage from '@react-native-async-storage/async-storage';
import colors from '../styles/colors';
import { FontFamily } from '../assets/fonts/FontFamily';
import { FontSize } from '../assets/fonts/Fonts';
import Spacer from '../components/shared/Spacer';
import Header from '../components/shared/Header';
import { useDispatch } from 'react-redux';
import { removeAllItems } from '../store/reducers/orderedItemSlice';

const Profile = ({ navigation }) => {
    const dispatch = useDispatch();
    const [userData, setUserData] = useState({ name: '', mobile: '', email: '' });


    const handleLogout = async () => {
        dispatch(removeAllItems());
        await AsyncStorage.removeItem('token');
        await AsyncStorage.removeItem('@offlineData');
        navigation.reset({
            index: 0,
            routes: [{ name: 'Login' }]
        })
        // Implement logout logic here
    }

    return (
        <View style={styles.mainView} >
            <Header title='Profile' />
            <Spacer h={20} />
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }} >
                    <View style={{ width: 130, height: 120, backgroundColor: colors.border, justifyContent: 'center', alignItems: 'center' }}>
                        <FAIcon name='user' color={colors.grey} size={90} />
                    </View>
                    <View style={{ flex: 0.9, top: 5 }}>
                        <Text style={styles.name}>Arun Yagik</Text>
                        <Text style={styles.userId}>Emp. Id - 001</Text>
                    </View>
                </View>
                <Spacer h={20} />
                <View style={styles.form} >
                    <TextInput
                        label="Name"
                        value={userData.name}
                        onChangeText={text => setUserData((prev) => ({ ...prev, ['name']: text }))}
                        activeUnderlineColor={colors.splash_background}
                        dense

                    />
                    <Spacer h={20} />
                    <TextInput
                        label="Mobile"
                        value={userData.mobile}
                        onChangeText={text => setUserData((prev) => ({ ...prev, ['mobile']: text }))}
                        keyboardType='numeric'
                        activeUnderlineColor={colors.splash_background}
                        dense
                    />
                    <Spacer h={20} />
                    <TextInput
                        label="Email"
                        value={userData.email}
                        onChangeText={text => setUserData((prev) => ({ ...prev, ['email']: text }))}
                        dense
                        activeUnderlineColor={colors.splash_background}
                    />
                </View>
                <View style={{position:'absolute',width:'100%',bottom:10}} >
                    <Button onPress={handleLogout} buttonColor={colors.splash_background} textColor={colors.white} style={{ width: '50%', }} icon="logout" mode="elevated">
                        LOGOUT
                    </Button>
                    {/* <Spacer h={20} /> */}
                </View>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.background
    },
    container: {
        flex: 1,
        width: '93%',
        alignSelf: 'center',
    },
    name: {
        fontFamily: FontFamily.TTCommonsBold,
        fontSize: FontSize.h2
    },
    userId: {
        fontFamily: FontFamily.TTCommonsMedium,
        fontSize: FontSize.h5
    },
    form: {

    }
})