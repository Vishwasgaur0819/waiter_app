import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors';
import Spacer from './shared/Spacer';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import useGetLocalData from '../hooks/useGetLocalData';
import LoadingPage from '../screens/LoadingPage';
import { useSelector } from 'react-redux';
import useGetCategories from '../hooks/useGetCategories';

const CategoryAndProducts = ({ orderType, tableId }) => {
    const orderedItems = useSelector(state => state.orderedItems?.orderItems);
    const [categoryId, setCategoryId] = useState(0);
   
    // const { categories, products, loading } = useGetLocalData();

    return (
        <View style={{ flex: 1, flexDirection: 'row',}} >
            <View style={{ flex: 2, }} >
                <CategoryList onSelect={(i) => setCategoryId(i.id)} />
            </View>
            <Spacer h={5} />
            <View style={{ flex: 5,}} >
                <ProductList orderedItems={orderedItems} orderType={orderType} tableId={tableId} category={categoryId} />
            </View>

        </View>
    )
}

export default CategoryAndProducts

const styles = StyleSheet.create({})