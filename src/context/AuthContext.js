import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(null);

    useFocusEffect(
        React.useCallback(() => {
            const checkAuthentication = async () => {
                // Simulating authentication with local storage
                const token = await AsyncStorage.getItem('token');
                setIsLoggedIn(!!token);
            };
           checkAuthentication()
        }, [])
    )


    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </AuthContext.Provider>
    );
};
