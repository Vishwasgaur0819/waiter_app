import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useEffect } from 'react';
import OctIcon from 'react-native-vector-icons/Octicons';
import Spacer from './shared/Spacer';
import { useNavigation } from '@react-navigation/native';
import { FontFamily } from '../assets/fonts/FontFamily';
import { FontSize } from '../assets/fonts/Fonts';
import useGetTables from '../hooks/useGetTables';
import colors from '../styles/colors';
import { useSelector } from 'react-redux';
import useGetTableStatus from '../hooks/useGetTableStatus';
import moment from 'moment';
import FAIcon from 'react-native-vector-icons/FontAwesome';

const TableItem = ({ item,index,orderList }) => {
    const navigation = useNavigation();
    // alert(JSON.stringify(item))
    const {tableOrder,loading} = useGetTableStatus({orderList,tableId:item?.id});

    if(loading){
        return <Text>Loading...</Text>
    }

    return (
        <TouchableOpacity onPress={() => navigation.navigate('TableView', {tableInfo:item})} style={{ ...styles.tableView, backgroundColor:tableOrder?.status==1?colors.bookedTable:colors.white }} >
        <View style={styles.tableItem} >
            <View>
                <OctIcon name='people' size={25} style={{}} />
                <Text style={{ fontSize:FontSize.small, top: -5,fontFamily:FontFamily.TTCommonsMedium }} >{item?.chair_limit} People</Text>
            </View>
            <Text style={{ fontSize:FontSize.h4,fontFamily:FontFamily.TTCommonsDemiBold}} >{item?.table_no}</Text>
        </View>
        <View style={{ ...styles.tableItem, alignItems: 'flex-end' }} >
            <Text style={{fontFamily:FontFamily.TTCommonsMedium,fontSize:FontSize.small }} >{tableOrder?.status==1?moment(tableOrder?.created_at, "DD-MM-YYYY hh:mm A").format("hh:mm A"):'__ : __'}</Text>
            <Text style={{ fontFamily:FontFamily.TTCommonsMedium,fontSize:FontSize.medium }} ><FAIcon name='rupee' /> {tableOrder?.status==1?Number(tableOrder?.sub_total):'--'||'NA'}</Text>
        </View>
    </TouchableOpacity>
    )
}

const TablesList = ({ floor }) => {
    const orderList = useSelector(state=>state.orderList.orders);
    const {tables} = useGetTables(floor);

    return (
        <FlatList
            data={tables}
            renderItem={({ item, index }) => {
                return (
                  <TableItem item={item} index={index} orderList={orderList}/>
                )
            }}
            contentContainerStyle={{ width: '100%' }}
            numColumns={3}
            keyExtractor={(item) => item?.id?.toString()}
            ListFooterComponent={<Spacer h={65} />}
        />

    )
}

export default TablesList

const styles = StyleSheet.create({
    tableView: { flex: 1, backgroundColor: 'white', height: 120, justifyContent: 'space-between', padding: 7, margin: 5, overflow: 'hidden', borderWidth: 1, borderColor: 'lightgray' },
    tableItem: { flexDirection: 'row', justifyContent: 'space-between', width: '100%' }
})