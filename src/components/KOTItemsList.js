import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontFamily } from '../assets/fonts/FontFamily'
import { FontSize } from '../assets/fonts/Fonts'
import Spacer from './shared/Spacer'
import { Divider } from 'react-native-paper'

const KOTItemsList = ({data}) => {

    return (
        <View style={{flex:1}}>
            <View style={styles.header} >
                <Text style={styles.headerTxt} >Dish</Text>
                <Text style={styles.headerTxt} >Quantity</Text>
            </View>
            <Spacer />
            <Divider bold />
            <ScrollView>
                {
                    data?.map((item) => {
                        return (
                            <View key={item.id} >
                                <View style={[styles.header, styles.itemsContainer]} >
                                    <View style={{ width: '80%' }}>
                                        <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold }} >{item?.name}</Text>
                                        <Text style={{ fontFamily: FontFamily.TTCommonsRegular,fontSize:FontSize.medium }} >{item?.description||'-'}</Text>
                                    </View>
                                    <Text style={{ fontFamily: FontFamily.TTCommonsRegular }} >{item?.quantity}</Text>
                                </View>
                                {true && <Divider />}
                            </View>
                        )
                    })
                }
            </ScrollView>

        </View>
    )
}

export default KOTItemsList

const styles = StyleSheet.create({
    header: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
    headerTxt: { fontFamily: FontFamily.TTCommonsBold, fontSize: FontSize.h4 },
    itemsContainer: { paddingVertical: 5 }
})