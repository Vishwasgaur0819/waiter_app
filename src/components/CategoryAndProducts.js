import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors';
import Spacer from './shared/Spacer';
import CategoryList from './CategoryList';
import ProductList from './ProductList';
import useGetLocalData from '../hooks/useGetLocalData';
import LoadingPage from '../screens/LoadingPage';
import { useSelector } from 'react-redux';

const CategoryAndProducts = ({ orderType, tableId }) => {
    const orderedItems = useSelector(state => state.orderedItems?.orderItems);
   
    const { categories, products, loading } = useGetLocalData();
    const [categoryId, setCategoryId] = useState(0);

    if (loading) {
        return <LoadingPage />
    }
    return (
        <View style={{ flex: 1, flexDirection: 'row' }} >
            <View style={{ flex: 2, }} >
                <CategoryList categories={categories} onSelect={(i) => setCategoryId(i.id)} />
            </View>
            <Spacer h={5} />
            <View style={{ flex: 5, top: -5 }} >
                <ProductList orderedItems={orderedItems} orderType={orderType} tableId={tableId} products={products} category={categoryId} />
            </View>

        </View>
    )
}

export default CategoryAndProducts

const styles = StyleSheet.create({})