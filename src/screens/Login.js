import React, { useContext, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { TextInput, Button, Text, HelperText, Dialog, Portal } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { AuthContext } from '../context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isSuccessDialogVisible, setIsSuccessDialogVisible] = useState(false);
    const [isErrorDialogVisible, setIsErrorDialogVisible] = useState(false);
    const [passwordVisible, setPasswordVisible] = useState(false); // State to toggle password visibility

    const navigation = useNavigation();

    const validateEmail = (text) => {
        if (text.length == 0) {
            setEmail(text);
            setError('');
            return
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(text)) {
            setError('Invalid email format');
        } else {
            setError('');
        }
        setEmail(text);
    };

    const handleLogin = async() => {
        if (!email || !password) {
            setError('Both fields are required');
        } else if (!error) {
            if ((email.toLocaleLowerCase() === 'waiter@gmail.com') && password === '12345') {
          
                navigation.reset({
                    index: 0,
                    routes: [{ name: 'Home' }]
               }) // Navigate to the Home screen
                await AsyncStorage.setItem('token','tokentoken');
            } else {
                setIsErrorDialogVisible(true); // Show "User Not Found" popup
            }
        }
    };

    const handleSuccessDialogDismiss = () => {
        setIsSuccessDialogVisible(false);
        navigation.navigate('Home'); // Navigate to the Home screen
    };

    const handleErrorDialogDismiss = () => {
        setIsErrorDialogVisible(false);
    };

    
    return (
        <View style={styles.container}>
          
            <View style={{ flex: 1,justifyContent:'center' }} >
                <Image
                    source={require('../images/food2.png')} // Replace with your logo URL or local image
                    style={styles.logo}
                />
            </View>
            {/* Welcome Message */}
            <View style={{flex:2,width:'100%'}} >
                <View style={styles.welcomeTextView} >
                    <Text variant="headlineMedium" style={styles.welcomeText}>
                        Welcome to the
                    </Text>
                    <Text variant="headlineMedium" style={styles.welcomeTextAppName}>
                        Waitress App !
                    </Text>
                </View>

                {/* Email Input */}
                <TextInput
                    label="Email"
                    value={email}
                    onChangeText={validateEmail}
                    mode="outlined"
                    keyboardType="email-address"
                    error={!!error}
                    style={styles.input}
                    left={<TextInput.Icon icon="email" />}
                />
                {error ? <HelperText type="error" padding='none' style={{ alignSelf: 'flex-start', }} visible>{error}</HelperText> : null}

                {/* Password Input with Eye Icon */}
                <TextInput
                    label="Password"
                    value={password}
                    onChangeText={setPassword}
                    mode="outlined"
                    secureTextEntry={!passwordVisible}
                    style={styles.input}
                    left={<TextInput.Icon icon="lock" />}
                    right={
                        <TextInput.Icon
                            icon={() => (
                                <Icon
                                    name={passwordVisible ? 'eye' : 'eye-off'}
                                    size={24}
                                    color="rgb(109 132 109)"
                                    onPress={() => setPasswordVisible(!passwordVisible)} // Toggle password visibility
                                />
                            )}
                        />
                    }
                />

                {/* Login Button */}
                <Button
                    mode="contained"
                    onPress={handleLogin}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                >
                    Login
                </Button>
                {/* Error Dialog */}
                <Portal>
                    <Dialog visible={isErrorDialogVisible} onDismiss={handleErrorDialogDismiss}>
                        <Dialog.Icon icon="alert-circle" size={40} />
                        <Dialog.Title style={{ textAlign: 'center' }} >User Not Found</Dialog.Title>
                        <Dialog.Content>
                            <Text>The email or password you entered is incorrect. Please try again.</Text>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={handleErrorDialogDismiss}>OK</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
            </View>
        </View>
    );
};

export default Login;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f8f9fa',
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 20,
    },
    welcomeText: {
        textAlign: 'center',
        textAlign: 'left',
        fontSize: 23,
        color: 'rgb(109 132 109)'
    },
    welcomeTextAppName: {
        textAlign: 'center',
        textAlign: 'left',
        fontSize: 35,
        fontWeight: 'bold',
        color: 'rgb(109 132 109)'
    },
    welcomeTextView: {
        marginBottom: 30,
        // backgroundColor:'red',
        width: '100%',
    },

    input: {
        width: '100%',
        marginBottom: 10,
    },
    button: {
        marginTop: 8,
        backgroundColor: 'rgb(109 132 109)',
        width: '100%',
        borderRadius: 5
    },
    buttonContent: {
        paddingVertical: 5,
    },
});
