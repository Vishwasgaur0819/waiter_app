
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const useGetProducts = () => {
    const [products, setProducts] = useState(null);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getOffilineDataFromLocal = async () => {
            setLoading(true);
            try {
                const data = await AsyncStorage.getItem('@products');
                if (data) {
                    const parsedData = JSON.parse(data);
                    setProducts(parsedData);
                }
            } catch (e) {
                console.log('Error in useGetProducts:', e);
            } finally {
                setLoading(false);
            }
        }
        getOffilineDataFromLocal();
    }, [])

    return { products, loading }
}

export default useGetProducts