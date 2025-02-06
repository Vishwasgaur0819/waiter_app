import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../styles/colors';
import FAIcon from 'react-native-vector-icons/AntDesign';
import { FontFamily } from '../assets/fonts/FontFamily';
import { FontSize } from '../assets/fonts/Fonts';
import Header from '../components/shared/Header';
import { getData } from '../api/apiRequest';
import apiRoutes from '../api/apiEndpoints';
import moment from 'moment';

const AllOrders = () => {

  const [orderList, setOrderList] = useState([])


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getData(apiRoutes.getOrderList);
        if (res?.success) {

          setOrderList(res?.data?.orders)
        } else {
          console.error(`Error in api ${apiRoutes.getOrderList}---->${res.message}`)
        }

      } catch (err) {
        console.error(`Error in All Orders component: ${err.message}`);
      }
    };

    fetchData();
  }, []);

  return (
    <View style={styles.mainView}>
      <Header title='All Orders' />
      <View style={styles.container} >
        {/* <View style={styles.header} >
          <Text>All Orders</Text>
          <TouchableOpacity><FAIcon name='filter' size={30} /></TouchableOpacity>
        </View> */}
        <ScrollView style={{}} >
          {
            orderList?.map((item) => {
              return (
                <TouchableOpacity key={item?.id} style={{ flexDirection: 'row', backgroundColor: colors.white, marginTop: 10, paddingVertical: 7, paddingHorizontal: 10, justifyContent: 'space-between', borderWidth: 1, borderColor: colors.border }} >
                  <View style={{ flexDirection: 'row', alignItems: 'center', }} >
                    <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold, fontSize: FontSize.h4 }} >{item?.table}</Text>
                    <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold, marginLeft: 20, fontSize: FontSize.h4 }} >{moment(item?.created_at, 'YYYY-MM-DD HH:mm:ss').format('hh mm a')
                    }</Text>
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