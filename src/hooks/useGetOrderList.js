import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { getData } from '../api/apiRequest';
import apiRoutes from '../api/apiEndpoints';
import { useDispatch } from 'react-redux';
import { addAllOrders } from '../store/reducers/orderListSlice';

const useGetOrderList = () => {
    const dispatch = useDispatch();
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true); 

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                try {
                    const res = await getData(apiRoutes.getOrderList);
                    console.log("res?.data?.orders1",JSON.stringify(res?.data?.orders))
                    if (res?.success) {
                        setOrderList(res?.data?.orders);
                        dispatch(addAllOrders(res?.data?.orders));
                        setLoading(false);
                        // setVisibleOrders(res?.data?.orders.slice(0, pageSize));
                    } else {
                        console.error(`Error in api ${apiRoutes.getOrderList}---->${res.message}`);
                    }
                } catch (err) {
                    console.error(`Error in All Orders component: ${err.message}`);
                } finally {
                    setLoading(false);
                }
            };
            fetchData();
        }, [])
    );

    return { orderList, loading }
}

export default useGetOrderList