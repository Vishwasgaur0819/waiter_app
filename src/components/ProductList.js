import React, { useCallback, useMemo, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator } from 'react-native';
import { useDispatch } from 'react-redux';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import NumericInput from './shared/NumericInput';
import useGetProducts from '../hooks/useGetProducts';
import { addItemToTableOrder } from '../store/reducers/orderedItemSlice';
import colors from '../styles/colors';
import { FontFamily } from '../assets/fonts/FontFamily';
import { FontSize } from '../assets/fonts/Fonts';

// Constants
const COLORS = {
    veg: 'green',
    nonVeg: 'red',
    lightGray: 'lightgray',
    white: 'white',
};

const ProductCard = React.memo(({ tableId,tableNo, orderedItems, item, handleItemChange }) => {
    const currentQuantity = orderedItems[`${tableId}-${item.id}`]?.quantity || 0;

    return (
        <View style={styles.tableView}>
            <View style={styles.tableItem}>
                <View style={styles.itemDetails}>
                    <Text style={styles.itemName}>{item.name}</Text>
                    <Text style={styles.itemDescription} numberOfLines={2}>
                        {item.description || '-'}
                    </Text>
                </View>
                <View
                    style={[
                        styles.categoryIndicator,
                        { borderColor: item.productCategory === 'Non-Veg' ? COLORS.nonVeg : COLORS.veg },
                    ]}
                >
                    <View
                        style={[
                            styles.categoryInnerIndicator,
                            { backgroundColor: item.productCategory === 'Non-Veg' ? COLORS.nonVeg : COLORS.veg },
                        ]}
                    />
                </View>
            </View>
            <View style={styles.actionsContainer}>
                <View style={styles.priceContainer}>
                    <MIcon name="currency-rupee" style={{fontSize:FontSize.small,top:1}} />
                    <Text style={styles.price}>{Number(item.price)}</Text>
                </View>
                <View style={styles.addButtonWrapper}>
                    {currentQuantity === 0 ? (
                        <TouchableOpacity
                            onPress={() => handleItemChange(item, 1)}
                            style={styles.addButtonContainer}
                        >
                            <Text style={styles.addButtonText}>Add</Text>
                        </TouchableOpacity>
                    ) : (
                        <NumericInput
                            initialValue={currentQuantity}
                            onValueChange={(newValue) => handleItemChange(item, newValue)}
                        />
                    )}
                </View>
            </View>
        </View>
    );
});

const ProductList = ({ orderedItems, category, tableId,floor,tableNo }) => {
    const dispatch = useDispatch();
    const { products } = useGetProducts();
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);

    const memoizedFilteredProducts = useMemo(
        () => (category ? products?.filter((i) => i.category_id === category) : products),
        [products, category]
    );

    const handleItemChange = useCallback((item, quantity) => {
        console.log("item",item)
        dispatch(addItemToTableOrder({ tableId, item: { id: item.id, quantity, name: item.name,description:item?.description,floor,tableNo,tableId,tableNo } }));
    }, [dispatch, tableId]);

    const fetchMoreProducts = useCallback((i) => {
        if (i?.distanceFromEnd == 0) {
            setLoading(false);
            return
        }
        if (!loading) {
            setLoading(true);
            // Simulate API call for more products
            setTimeout(() => {
                setPage((prevPage) => prevPage + 1);
                setLoading(false);
            }, 1000);
        }
    }, [loading]);

    const paginatedProducts = useMemo(
        () => memoizedFilteredProducts?.slice(0, page * 20),
        [memoizedFilteredProducts, page]
    );

    return (
        <FlatList
            data={paginatedProducts}
            renderItem={({ item }) => (
                <ProductCard
                    tableId={tableId}
                    tableNo={tableNo}
                    orderedItems={orderedItems}
                    item={item}
                    handleItemChange={handleItemChange}
                />
            )}
            contentContainerStyle={styles.flatListContent}
            numColumns={2}
            keyExtractor={(item) => item?.id.toString()}
            onEndReached={fetchMoreProducts}
            onEndReachedThreshold={0.5}
            ListFooterComponent={
                loading ? <ActivityIndicator size="small" color={colors.splash_background} /> : null
            }
        />
    );
};

export default ProductList;

const styles = StyleSheet.create({
    tableView: {
        flex: 1,
        backgroundColor: COLORS.white,
        height: 110,
        justifyContent: 'space-between',
        padding: 7,
        margin: 3,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
    },
    tableItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
    },
    itemDetails: { width: '85%' },
    itemName: { fontFamily: FontFamily.TTCommonsMedium, fontSize: FontSize.medium },
    itemDescription: {
        fontSize: FontSize.vsmall,
        fontFamily: FontFamily.TTCommonsMedium,
        color: 'gray',
        lineHeight: 10,
        overflow: 'hidden',
        textAlign: 'left',
    },
    categoryIndicator: {
        height: 17,
        width: 17,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryInnerIndicator: {
        width: 10,
        height: 10,
        borderRadius: 20,
    },
    actionsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    priceContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '40%',
    },
    price: {fontFamily:FontFamily.TTCommonsDemiBold,fontSize:FontSize.small},
    addButtonWrapper: {
        flex: 1,
        height: 25,
    },
    addButtonContainer: {
        flex: 1,
        height: 25,
        borderWidth: 1,
        borderColor: COLORS.lightGray,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.white,
    },
    addButtonText: {
        fontSize: 12,
        fontWeight: 'bold',
    },
    flatListContent: { width: '100%' },
});
