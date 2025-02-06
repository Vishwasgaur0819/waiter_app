import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../styles/colors'
import FloorTableTitleCard from '../components/FloorTableTitleCard'
import { Button } from 'react-native-paper'
import { FontFamily } from '../assets/fonts/FontFamily'
import KOTItemsList from '../components/KOTItemsList'
import Spacer from '../components/shared/Spacer'
import Header from '../components/shared/Header'
import { useSelector } from 'react-redux'
import { postData } from '../api/apiRequest'
import apiRoutes from '../api/apiEndpoints'

const KOT = ({ route, navigation }) => {
    const orderedItems = useSelector(state => state.orderedItems?.orderItems);
    const data = route.params.data;
    const tableId = data[0]?.tableId;
    const tableNo = data[0]?.tableNo;
    const floor = data[0]?.floor;
    const [filterData, setFilterData] = useState([])




    useEffect(() => {
        const groupDataByTable = (data) => {
            const groupedData = {};

            Object.values(data).forEach(item => {
                const { tableId } = item;

                if (!groupedData[tableId]) {
                    groupedData[tableId] = [];
                }
                groupedData[tableId].push(item);
            });

            return groupedData;
        };

        const groupedData = groupDataByTable(orderedItems);

        const filteredData = groupedData[tableId] || [];
        setFilterData(filteredData)

    }, [orderedItems])


    // handle save order //
    const handleSaveOrder = async () => {
        try {
            if (true) {
                console.log('filterData', filterData);

                const transformedData = {
                    orders: [
                        {
                            sub_total: 150.00,
                            discount_percentage: 0,
                            order_number: "null",
                            discount: 0,
                            service_charge: 0,
                            grand_total: 0,
                            paid: 0,
                            created_user_id: 3,
                            updated_user_id: 4,
                            business_id: 3,
                            user_id: 2,
                            table_id: filterData[0]?.tableId,
                            table: filterData[0]?.tableNo.toString(),
                            order_type: "Takeaway",
                            payment_method: "Cash",
                            status: "null",
                            note: "null",
                            items: filterData.map(item => ({
                                product_id: item.id,
                                cart_id: "sdffsdf17",
                                product_name: item.name,
                                description: "null",
                                quantity: item.quantity,
                                unit_cost: 5.00,
                                business_id: 4, // Example logic
                                user_id: 4,
                                sub_total: 4
                            }))
                        }
                    ]
                };

                console.log('Transformed Data', JSON.stringify(transformedData, null, 2));

                const response = await postData(apiRoutes.postSaveOrder, transformedData);
                console.log('response', response)
            } else {
                alert('Network is unable.');
            }
        } catch (err) {
            console.error('Error in handleSaveOrder', err);
        }
    };


    return (
        <View style={styles.mainView}>
            <Header title='KOT' onPress={() => navigation.navigate('Home')} />
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    {/* <FloorTableTitleCard title={title} /> */}
                    <FloorTableTitleCard title={'Ground Floor | TN-01'} />

                    <Button onPress={() => navigation.navigate('TableView', { tableInfo: { hall_id: floor, table_no: tableNo, id: tableId } })} icon="pencil" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='text' style={{ borderRadius: 0, padding: 0 }}>
                        Edit Dish
                    </Button>
                    {/* <Button icon="note" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='text' style={{ borderRadius: 0, padding: 0 }} onPress={() => console.log('Pressed')}>
                        Note
                    </Button> */}
                </View>
                <Spacer />
                <KOTItemsList data={filterData} />
                <Spacer />
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Button labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='elevated' style={{ borderRadius: 0, padding: 0 }} onPress={() => handleSaveOrder(filterData)}>
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