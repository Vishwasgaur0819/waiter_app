import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetCategories = () => {
    const [categories, setCategories] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getOffilineDataFromLocal = async () => {
            setLoading(true);
            try {
                const data = await AsyncStorage.getItem('@categories');
                if (data) {
                    const parsedData = JSON.parse(data);
                    setCategories(parsedData);
                }
            } catch (e) {
                console.log('Error in useGetCategories:', e);
            } finally {
                setLoading(false);
            }
        }
        getOffilineDataFromLocal();

    }, [])

    return {categories,loading }
}

export default useGetCategories