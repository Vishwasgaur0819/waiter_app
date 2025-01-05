import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, SegmentedButtons } from 'react-native-paper'

const OrderTypeSelection = ({selectedValue,setSelectedValue}) => {
    const [data, setData] = useState([{ value: 1, label: 'DINE IN' }, { value: 2, label: 'TAKE AWAY' }, { value: 3, label: 'QR ORDER' }])

    useEffect(() => {
      setSelectedValue(data[0]?.value)
    }, [])
    

    return (
        <SegmentedButtons
            value={selectedValue}
            onValueChange={setSelectedValue}
            buttons={data}
            style={styles.segmentStyle}
            // checkedColor={'rgb(109 132 109)'}
        />

    )
}

export default OrderTypeSelection

const styles = StyleSheet.create({
    segmentStyle:{}
})