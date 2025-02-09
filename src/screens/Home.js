import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OrderTypeSelection from '../components/OrderTypeSelection'
import Spacer from '../components/shared/Spacer'
import TablesList from '../components/DineIn'
import CategoryAndProducts from '../components/CategoryAndProducts'
import { getData } from '../api/apiRequest'
import apiRoutes from '../api/apiEndpoints'
import useGetLocalData from '../hooks/useGetLocalData'
import LoadingPage from './LoadingPage'
import colors from '../styles/colors'
import Header from '../components/shared/Header'
import { useDispatch } from 'react-redux'
import { removeAllItems } from '../store/reducers/orderedItemSlice'
import useGetOrderList from '../hooks/useGetOrderList'

const Home = ({ navigation }) => {

  useGetOrderList();
  const [typeId, setTypeId] = useState(null);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(removeAllItems());
    
  // }, [])
  

  // if(loading){
  //   return <LoadingPage/>
  // }


  return (
    <View style={{ backgroundColor: colors.background, flex: 1, }} >
      <Header showBack={false} />
      <View style={styles.container} >
        <Spacer />
        <OrderTypeSelection selectedValue={typeId} setSelectedValue={setTypeId} />
        <Spacer />
        {typeId == 1 && <TablesList />}
        {(typeId == 2||typeId==3) && <View style={{flex:1,justifyContent:'center',alignItems:'center'}} ><Text>Comming soon...</Text></View>}
        {/* {typeId == 2 && <CategoryAndProducts orderType={'takeaway'} />} */}
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    width: '93%',
    alignSelf: 'center',
  }
})