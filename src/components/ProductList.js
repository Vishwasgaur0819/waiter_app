import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import OctIcon from 'react-native-vector-icons/Octicons';
import Spacer from './shared/Spacer';

const ProductList = ({ category }) => {

    const data = [
        { "productId": 1, "productName": "Chicken Biryani", "productPrice": 250, "productCategory": "Non-Veg", "speciality": "Extra Spicy", "categoryId": 1 },
        { "productId": 2, "productName": "Paneer Butter Masala", "productPrice": 200, "productCategory": "Veg", "speciality": "Butter", "categoryId": 2 },
        { "productId": 3, "productName": "Mutton Rogan Josh", "productPrice": 300, "productCategory": "Non-Veg", "speciality": "Rich Gravy", "categoryId": 3 },
        { "productId": 4, "productName": "Vegetable Pulao", "productPrice": 150, "productCategory": "Veg", "speciality": "Mild Spicy", "categoryId": 4 },
        { "productId": 5, "productName": "Chicken Tikka", "productPrice": 180, "productCategory": "Non-Veg", "speciality": "Charcoal Grilled", "categoryId": 5 },
        { "productId": 6, "productName": "Dal Tadka", "productPrice": 120, "productCategory": "Veg", "speciality": "Butter", "categoryId": 6 },
        { "productId": 7, "productName": "Fish Curry", "productPrice": 280, "productCategory": "Non-Veg", "speciality": "Coconut Based", "categoryId": 7 },
        { "productId": 8, "productName": "Palak Paneer", "productPrice": 210, "productCategory": "Veg", "speciality": "Creamy", "categoryId": 8 },
        { "productId": 9, "productName": "Prawns Masala", "productPrice": 350, "productCategory": "Non-Veg", "speciality": "Extra Spicy", "categoryId": 9 },
        { "productId": 10, "productName": "Aloo Gobi", "productPrice": 140, "productCategory": "Veg", "speciality": "Dry Preparation", "categoryId": 10 },
        { "productId": 11, "productName": "Butter Chicken", "productPrice": 260, "productCategory": "Non-Veg", "speciality": "Butter", "categoryId": 1 },
        { "productId": 12, "productName": "Chole Bhature", "productPrice": 160, "productCategory": "Veg", "speciality": "North Indian", "categoryId": 2 },
        { "productId": 13, "productName": "Egg Curry", "productPrice": 150, "productCategory": "Non-Veg", "speciality": "Rich Gravy", "categoryId": 3 },
        { "productId": 14, "productName": "Mix Veg Curry", "productPrice": 170, "productCategory": "Veg", "speciality": "Healthy", "categoryId": 4 },
        { "productId": 15, "productName": "Kadhai Chicken", "productPrice": 240, "productCategory": "Non-Veg", "speciality": "Extra Spicy", "categoryId": 5 },
        { "productId": 16, "productName": "Paneer Tikka", "productPrice": 200, "productCategory": "Veg", "speciality": "Charcoal Grilled", "categoryId": 6 },
        { "productId": 17, "productName": "Lamb Kebab", "productPrice": 350, "productCategory": "Non-Veg", "speciality": "Smoky", "categoryId": 7 },
        { "productId": 18, "productName": "Veg Manchurian", "productPrice": 190, "productCategory": "Veg", "speciality": "Chinese Style", "categoryId": 8 },
        { "productId": 19, "productName": "Tandoori Chicken", "productPrice": 300, "productCategory": "Non-Veg", "speciality": "Tandoor Grilled", "categoryId": 9 },
        { "productId": 20, "productName": "Gobi Masala", "productPrice": 150, "productCategory": "Veg", "speciality": "Dry Spicy", "categoryId": 10 },
        { "productId": 21, "productName": "Chicken 65", "productPrice": 200, "productCategory": "Non-Veg", "speciality": "South Indian Style", "categoryId": 1 },
        { "productId": 22, "productName": "Rajma Chawal", "productPrice": 130, "productCategory": "Veg", "speciality": "Comfort Food", "categoryId": 2 },
        { "productId": 23, "productName": "Malai Kofta", "productPrice": 220, "productCategory": "Veg", "speciality": "Creamy", "categoryId": 3 },
        { "productId": 24, "productName": "Crab Curry", "productPrice": 400, "productCategory": "Non-Veg", "speciality": "Coastal Style", "categoryId": 4 },
        { "productId": 25, "productName": "Matar Paneer", "productPrice": 190, "productCategory": "Veg", "speciality": "Mild Spicy", "categoryId": 5 },
        { "productId": 26, "productName": "Chicken Fried Rice", "productPrice": 180, "productCategory": "Non-Veg", "speciality": "Chinese Style", "categoryId": 6 },
        { "productId": 27, "productName": "Hakka Noodles", "productPrice": 160, "productCategory": "Veg", "speciality": "Chinese Style", "categoryId": 7 },
        { "productId": 28, "productName": "Shrimp Fried Rice", "productPrice": 300, "productCategory": "Non-Veg", "speciality": "Seafood", "categoryId": 8 },
        { "productId": 29, "productName": "Veg Biryani", "productPrice": 170, "productCategory": "Veg", "speciality": "Aromatic", "categoryId": 9 },
        { "productId": 30, "productName": "Chicken Curry", "productPrice": 250, "productCategory": "Non-Veg", "speciality": "Rich Gravy", "categoryId": 10 }
      ]
      

    return (
        <FlatList
            data={category?data?.filter(i => i?.categoryId == category):data}
            renderItem={({ item}) => {
                return (
                    <View style={{ ...styles.tableView, backgroundColor:'white'}} >
                        <View style={styles.tableItem} >
                            <View style={{width:'85%'}} >
                                {/* <OctIcon name='people' size={25} style={{}} /> */}
                                <Text style={{ fontSize: 13,fontWeight:'600' }} >{item.productName}</Text>
                                <Text style={{ fontSize: 8, }} >{item.speciality}</Text>
                            </View>
                            <View style={{height:17,width:17,borderColor:item?.productCategory=='Non-Veg'?'red':'green',borderWidth:1,justifyContent:'center',alignItems:'center'}}>
                                <View style={{width:10,height:10,borderRadius:20,backgroundColor:item?.productCategory=='Non-Veg'?'red':'green'}} />
                            </View>
                        </View>
                        <View style={{ ...styles.tableItem, alignItems: 'flex-end' }} >
                            <Text style={{ fontSize: 11, fontWeight: 'bold' }} >${item?.productPrice}</Text>

                        </View>
                    </View>
                )
            }}
            contentContainerStyle={{ width: '100%' }}
            numColumns={2}
            keyExtractor={(item) => item.productId.toString()}
            // ListFooterComponent={<Spacer h={65} />}
        />
    )
}

export default ProductList

const styles = StyleSheet.create({
    tableView: { flex: 1, backgroundColor: 'white', height: 120, justifyContent: 'space-between', borderRadius: 12, padding: 7, margin: 3, overflow: 'hidden', borderWidth: 1, borderColor: 'lightgray' },
    tableItem: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' }
})