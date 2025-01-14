import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../styles/colors'
import FloorTableTitleCard from '../components/FloorTableTitleCard'

const KOT = ({ route }) => {
    const { floor, tableNo, title } = route.params;
    return (
        <View style={styles.mainView}>
            <View style={styles.container} >
                <FloorTableTitleCard title={title} />
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
    container:{
        flex: 1,
        width: '93%',
        alignSelf: 'center'
    }
})