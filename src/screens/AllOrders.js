import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors';
import FAIcon from 'react-native-vector-icons/AntDesign';
import { FontFamily } from '../assets/fonts/FontFamily';
import { Divider } from 'react-native-paper';
import { FontSize } from '../assets/fonts/Fonts';
import Header from '../components/shared/Header';

const AllOrders = () => {
  return (
    <View style={styles.mainView}>
      <Header title='All Orders'/>
      <View style={styles.container} >
        {/* <View style={styles.header} >
          <Text>All Orders</Text>
          <TouchableOpacity><FAIcon name='filter' size={30} /></TouchableOpacity>
        </View> */}
        <ScrollView style={{}} >
          {
            [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]?.map((item) => {
              return (
                <TouchableOpacity key={item} style={{ flexDirection: 'row', backgroundColor: colors.white, marginTop: 10, paddingVertical: 7, paddingHorizontal: 10, justifyContent: 'space-between', borderWidth: 1, borderColor: colors.border }} >
                  <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                    <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold, fontSize: FontSize.h4 }} >Table No 0{item}</Text>
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

export default AllOrders

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.background
  },
  container: {
    flex: 1,
    width: '93%',
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})