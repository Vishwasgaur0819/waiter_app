import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import colors from '../styles/colors'
import FloorTableTitleCard from '../components/FloorTableTitleCard'
import { Button, Dialog, Divider, Portal } from 'react-native-paper'
import { FontFamily } from '../assets/fonts/FontFamily'
import KOTItemsList from '../components/KOTItemsList'
import Spacer from '../components/shared/Spacer'
import Header from '../components/shared/Header'
import { useDispatch, useSelector } from 'react-redux'
import { postData } from '../api/apiRequest'
import apiRoutes from '../api/apiEndpoints'
import useGetFloors from '../hooks/useGetFloors'
import { removeItemsByTableId } from '../store/reducers/orderedItemSlice'
import { FontSize } from '../assets/fonts/Fonts'
import FAIcon from 'react-native-vector-icons/FontAwesome';

const KOT = ({ route, navigation }) => {

    const dispatch = useDispatch()
    const orderedItems = useSelector(state => state.orderedItems?.orderItems);
    const { network } = useSelector(state => state.network);
    const data = route.params.data || route?.params.orderItem
    const { floors, loading } = useGetFloors();

    const [filterData, setFilterData] = useState([])
    const [floorName, setFloorName] = useState("");
    const [floorId, setFloorId] = useState("");
    const [showSuccessDialog, setShowSuccessDialog] = useState(false);
    const [note, setNote] = useState(false);


    const tableId = data[0]?.tableId || data?.table_id;
    const tableNo = data[0]?.tableNo || data?.table.split('no:')[1]?.trim();
    const floor = data[0]?.floor || floorId;

    useEffect(() => {
        if (!loading && floors && filterData.length > 0) {
            const matchedFloor = floors.find(floor => route?.params?.navigateFrom == 'AllOrders' ? floor?.name : floor?.id === filterData[0]?.floor);
            setFloorName(matchedFloor ? matchedFloor.name : "Unknown Floor");
            setFloorId(matchedFloor ? matchedFloor.id : 0)
        }
    }, [floors, filterData, loading]);

    console.log({ tableId, tableNo, floor })
    const AllOrdersData = (orderData) => {
        try {
            const floor = orderData?.table.split('Table')[0]?.trim();


            // Convert data to required format
            const transformedData = orderData.items.map(item => ({
                business_id: orderData.business_id,
                description: null,
                floor: floor,
                id: item.product_id,
                name: item.product_name,
                price: item.sub_total,
                quantity: parseInt(item.quantity),
                status: 1,
                tableId: parseInt(orderData.table_id),
                tableNo: floor,
                user_id: item.user_id
            }));
            return transformedData
        } catch (er) {
            console.log(`Error in AllOrdersData-->${er}`);

        }
    }

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
        if (route?.params?.navigateFrom == 'AllOrders') {
            const datafromAllOrders = AllOrdersData(data)
            setFilterData(datafromAllOrders)

        }
        else {
            const groupedData = groupDataByTable(orderedItems);

            const filteredData = groupedData[tableId] || [];

            setFilterData(filteredData)
        }


    }, [orderedItems])


    // handle save order //
    const handleSaveOrder = async () => {
        try {
            //network condition lgaani hai //

            if (network) {
                const tableIdsToDelete = [...new Set(filterData.map(item => item.tableId))];

                const transformedData = {
                    orders: [
                        {
                            sub_total: filterData.reduce((acc, item) => acc + (item.quantity * parseFloat(item?.price)), 0).toFixed(2),
                            discount_percentage: 0,
                            order_number: `${Date.now()}`,
                            discount: 0,
                            service_charge: 0,
                            grand_total: 0,
                            paid: 0,
                            created_user_id: 3,
                            // updated_user_id: 4,
                            business_id: filterData[0]?.business_id,
                            user_id: filterData[0]?.user_id,
                            table_id: filterData[0]?.tableId,
                            table: `${floorName} Table No : ${filterData[0]?.tableNo} `,
                            order_type: "DineIn",
                            payment_method: "Cash",
                            status: 1,
                            note: "Order from waiter app",
                            items: filterData.map(item => ({
                                product_id: item.id,
                                cart_id: "null",
                                product_name: item.name,
                                description: "null",
                                quantity: item.quantity,
                                unit_cost: 5.00,
                                business_id: 4,
                                user_id: item?.user_id,
                                sub_total: item?.quantity * parseFloat(item?.price).toFixed(2)
                            }))
                        }
                    ]
                }
                if (transformedData) {
                    const response = await postData(apiRoutes.postSaveOrder, transformedData);
                    if (response?.message == 'Data Sync successfully.') {
                        dispatch(removeItemsByTableId(tableIdsToDelete));
                        setShowSuccessDialog(true)
                    } else {
                        alert(response?.message)
                    }
                }

            } else {
                alert('No internet connection');
            }
        } catch (err) {
            console.error('Error in handleSaveOrder', err);
        }
    };


    return (
        <View style={styles.mainView}>
            <Header title='KOT' onPress={() => navigation.navigate('Home')} />
            {/* ------ */}

            <Portal>
                <Dialog visible={showSuccessDialog}>
                    {/* <Dialog.Title>Order has been placed successfully!</Dialog.Title> */}
                    <Dialog.Content>
                        <Text style={{ fontSize: FontSize.h3, fontFamily: FontFamily.TTCommonsRegular }} >Order has been placed successfully!</Text>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => {
                            setShowSuccessDialog(false);
                            navigation.navigate('Home');
                        }}>Okay</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>

            {/* ------ */}
            <View style={styles.container} >
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }} >
                    {/* <FloorTableTitleCard title={title} /> */}
                    <FloorTableTitleCard title={`${route?.params?.orderItem?.table == undefined ? `${floorName} Table no:${filterData[0]?.tableNo}` : `${route?.params?.orderItem?.table}`}`} />


                    




                    <Button onPress={() => navigation.navigate('TableView', {
                        tableInfo: { hall_id: floor, table_no: tableNo, id: tableId },
                        navigationFrom: route?.params?.navigateFrom == 'AllOrders' ? 'AllOrders' : 'KOT'
                    })} icon="pencil" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='text' style={{ borderRadius: 0, padding: 0 }}>
                        Edit Dish
                    </Button>
                     <Button icon="note-edit" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='text' style={{ borderRadius: 0, padding: 0 }} onPress={() => setNote (true)}>
                        Note
                    </Button> 
                </View>
                <Spacer />
                <KOTItemsList data={filterData}  note={note}/>
                <View>
                    <View style={[styles.header, styles.itemsContainer]} >
                        <View style={{ width: '80%' }}>
                            <Text style={{ fontFamily: FontFamily.TTCommonsDemiBold }} >Sub Total : </Text>
                            {/* <Text style={{ fontFamily: FontFamily.TTCommonsRegular, fontSize: FontSize.medium }} >{}</Text> */}
                        </View>
                        <Text style={{ fontFamily: FontFamily.TTCommonsMedium, }} ><FAIcon name='rupee' /> {filterData?.reduce((acc, item) => acc + (item.quantity * parseFloat(item?.price)), 0).toFixed(2)}</Text>
                    </View>
                    {true && <Divider />}
                </View>
                <Spacer />
                <View style={{ flexDirection: 'row', alignItems: 'center' }} >
                    <Button labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='elevated' style={{ borderRadius: 0, padding: 0 }} onPress={() => handleSaveOrder()}>
                        Save Order
                    </Button>
                    <Button icon="printer" labelStyle={{ fontFamily: FontFamily.TTCommonsBold }} textColor={colors.splash_background} mode='elevated' style={{ borderRadius: 0, padding: 0, marginLeft: 10 }} onPress={() => { }}>
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
    },
    header: { alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' },
    headerTxt: { fontFamily: FontFamily.TTCommonsBold, fontSize: FontSize.h4 },
    itemsContainer: { paddingVertical: 5 }
})