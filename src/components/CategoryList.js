import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
const CategoryList = ({onSelect}) => {
    const [selected, setSelected] = useState(0);
    const categoryData = [
        { "id": 0, "categoryName": "ALL DISHES" },
        { "id": 1, "categoryName": "Appetizers" },
        { "id": 2, "categoryName": "Soups" },
        { "id": 3, "categoryName": "Salads" },
        { "id": 4, "categoryName": "Main Courses" },
        { "id": 5, "categoryName": "Desserts" },
        { "id": 6, "categoryName": "Beverages" },
        { "id": 7, "categoryName": "Breakfast" },
        { "id": 8, "categoryName": "Lunch Specials" },
        { "id": 9, "categoryName": "Dinner Specials" },
        { "id": 10, "categoryName": "Vegan Options" },
        { "id": 11, "categoryName": "Vegetarian" },
        { "id": 12, "categoryName": "Seafood" },
        { "id": 13, "categoryName": "Grill" },
        { "id": 14, "categoryName": "Burgers" },
        { "id": 15, "categoryName": "Pizza" },
        { "id": 16, "categoryName": "Pasta" },
        { "id": 17, "categoryName": "Asian Cuisine" },
        { "id": 18, "categoryName": "Indian Cuisine" },
        { "id": 19, "categoryName": "Mexican Cuisine" },
        { "id": 20, "categoryName": "Mediterranean Cuisine" },
        { "id": 21, "categoryName": "Thai Cuisine" },
        { "id": 22, "categoryName": "Chinese Cuisine" },
        { "id": 23, "categoryName": "Japanese Cuisine" },
        { "id": 24, "categoryName": "Korean Cuisine" },
        { "id": 25, "categoryName": "BBQ" },
        { "id": 26, "categoryName": "Steakhouse" },
        { "id": 27, "categoryName": "Fast Food" },
        { "id": 28, "categoryName": "Ice Cream" },
        { "id": 29, "categoryName": "Smoothies" },
        { "id": 30, "categoryName": "Juices" },
        { "id": 31, "categoryName": "Coffee" },
        { "id": 32, "categoryName": "Tea" },
        { "id": 33, "categoryName": "Bakery" },
        { "id": 34, "categoryName": "Sandwiches" },
        { "id": 35, "categoryName": "Wraps" },
        { "id": 36, "categoryName": "Tacos" },
        { "id": 37, "categoryName": "Sushi" },
        { "id": 38, "categoryName": "Dim Sum" },
        { "id": 39, "categoryName": "Ramen" },
        { "id": 40, "categoryName": "Noodles" },
        { "id": 41, "categoryName": "Dumplings" },
        { "id": 42, "categoryName": "Hot Pot" },
        { "id": 43, "categoryName": "Curry" },
        { "id": 44, "categoryName": "Street Food" },
        { "id": 45, "categoryName": "Finger Foods" },
        { "id": 46, "categoryName": "Brunch" },
        { "id": 47, "categoryName": "Kids Menu" },
        { "id": 48, "categoryName": "Specials" },
        { "id": 49, "categoryName": "Seasonal" },
        { "id": 50, "categoryName": "Gluten-Free" }
    ]
    return (
        <FlatList
            data={categoryData}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity onPress={() => {setSelected(item.id);onSelect(item)}} style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor:item.id == selected?'gray':colors.border, height: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginTop: index == 0 ? 0 : 5 }} >
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }} >
                            <Ionicons name='fast-food-outline' size={25} />
                        </View>
                        <View style={{ flex: 4, backgroundColor: item.id == selected ? colors.border : colors.white, height: '100%', justifyContent: 'center', paddingHorizontal: 2 }} >
                            <Text style={{ fontSize: 10,fontWeight:item.id == selected?'600':'400' }}>{item?.categoryName}</Text>
                        </View>
                    </TouchableOpacity>)
            }}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item) => item?.id.toString()}
        />
    )
}

export default CategoryList

const styles = StyleSheet.create({})