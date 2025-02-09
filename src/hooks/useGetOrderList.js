import { View, Text } from 'react-native'
import React, { useCallback, useState } from 'react'
import { useFocusEffect } from '@react-navigation/native';
import { getData } from '../api/apiRequest';
import apiRoutes from '../api/apiEndpoints';
import { useDispatch, useSelector } from 'react-redux';
import { addAllOrders } from '../store/reducers/orderListSlice';

const useGetOrderList = () => {
    const dispatch = useDispatch();
    const {network} = useSelector(state=>state.network);
    const [orderList, setOrderList] = useState([]);
    const [loading, setLoading] = useState(true); 

    useFocusEffect(
        useCallback(() => {
            const fetchData = async () => {
                setLoading(true)
                try {
                    const res = await getData(apiRoutes.getOrderList);
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
            if(network){
                fetchData();
            }else{
                alert('No internet connection');
                setLoading(false);
            }
           
        }, [network])
    );

    return { orderList, loading }
}

export default useGetOrderList