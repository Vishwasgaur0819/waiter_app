import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetFloors = () => {
    const [floors, setFloors] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getOffilineDataFromLocal = async () => {
            setLoading(true);
            try {
                const data = await AsyncStorage.getItem('@floors');
                console.log("floors data: " + data);
                if (data) {
                    const parsedData = JSON.parse(data);
                    setFloors(parsedData);
                }
            } catch (e) {
                console.log('Error in useGetFloors:', e);
            } finally {
                setLoading(false);
            }
        }
        getOffilineDataFromLocal();

    }, [])

    return {floors,loading }
}

export default useGetFloors