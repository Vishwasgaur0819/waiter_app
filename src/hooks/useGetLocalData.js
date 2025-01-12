import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage';

const useGetLocalData = () => {

    const [floors, setFloors] = useState(null);
    const [categories, setCategories] = useState(null);
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getOffilineDataFromLocal = async () => {
            setLoading(true);
            try {
                const data = await AsyncStorage.getItem('@offlineData');
                if (data) {
                    const parsedData = JSON.parse(data);
                    const floors = parsedData?.data?.halls;
                    const categories = parsedData?.data?.categories;
                    categories.unshift({id:0,name:'All DISHES'});
                    const products = parsedData?.data?.products;
                    setFloors(floors);
                    setCategories(categories);
                    setProducts(products);
                    // console.log('Parsed Offline Data:', parsedData);
                }
            } catch (e) {
                console.log('Error getting offline data:', e);
            }finally{
                setLoading(false);
            }
        }
        getOffilineDataFromLocal();

    }, [])

    return { floors,categories,products,loading }
}

export default useGetLocalData