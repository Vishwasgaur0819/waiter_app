import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Spacer from '../components/shared/Spacer';
import colors from '../styles/colors';
import CategoryAndProducts from '../components/CategoryAndProducts';
import FloatingButton from '../components/FloatingButton';
import { FontSize } from '../assets/fonts/Fonts';
import { FontFamily } from '../assets/fonts/FontFamily';
import useGetFloors from '../hooks/useGetFloors';
import FloorTableTitleCard from '../components/FloorTableTitleCard';
import Header from '../components/shared/Header';

const TableView = ({ route, navigation }) => {
    const { hall_id: floor, table_no: tableNo, id: tableId } = route.params?.tableInfo;
    const { floors, loading } = useGetFloors();
    const title = loading ? '...' : `${floors?.filter(i => i?.id == floor)?.[0]?.name} | Table - ${tableNo}`;
   
    return (
        <View style={styles.mainView}>
            <Header showBack={false} />
            <View style={styles.container}>
                <FloorTableTitleCard title={title} />
                <Spacer />
                <CategoryAndProducts orderType="table" tableId={tableId} tableNo={tableNo} floor={floor} navigationFrom={route?.params?.navigationFrom}/>
            </View>
            {/* <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('KOT',{floor,tableNo,title})}}>
                <Text style={styles.buttonText}>KOT</Text>
            </TouchableOpacity> */}
        </View>
    );
};

export default TableView;

const styles = StyleSheet.create({
    mainView: {
        flex: 1,
        backgroundColor: colors.background,
    },
    container: {
        flex: 1,
        width: '93%',
        alignSelf: 'center',
    },

    headerSection: {
        flex: 1,
        alignItems: 'center',
    },
    floorText: {
        fontSize: 15,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
    },
    subText: {
        fontSize: 10,
        fontWeight: 'bold',
        color: colors.black,
        textAlign: 'center',
        marginTop: -3,
    },
    button: {
        backgroundColor: colors.splash_background,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60,
        borderRadius: 30, // Ensures a circular shape
        position: 'absolute',
        bottom: 20,
        right: 20,
        elevation: 5, // Adds shadow for Android
        shadowColor: '#000', // Adds shadow for iOS
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 16,
    },
});
