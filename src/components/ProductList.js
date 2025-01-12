import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react';
import MIcon from 'react-native-vector-icons/MaterialIcons'
import OctIcon from 'react-native-vector-icons/Octicons';
import Spacer from './shared/Spacer';

const ProductList = ({ products, category }) => {

    const memoizedFilteredProducts = useMemo(() => {
        return category ? products?.filter(i => i?.category_id == category) : products
    }, [products, category]);

    return (
        <FlatList
            data={memoizedFilteredProducts}
            renderItem={({ item }) => {
                return (
                    <View style={{ ...styles.tableView, backgroundColor: 'white' }} >
                        <View style={styles.tableItem} >
                            <View style={{ width: '85%' }} >
                                {/* <OctIcon name='people' size={25} style={{}} /> */}
                                <Text style={{ fontSize: 11, fontWeight: '600' }} >{item.name}</Text>
                                <Text style={{ fontSize: 8, }} >{item.description || '-'}</Text>
                            </View>
                            <View style={{ height: 17, width: 17, borderColor: item?.productCategory == 'Non-Veg' ? 'red' : 'green', borderWidth: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: 10, height: 10, borderRadius: 20, backgroundColor: item?.productCategory == 'Non-Veg' ? 'red' : 'green' }} />
                            </View>
                        </View>
                        <View style={{ ...styles.tableItem2 }} >
                            <MIcon name='currency-rupee' style={{}} />
                            <Text style={{ fontSize: 10, fontWeight: 'bold' }} >
                                {Number(item?.price)}
                            </Text>
                        </View>
                    </View>
                )
            }}
            contentContainerStyle={{ width: '100%' }}
            numColumns={2}
            keyExtractor={(item) => item.id.toString()}
        // ListFooterComponent={<Spacer h={65} />}
        />
    )
}

export default ProductList

const styles = StyleSheet.create({
    tableView: { flex: 1, backgroundColor: 'white', height: 120, justifyContent: 'space-between', borderRadius: 12, padding: 7, margin: 3, overflow: 'hidden', borderWidth: 1, borderColor: 'lightgray' },
    tableItem: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    tableItem2: { flexDirection: 'row', width: '100%',alignItems: 'flex-end' }
})