import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetTables = (floorId) => {
    const [tables, setTables] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getOffilineDataFromLocal = async (floorId) => {
            setLoading(true);
            try {
                const data = await AsyncStorage.getItem('@tables');
                const parsedData = JSON.parse(data);
                console.log("tables data: " + data);
                if (parsedData) {
                    let filteredData = parsedData?.filter((item)=>item?.hall_id==floorId);
                    setTables(filteredData);
                }
            } catch (e) {
                console.log('Error in useGetTables:', e);
            } finally {
                setLoading(false);
            }
        }
        if(floorId){
            getOffilineDataFromLocal(floorId);
        }

    }, [floorId])

    return {tables,loading }
}

export default useGetTables