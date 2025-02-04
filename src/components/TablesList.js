import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import OctIcon from 'react-native-vector-icons/Octicons';
import Spacer from './shared/Spacer';
import { useNavigation } from '@react-navigation/native';
import { FontFamily } from '../assets/fonts/FontFamily';
import { FontSize } from '../assets/fonts/Fonts';
import useGetTables from '../hooks/useGetTables';
import colors from '../styles/colors';

const TablesList = ({ floor }) => {
    const navigation = useNavigation();
    const {tables} = useGetTables(floor);
    // console.log({ floor })
    const data = [
        {
            "tableId": "T1",
            "peopleCount": 4,
            "amount": 1250.50,
            "time": "12:45:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T2",
            "peopleCount": 2,
            "amount": 750.00,
            "time": "13:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T3",
            "peopleCount": 6,
            "amount": 2000.00,
            "time": "13:30:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T4",
            "peopleCount": 3,
            "amount": 950.25,
            "time": "14:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T5",
            "peopleCount": 1,
            "amount": 500.00,
            "time": "14:15:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T6",
            "peopleCount": 5,
            "amount": 1800.00,
            "time": "15:00:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T7",
            "peopleCount": 3,
            "amount": 1200.75,
            "time": "15:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T8",
            "peopleCount": 2,
            "amount": 800.00,
            "time": "16:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T9",
            "peopleCount": 4,
            "amount": 1500.50,
            "time": "16:15:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T10",
            "peopleCount": 2,
            "amount": 750.00,
            "time": "16:45:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T11",
            "peopleCount": 5,
            "amount": 1750.00,
            "time": "17:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T12",
            "peopleCount": 1,
            "amount": 400.00,
            "time": "17:30:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T13",
            "peopleCount": 6,
            "amount": 2200.00,
            "time": "18:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T14",
            "peopleCount": 4,
            "amount": 1300.50,
            "time": "18:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T15",
            "peopleCount": 2,
            "amount": 700.00,
            "time": "19:00:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T16",
            "peopleCount": 3,
            "amount": 1100.25,
            "time": "19:15:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T17",
            "peopleCount": 4,
            "amount": 1400.50,
            "time": "19:45:00",
            "backgroundColor": "#d1d8d1",
            "floor": 3
        },
        {
            "tableId": "T18",
            "peopleCount": 2,
            "amount": 750.00,
            "time": "20:00:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T19",
            "peopleCount": 5,
            "amount": 2000.00,
            "time": "20:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T20",
            "peopleCount": 3,
            "amount": 950.25,
            "time": "21:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T21",
            "peopleCount": 2,
            "amount": 800.00,
            "time": "21:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 3
        },
        {
            "tableId": "T22",
            "peopleCount": 4,
            "amount": 1250.50,
            "time": "22:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T23",
            "peopleCount": 6,
            "amount": 2100.00,
            "time": "22:30:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T24",
            "peopleCount": 3,
            "amount": 1050.75,
            "time": "23:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T25",
            "peopleCount": 5,
            "amount": 1950.00,
            "time": "23:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T26",
            "peopleCount": 2,
            "amount": 650.00,
            "time": "00:00:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T27",
            "peopleCount": 4,
            "amount": 1450.50,
            "time": "00:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T28",
            "peopleCount": 1,
            "amount": 400.00,
            "time": "01:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T29",
            "peopleCount": 3,
            "amount": 1100.25,
            "time": "01:30:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T30",
            "peopleCount": 6,
            "amount": 1800.00,
            "time": "02:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T31",
            "peopleCount": 4,
            "amount": 1250.50,
            "time": "02:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T32",
            "peopleCount": 2,
            "amount": 550.00,
            "time": "03:00:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T33",
            "peopleCount": 4,
            "amount": 1300.50,
            "time": "03:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T34",
            "peopleCount": 5,
            "amount": 1650.00,
            "time": "04:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T35",
            "peopleCount": 1,
            "amount": 450.00,
            "time": "04:30:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T36",
            "peopleCount": 2,
            "amount": 700.00,
            "time": "05:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T37",
            "peopleCount": 5,
            "amount": 1800.00,
            "time": "05:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T38",
            "peopleCount": 3,
            "amount": 1000.00,
            "time": "06:00:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T39",
            "peopleCount": 4,
            "amount": 1500.00,
            "time": "06:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T40",
            "peopleCount": 6,
            "amount": 2300.00,
            "time": "07:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 3
        },
        {
            "tableId": "T41",
            "peopleCount": 4,
            "amount": 1200.50,
            "time": "07:30:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T42",
            "peopleCount": 2,
            "amount": 700.00,
            "time": "08:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T43",
            "peopleCount": 5,
            "amount": 1600.00,
            "time": "08:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 3
        },
        {
            "tableId": "T44",
            "peopleCount": 6,
            "amount": 2100.00,
            "time": "09:00:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T45",
            "peopleCount": 3,
            "amount": 950.25,
            "time": "09:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T46",
            "peopleCount": 2,
            "amount": 800.00,
            "time": "10:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 3
        },
        {
            "tableId": "T47",
            "peopleCount": 4,
            "amount": 1400.50,
            "time": "10:30:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T48",
            "peopleCount": 3,
            "amount": 1000.25,
            "time": "11:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T49",
            "peopleCount": 5,
            "amount": 1750.00,
            "time": "11:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T50",
            "peopleCount": 2,
            "amount": 700.00,
            "time": "12:00:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T51",
            "peopleCount": 4,
            "amount": 1300.00,
            "time": "12:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T52",
            "peopleCount": 3,
            "amount": 950.00,
            "time": "13:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T53",
            "peopleCount": 2,
            "amount": 500.00,
            "time": "13:30:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T54",
            "peopleCount": 4,
            "amount": 1200.25,
            "time": "14:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T55",
            "peopleCount": 3,
            "amount": 1000.25,
            "time": "14:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 1
        },
        {
            "tableId": "T56",
            "peopleCount": 2,
            "amount": 650.00,
            "time": "15:00:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T57",
            "peopleCount": 4,
            "amount": 1300.50,
            "time": "15:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 1
        },
        {
            "tableId": "T58",
            "peopleCount": 5,
            "amount": 1750.00,
            "time": "16:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T59",
            "peopleCount": 6,
            "amount": 2200.00,
            "time": "16:30:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T60",
            "peopleCount": 3,
            "amount": 900.25,
            "time": "17:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 1
        },
        {
            "tableId": "T61",
            "peopleCount": 4,
            "amount": 1300.50,
            "time": "17:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 3
        },
        {
            "tableId": "T62",
            "peopleCount": 2,
            "amount": 700.00,
            "time": "18:00:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T63",
            "peopleCount": 5,
            "amount": 1900.00,
            "time": "18:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 1
        },
        {
            "tableId": "T64",
            "peopleCount": 6,
            "amount": 2400.00,
            "time": "19:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T65",
            "peopleCount": 4,
            "amount": 1300.50,
            "time": "19:30:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T66",
            "peopleCount": 3,
            "amount": 1100.00,
            "time": "20:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 1
        },
        {
            "tableId": "T67",
            "peopleCount": 4,
            "amount": 1200.50,
            "time": "20:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T68",
            "peopleCount": 3,
            "amount": 1000.25,
            "time": "21:00:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T69",
            "peopleCount": 4,
            "amount": 1250.50,
            "time": "21:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T70",
            "peopleCount": 2,
            "amount": 600.00,
            "time": "22:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 1
        },
        {
            "tableId": "T71",
            "peopleCount": 6,
            "amount": 2100.00,
            "time": "22:30:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T72",
            "peopleCount": 3,
            "amount": 1100.50,
            "time": "23:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 1
        },
        {
            "tableId": "T73",
            "peopleCount": 4,
            "amount": 1250.50,
            "time": "23:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T74",
            "peopleCount": 5,
            "amount": 1700.00,
            "time": "00:00:00",
            "backgroundColor": "white",
            "floor": 3
        },
        {
            "tableId": "T75",
            "peopleCount": 6,
            "amount": 2300.00,
            "time": "00:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T76",
            "peopleCount": 4,
            "amount": 1200.50,
            "time": "01:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 3
        },
        {
            "tableId": "T77",
            "peopleCount": 3,
            "amount": 950.25,
            "time": "01:30:00",
            "backgroundColor": "white",
            "floor": 1
        },
        {
            "tableId": "T78",
            "peopleCount": 5,
            "amount": 1900.00,
            "time": "02:00:00",
            "backgroundColor": "#ffc7c7",
            "floor": 2
        },
        {
            "tableId": "T79",
            "peopleCount": 4,
            "amount": 1300.50,
            "time": "02:30:00",
            "backgroundColor": "#d1d8d1",
            "floor": 3
        },
        {
            "tableId": "T80",
            "peopleCount": 3,
            "amount": 1000.00,
            "time": "03:00:00",
            "backgroundColor": "white",
            "floor": 2
        },
        {
            "tableId": "T81",
            "peopleCount": 4,
            "amount": 1500.75,
            "time": "03:30:00",
            "backgroundColor": "#ffc7c7",
            "floor": 1
        },
        {
            "tableId": "T82",
            "peopleCount": 2,
            "amount": 750.00,
            "time": "04:00:00",
            "backgroundColor": "#d1d8d1",
            "floor": 2
        },
        {
            "tableId": "T83",
            "peopleCount": 5,
            "amount": 1700.00,
            "time": "04:30:00",
            "backgroundColor": "white",
            "floor": 1
        },
    ]

    return (
        <FlatList
            data={tables}
            renderItem={({ item: i, index }) => {
                return (
                    <TouchableOpacity onPress={() => navigation.navigate('TableView', {tableInfo:i})} style={{ ...styles.tableView, backgroundColor:colors.white }} >
                        <View style={styles.tableItem} >
                            <View>
                                <OctIcon name='people' size={25} style={{}} />
                                <Text style={{ fontSize:FontSize.small, top: -5,fontFamily:FontFamily.TTCommonsMedium }} >{i?.chair_limit} People</Text>
                            </View>
                            <Text style={{ fontSize:FontSize.h4,fontFamily:FontFamily.TTCommonsDemiBold}} >{i?.table_no}</Text>
                        </View>
                        <View style={{ ...styles.tableItem, alignItems: 'flex-end' }} >
                            <Text style={{fontFamily:FontFamily.TTCommonsMedium,fontSize:FontSize.small }} >{i?.time||'_ : _'}</Text>
                            <Text style={{ fontFamily:FontFamily.TTCommonsMedium,fontSize:FontSize.medium }} >${i?.amount||'NA'}</Text>
                        </View>
                    </TouchableOpacity>
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