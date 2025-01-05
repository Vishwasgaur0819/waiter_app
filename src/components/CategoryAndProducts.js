import { StyleSheet, Text, View, FlatList } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors';
import Spacer from './shared/Spacer';
import CategoryList from './CategoryList';
import ProductList from './ProductList';

const CategoryAndProducts = () => {
   const [categoryId, setCategoryId] = useState(0);



    return (
        <View style={{ flex: 1, flexDirection: 'row' }} >
            <View style={{ flex: 2, }} >
                <CategoryList onSelect={(i)=>setCategoryId(i.id)} />
            </View>
            <Spacer h={5} />
            <View style={{ flex: 5,top:-5}} >
                <ProductList category={categoryId} />
            </View>

        </View>
    )
}

export default CategoryAndProducts

const styles = StyleSheet.create({})