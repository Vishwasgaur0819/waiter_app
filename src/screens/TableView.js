import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Spacer from '../components/shared/Spacer'
import colors from '../styles/colors'
import CategoryAndProducts from '../components/CategoryAndProducts'

const TableView = ({ route }) => {
    return (
        <View style={{ flex: 1,width:'93%',alignSelf:'center'}} >
            <Spacer />
            <View style={{flexDirection:'row',width:'100%',height:35,alignItems:'center'}} >
                <View style={{ flex: 1,alignItems:'center' }} >
                    <Text style={{ fontSize: 15, fontWeight: 'bold', color: colors.black,textAlign:'center' }} >{route.params.floor}st</Text>
                    <Text style={{ fontSize: 10, fontWeight: 'bold', color: colors.black,textAlign:'center',top:-3 }} >Floor</Text>
                </View>
                <View style={{ backgroundColor: colors.primary, width: 200, padding: 5, alignSelf: 'center', borderRadius: 10 }} >
                    <Text style={{ textAlign: 'center', fontWeight: '600', fontSize: 15, color: 'white' }}>Table No - {route.params.tableNo}</Text>
                </View>
                <View style={{flex:1}} />
            </View>
            <Spacer />
            <CategoryAndProducts/>

        </View>
    )
}

export default TableView

const styles = StyleSheet.create({})