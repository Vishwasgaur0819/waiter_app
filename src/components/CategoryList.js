import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import colors from '../styles/colors'
import Ionicons from 'react-native-vector-icons/Ionicons';
const CategoryList = ({ categories, onSelect }) => {
    const [selected, setSelected] = useState(0);
 
    return (
        <FlatList
            data={categories}
            renderItem={({ item, index }) => {
                return (
                    <TouchableOpacity onPress={() => { setSelected(item.id); onSelect(item) }} style={{ backgroundColor: 'white', flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: item.id == selected ? 'gray' : colors.border, height: 50, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, marginTop: index == 0 ? 0 : 5 }} >
                        <View style={{ flex: 2, justifyContent: 'center', alignItems: 'center', }} >
                            <Ionicons name='fast-food-outline' size={25} />
                        </View>
                        <View style={{ flex: 4, backgroundColor: item.id == selected ? colors.border : colors.white, height: '100%', justifyContent: 'center', paddingHorizontal: 2 }} >
                            <Text style={{ fontSize: 10, fontWeight: item.id == selected ? '600' : '400' }}>{item?.name}</Text>
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