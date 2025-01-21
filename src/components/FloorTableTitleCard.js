import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import { FontFamily } from '../assets/fonts/FontFamily'
import { FontSize } from '../assets/fonts/Fonts'

const FloorTableTitleCard = ({title}) => {
    return (
        <View style={styles.header}>
            <View style={styles.tableInfo}>
                <Text style={styles.tableText}>{title}</Text>
            </View>
            {/* <View style={styles.headerSection} /> */}
        </View>
    )
}

export default FloorTableTitleCard

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        // width: '100%',
        height: 35,
        alignItems: 'center',
        // justifyContent:'center'

    },
    tableInfo: {
        backgroundColor:colors.splash_background,
        // width: 300,
        paddingHorizontal: 10,
        paddingVertical:5,
        // borderRadius: 10,
    },
    tableText: {
        textAlign: 'center',
        fontFamily:FontFamily.TTCommonsMedium,
        fontSize: FontSize.h5,
        color: 'white',
    },
})