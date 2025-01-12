import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import Spacer from './shared/Spacer';
import NumericInput from './shared/NumericInput';
import { addItemToTableOrder } from '../store/reducers/orderedItemSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductCard = ({ tableId, orderedItems, item, handleItemChange }) => {

    const currentQuantity = orderedItems[`${tableId}-${item.id}`]?.quantity || 0;

    return (
        <View style={{ ...styles.tableView, backgroundColor: 'white' }} >
            <View style={styles.tableItem} >
                <View style={{ width: '85%' }} >
                    <Text style={{ fontSize: 11, fontWeight: '600' }} >{item.name}</Text>
                    <Text style={{ fontSize: 8, }} >{item.description || '-'}</Text>
                </View>
                <View style={{ height: 17, width: 17, borderColor: item?.productCategory == 'Non-Veg' ? 'red' : 'green', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <View style={{ width: 10, height: 10, borderRadius: 20, backgroundColor: item?.productCategory == 'Non-Veg' ? 'red' : 'green' }} />
                </View>
            </View>
            <View style={{ ...styles.tableItem, alignItems: 'center', }} >
                <View style={{ ...styles.tableItem2, width: '40%' }} >
                    <MIcon name='currency-rupee' style={{}} />
                    <Text style={{ fontSize: 10, fontWeight: 'bold' }} >
                        {Number(item?.price)}
                    </Text>
                </View>
                {currentQuantity === 0 ? (
                    <TouchableOpacity
                        onPress={() => { handleItemChange(item, 1) }}
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'center',
                            // width: '100%',
                            flex: 1,
                            height: 25,
                            borderWidth: 1,
                            borderColor: 'lightgray',
                            borderRadius: 5,
                            overflow: 'hidden',
                            backgroundColor: 'white',
                        }}>

                        <Text
                            style={styles.addButton}
                        >
                            Add
                        </Text>
                    </TouchableOpacity>
                ) : (
                    <NumericInput
                        initialValue={currentQuantity}
                        onValueChange={(newValue) => handleItemChange(item, newValue)}
                    />
                )}
            </View>
        </View>
    )
}

const ProductList = ({orderedItems, orderType, products, category, tableId }) => {

    const dispatch = useDispatch();

    // console.log("orderData orderedItems", orderedItems)
    const memoizedFilteredProducts = useMemo(() => {
        return category ? products?.filter(i => i?.category_id == category) : products
    }, [products, category]);

    const handleItemChange = (item, quantity) => {
        dispatch(addItemToTableOrder({ tableId, item, quantity }));
    };

    return (
        <FlatList
            data={memoizedFilteredProducts}
            renderItem={({ item }) => {
                return (
                    <ProductCard tableId={tableId} orderedItems={orderedItems} item={item} handleItemChange={handleItemChange} />
                );
            }}
            contentContainerStyle={{ width: '100%' }}
            numColumns={2}
            keyExtractor={(item) => item?.id.toString()}
        />
    )
}

export default ProductList;

const styles = StyleSheet.create({
    tableView: { flex: 1, backgroundColor: 'white', height: 110, justifyContent: 'space-between', borderRadius: 12, padding: 7, margin: 3, overflow: 'hidden', borderWidth: 1, borderColor: 'lightgray' },
    tableItem: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    tableItem2: { flexDirection: 'row', alignItems: 'flex-end' },
    addButton: {
        fontSize: 12,
        fontWeight: 'bold',
        // color: 'blue',
        // textDecorationLine: 'underline',
    }
});
