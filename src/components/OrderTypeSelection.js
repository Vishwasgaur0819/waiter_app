import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, SegmentedButtons } from 'react-native-paper'
import colors from '../styles/colors'
import { FontFamily } from '../assets/fonts/FontFamily'

const OrderTypeSelection = ({selectedValue,setSelectedValue}) => {
    const [data, setData] = useState([{ value: 1, label: 'DINE IN' }, { value: 2, label: 'TAKE AWAY' }, { value: 3, label: 'QR ORDER' }])

    useEffect(() => {
      setSelectedValue(data[0]?.value);
    }, [])
    

    return (
        <SegmentedButtons
            value={selectedValue}
            onValueChange={setSelectedValue}
            buttons={data}
        />
    )
}

export default OrderTypeSelection

const styles = StyleSheet.create({
    segmentStyle:{
      
    }
})