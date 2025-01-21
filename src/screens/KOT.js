import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import FloorTableTitleCard from '../components/FloorTableTitleCard'
import { Button } from 'react-native-paper'
import { FontFamily } from '../assets/fonts/FontFamily'
import KOTItemsList from '../components/KOTItemsList'
import Spacer from '../components/shared/Spacer'
import Header from '../components/shared/Header'

const KOT = ({ route,navigation }) => {
    // const { floor, tableNo, title } = route?.params;
    console.log('test data', route.params.data)
    const data = route.params.data;
    const tableNo = data[0]?.tableId;
    const floor = data[0]?.floor;
    return (
        <View style={styles.mainView}>
            <Header title='KOT' />
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    {/* <FloorTableTitleCard title={title} /> */}
                    <FloorTableTitleCard title={'Ground Floor | TN-01'} />

                    <Button onPress={()=>navigation.navigate('TableView',{floor,tableNo})} icon="pencil" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='text' style={{ borderRadius: 0, padding: 0 }}>
                        Edit Dish
                    </Button>
                    <Button icon="note" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='text' style={{ borderRadius: 0, padding: 0 }} onPress={() => console.log('Pressed')}>
                        Note
                    </Button>
                </View>
                <Spacer />
                <KOTItemsList data={data} />
                <Spacer />
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Button labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='elevated' style={{ borderRadius: 0, padding: 0 }} onPress={() => console.log('Pressed')}>
                        Save Order
                    </Button>
                    <Button icon="printer" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='elevated' style={{ borderRadius: 0, padding: 0, marginLeft: 10 }} onPress={() => console.log('Pressed')}>
                        Print KOT
                    </Button>
                </View>
                <Spacer />
            </View>
        </View>
    )
}

export default KOT

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.background
    },
    container: {
        flex: 1,
        width: '93%',
        alignSelf: 'center',
    }
})