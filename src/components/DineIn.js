import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useMemo, useState } from 'react'
import Dropdown_C from './shared/Dropdown_C'
import { Button } from 'react-native-paper';
import TablesList from './TablesList';
import Spacer from './shared/Spacer';
import useGetLocalData from '../hooks/useGetLocalData';
import LoadingPage from '../screens/LoadingPage';
import useGetFloors from '../hooks/useGetFloors';
import { FontSize } from '../assets/fonts/Fonts';
import { FontFamily } from '../assets/fonts/FontFamily';

const DineIn = () => {
    const {floors,loading} = useGetFloors();
    const [selectedFloor, setSelectedFloor] = useState(floors?.[0]?.id);
    const tableStatuses = [
        { label: 'PRINT TABLE', id: 1, color: '#ffc7c7', borderColor: '#ffc7c7' },
        { label: 'BOOK TABLE', id: 2, color: '#d1d8d1', borderColor: '#d1d8d1' },
        { label: 'OPEN TABLE', id: 3, color: 'white', borderColor: 'gray' }
    ]

    const memoizedFloors = useMemo(() => {
        return floors?.map(({ id, name }) => ({ id, name }));
    }, [floors]);
    useEffect(() => {
        if(!loading){
            setSelectedFloor(floors?.[0]?.id)
        }
    }, [loading])
    
    // console.log("floors are ", floors?.[0]?.id)

    const handleSelectFloor = (option) => {
        setSelectedFloor(option.id);
    };
    if(loading){
        return <LoadingPage/>
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '100%' }} >
                <Dropdown_C
                    options={memoizedFloors}
                    onSelect={handleSelectFloor}
                    selectedValue={memoizedFloors?.filter(i => i?.id == selectedFloor)?.[0]?.name}
                    placeholder={memoizedFloors?.filter(i => i?.id == selectedFloor)?.[0]?.name}
                    buttonHeight={30}
                />
                <View style={styles.viewStyle} >
                    {tableStatuses?.map((i, index) => {
                        return (
                            <View key={i.id} style={{ flexDirection: 'row', alignItems: 'center', marginLeft: index == 0 ? 0 : 8 }} >
                                <View style={{ ...styles.pretxticon, backgroundColor: i.color, borderColor: i.borderColor }} ></View>
                                <Text style={styles.txtStyle} >{i?.label}</Text>
                            </View>
                        )
                    })}

                </View>
            </View>
            <Spacer />
            <TablesList floor={selectedFloor} />

        </View>
    )
}

export default DineIn

const styles = StyleSheet.create({
    txtStyle: {
        fontSize: FontSize.tiny,
        fontFamily:FontFamily.TTCommonsMedium,
        marginLeft: 2
    },
    viewStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignSelf: 'flex-end',
        right:5

    },
    pretxticon: {
        backgroundColor: '#000',
        height: 10, width: 10, borderRadius: 10,
        borderWidth: 1,
    }
})