import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import Header from '../components/shared/Header'
import colors from '../styles/colors'
import AllOrders from './AllOrders'
import OrdersInCart from './OrdersInCart'
import { FontFamily } from '../assets/fonts/FontFamily'
import { FontSize } from '../assets/fonts/Fonts'
import FAIcon from 'react-native-vector-icons/AntDesign';
import { useSelector } from 'react-redux'

const Cart = ({navigation}) => {
  const [tables, setTables] = useState([]);

  const orderedItems = useSelector(state => state.orderedItems?.orderItems);

  // console.log("orderedItems", orderedItems);
  useEffect(() => {
    const groupDataByTable = (data) => {
      const groupedData = {};

      Object.values(data).forEach(item => {
        const { tableId } = item;
        if (!groupedData[tableId]) {
          groupedData[tableId] = [];
        }
        groupedData[tableId].push(item);
      });

      return groupedData;
    };

    const groupedData = groupDataByTable(orderedItems);
    setTables(groupedData);
    console.log("orderedItems ", groupedData);

  }, [orderedItems])

console.log("Object.keys(tables)",tables);

  return (
    <View style={styles.mainView} >
      <Header title='CART' onPress={()=>navigation.navigate('Home')} />
      <View style={styles.container}>
        <ScrollView style={{}} >
          {
            Object.keys(tables)?.map((item) => {
              return (
                <TouchableOpacity onPress={()=>{navigation.navigate('KOT',{data:tables[item]})}} key={item} style={{ flexDirection: 'row', backgroundColor: colors.white, marginTop: 10, paddingVertical: 7, paddingHorizontal: 10, justifyContent: 'space-between', borderWidth: 1, borderColor: colors.border }} >
                  <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                    <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold, fontSize: FontSize.h4 }} >Table No {tables[item]?.[0]?.tableNo||'NA'}</Text>
                    <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold, marginLeft: 20, fontSize: FontSize.h4 }} >03:14 PM</Text>
                  </View>
                  <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', }} >
                    <FAIcon name='eye' color={colors.splash_background} size={25} />
                  </TouchableOpacity>
                </TouchableOpacity>
              )
            })
          }
        </ScrollView>
      </View>

    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    width: '93%',
    alignSelf: 'center',
  },

})