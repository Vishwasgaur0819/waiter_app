import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import OrderTypeSelection from '../components/OrderTypeSelection'
import Spacer from '../components/shared/Spacer'
import TablesList from '../components/DineIn'
import CategoryAndProducts from '../components/CategoryAndProducts'

const Home = ({ navigation }) => {

  const [typeId, setTypeId] = useState(null);


  return (
    <View style={styles.container} >
      <Spacer />
      <OrderTypeSelection selectedValue={typeId} setSelectedValue={setTypeId} />
      <Spacer />
      {typeId==1 &&<TablesList/>}
      {typeId==2 &&<CategoryAndProducts/>}
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
    alignSelf: 'center'
  }
})